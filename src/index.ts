/**
 * @irt/legal-content — the Privacy Policy and the Terms of Use, as data.
 *
 * Two consumers, `irt-landing` and `irt-app`, render these with their own
 * markup. See types.ts for why the package ships data rather than components.
 */

import type { LegalDoc, LegalLocale } from "./types";
import { privacyPtPT } from "./privacy.pt-PT";
import { privacyEn } from "./privacy.en";
import { termsPtPT } from "./terms.pt-PT";
import { termsEn } from "./terms.en";

export type { LegalDoc, LegalLocale, Section, Block } from "./types";
export { ENTITY, AUTHORITY, PLATFORM, LAST_UPDATED } from "./entity";

/**
 * The languages the documents exist in.
 *
 * Two, not ten. A legal document is only as good as the care in its wording,
 * and a machine-translated liability clause is worse than an English one a
 * reader has to work slightly harder at. Portuguese because the controller,
 * the law and most members are Portuguese; English for everyone else.
 */
export const LEGAL_LOCALES: readonly LegalLocale[] = ["pt-PT", "en"] as const;

/**
 * Map any app locale onto a language the documents exist in.
 *
 * Both apps speak more languages than this package does, and they speak
 * different sets: the landing has pt-pt, pt-br and en, while the app has ten.
 * Rather than making each one invent a fallback, the rule lives here.
 *
 * Anything Portuguese lands on pt-PT, including pt-BR: the document is
 * governed by Portuguese law and a Brazilian reader is far better served by
 * the authoritative Portuguese than by an English translation of it.
 * Everything else lands on English.
 */
export function legalLocaleFor(locale: string): LegalLocale {
  return locale.toLowerCase().startsWith("pt") ? "pt-PT" : "en";
}

const PRIVACY: Record<LegalLocale, LegalDoc> = { "pt-PT": privacyPtPT, en: privacyEn };
const TERMS: Record<LegalLocale, LegalDoc> = { "pt-PT": termsPtPT, en: termsEn };

export function privacyDoc(locale: string): LegalDoc {
  return PRIVACY[legalLocaleFor(locale)];
}

export function termsDoc(locale: string): LegalDoc {
  return TERMS[legalLocaleFor(locale)];
}

/** Every document, for tests and for the sitemap. */
export const ALL_DOCS: Record<"privacy" | "terms", Record<LegalLocale, LegalDoc>> = {
  privacy: PRIVACY,
  terms: TERMS,
};

/**
 * Structural problems a compiler cannot see, as a list of complaints.
 *
 * ── Why a function and not a check at import time ──────────────────────────
 *
 * A throw on import would take the whole site down over a ragged table row,
 * which trades a formatting bug for an outage. This returns findings and the
 * package's test suite fails on them, so a bad edit is caught at build time
 * and never at request time.
 *
 * What it catches is exactly what human editing gets wrong: a table row with
 * the wrong number of cells (the renderers index by column, so the extra cell
 * would simply vanish), an empty section, a duplicate anchor, and the big one,
 * a section added to one language and forgotten in the other.
 */
export function auditDocs(): string[] {
  const problems: string[] = [];

  for (const [name, byLocale] of Object.entries(ALL_DOCS)) {
    const shapes = new Map<LegalLocale, string[]>();

    for (const locale of LEGAL_LOCALES) {
      const doc = byLocale[locale];
      const where = `${name}/${locale}`;
      const seen = new Set<string>();

      if (!doc.sections.length) problems.push(`${where}: no sections`);

      for (const s of doc.sections) {
        if (seen.has(s.id)) problems.push(`${where}: duplicate section id "${s.id}"`);
        seen.add(s.id);

        if (!s.title.trim()) problems.push(`${where}/${s.id}: empty title`);
        if (!s.blocks.length) problems.push(`${where}/${s.id}: no blocks`);

        for (const b of s.blocks) {
          if (b.kind === "table") {
            const width = b.head.length;
            b.rows.forEach((row, i) => {
              if (row.length !== width) {
                problems.push(
                  `${where}/${s.id}: table row ${i} has ${row.length} cells, head has ${width}`,
                );
              }
            });
          }
          if (b.kind === "ul" && !b.items.length) problems.push(`${where}/${s.id}: empty list`);
        }
      }

      shapes.set(locale, doc.sections.map((s) => s.id));
    }

    /* Every translation carries the same sections in the same order. This is
       the check that matters most: a clause added in Portuguese and missed in
       English is a document that promises different things to two readers. */
    const [first, ...rest] = LEGAL_LOCALES;
    const reference = shapes.get(first!)!.join(",");
    for (const locale of rest) {
      const other = shapes.get(locale)!.join(",");
      if (other !== reference) {
        problems.push(
          `${name}: section ids differ between ${first} and ${locale}\n  ${first}: ${reference}\n  ${locale}: ${other}`,
        );
      }
    }
  }

  return problems;
}
