import { describe, expect, it } from "vitest";
import {
  ALL_DOCS,
  ENTITY,
  LEGAL_LOCALES,
  auditDocs,
  legalLocaleFor,
  privacyDoc,
  termsDoc,
} from "../src/index";
import type { LegalDoc } from "../src/types";

/** Every paragraph, heading, list item and table cell of one document. */
function textOf(doc: LegalDoc): string {
  const parts = [doc.title, doc.summary];
  for (const s of doc.sections) {
    parts.push(s.title);
    for (const b of s.blocks) {
      if (b.kind === "p" || b.kind === "h3") parts.push(b.text);
      if (b.kind === "ul") parts.push(...b.items);
      if (b.kind === "table") parts.push(...b.head, ...b.rows.flat());
    }
  }
  return parts.join("\n");
}

const EVERY_DOC = Object.entries(ALL_DOCS).flatMap(([name, byLocale]) =>
  LEGAL_LOCALES.map((locale) => [`${name}/${locale}`, byLocale[locale]] as const),
);

describe("structure", () => {
  it("is well formed, and the translations carry the same sections", () => {
    /* auditDocs is the real check; this test exists so its findings are read
       out rather than collapsing into "expected 3 to be 0". */
    expect(auditDocs()).toEqual([]);
  });

  it("covers both documents in both languages", () => {
    expect(EVERY_DOC).toHaveLength(4);
  });
});

describe("locale mapping", () => {
  it("sends every Portuguese to the authoritative version", () => {
    for (const l of ["pt", "pt-PT", "pt-pt", "pt-BR", "pt-br"]) {
      expect(legalLocaleFor(l)).toBe("pt-PT");
    }
  });

  it("sends everything else to English", () => {
    /* The app speaks ten languages and this package speaks two. Anything it
       does not have a document for has to land somewhere readable rather than
       on undefined. */
    for (const l of ["en", "es", "fr", "de", "it", "nl", "pl", "ca", "", "zz"]) {
      expect(legalLocaleFor(l)).toBe("en");
    }
  });

  it("never returns undefined for an unknown locale", () => {
    expect(privacyDoc("klingon").sections.length).toBeGreaterThan(0);
    expect(termsDoc("klingon").sections.length).toBeGreaterThan(0);
  });
});

describe("the things that must never go missing", () => {
  /*
   * A privacy policy without a way to reach the controller is not a privacy
   * policy, it is an essay. Both documents tell the member this address is how
   * they exercise their rights, so its absence would be a live legal defect
   * rather than a typo.
   */
  it.each(EVERY_DOC)("%s names the controller and the contact address", (_name, doc) => {
    const text = textOf(doc);
    expect(text).toContain(ENTITY.legalName);
    expect(text).toContain(ENTITY.nif);
    expect(text).toContain(ENTITY.email);
  });

  it("both authoritative versions say they prevail", () => {
    /* Two languages, one of which governs. If the precedence sentence is ever
       dropped, two documents disagree and nothing says which wins. */
    for (const doc of [privacyDoc("pt-PT"), termsDoc("pt-PT")]) {
      expect(textOf(doc)).toContain("prevalece");
    }
    for (const doc of [privacyDoc("en"), termsDoc("en")]) {
      expect(textOf(doc)).toContain("Portuguese prevails");
    }
  });
});

describe("the numbers have to match the code", () => {
  /*
   * ── Why these are asserted as strings ──────────────────────────────────
   *
   * Each of these is a promise about behaviour implemented in another repo,
   * so this test cannot import the constant and compare. What it CAN do is
   * fail when one of the numbers is edited out of one language and left in
   * the other, which is the realistic failure, and stand as the list someone
   * re-checks when they change a retention period.
   *
   *   30 days ....... irt-backend/lib/toolkit/attachments.ts  RETENTION_DAYS
   *   90 days ....... irt-backend/lib/member/store.ts         EMAIL_RETENTION_DAYS
   *   40 messages ... irt-backend/lib/toolkit/quota.ts        DAILY_MESSAGES
   *   5 people ...... irt-backend/lib/access.ts               MIN_PARTICIPANTS_FOR_STATS
   *   11 hours ...... irt-app/lib/session.ts                  cookie maxAge
   */
  const privacyNumbers = ["30", "90", "40", "5", "11"];

  it.each(LEGAL_LOCALES)("the %s privacy policy states every retention period", (locale) => {
    const text = textOf(privacyDoc(locale));
    for (const n of privacyNumbers) expect(text).toContain(n);
  });

  it.each(LEGAL_LOCALES)("the %s terms state the MIA daily limit", (locale) => {
    expect(textOf(termsDoc(locale))).toContain("40");
  });
});

describe("house style", () => {
  it.each(EVERY_DOC)("%s uses no em-dashes", (_name, doc) => {
    /* The standing copy rule across every Cobuntu and client surface. An
       em-dash in a legal document is also a real hazard: it is the character
       most likely to arrive mangled through a copy-paste into a PDF or an
       email client. */
    expect(textOf(doc)).not.toMatch(/—/);
  });

  it.each(EVERY_DOC)("%s uses no emojis", (_name, doc) => {
    /* Not a bare \p{Extended_Pictographic}: that property includes U+00AE
       REGISTERED SIGN, and "IRT®" appears on nearly every page of both
       documents. The trade mark symbols are the point of the name, so they
       are removed first rather than the check being dropped. The `v` flag's
       set subtraction would say this more directly, but it needs an ES2024
       target and this package compiles to ES2022. */
    const withoutMarks = textOf(doc).replace(/[®™©]/g, "");
    expect(withoutMarks).not.toMatch(/\p{Extended_Pictographic}/u);
  });

  it.each(EVERY_DOC)("%s has no unresolved placeholder", (_name, doc) => {
    /* The house rule for an unincorporated client is bracketed placeholders.
       This client IS incorporated, so there should be none left, and a
       [JURISDICTION] reaching production would be visible to the first
       person who reads the page. */
    expect(textOf(doc)).not.toMatch(/\[[A-Z][A-Z .]{3,}\]/);
  });
});
