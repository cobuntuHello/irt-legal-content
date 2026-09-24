/**
 * The shape of a legal document.
 *
 * ── Why this package ships DATA and not components ─────────────────────────
 *
 * `@cobuntu/legal-content` ships JSX, and that works there because both of its
 * consumers are Tailwind apps sharing one design system. IRT's two consumers do
 * not: `irt-landing` is hand-written CSS with its own editorial type scale and
 * has no Tailwind at all, while `irt-app` is Tailwind v4 on the warm ground.
 * A shared component would have to pick one, and the other would render it
 * unstyled — which is precisely the failure mode the Cobuntu package documents
 * for a missing `@source` line.
 *
 * So the package owns the WORDS, which is the thing that must never diverge,
 * and each app owns the markup, which is the thing that should. A renderer is
 * about forty lines on either side; two copies of a privacy policy is how the
 * Cobuntu Terms once described a payout system that had been retired.
 *
 * It also means no React dependency, no JSX, no build step, and nothing for
 * Tailwind to scan.
 */

/** The languages the documents exist in. See `LEGAL_LOCALES` in index.ts. */
export type LegalLocale = "pt-PT" | "en";

/**
 * A run of text inside a section.
 *
 * Deliberately small. Anything a legal document needs is a paragraph, a
 * sub-heading, a list or a table; richer blocks would push formatting
 * decisions into the content, where the two apps could no longer disagree
 * about them.
 */
export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  /**
   * `head` and every row must be the same length. The renderers index by
   * column, and a ragged row would drop cells silently rather than fail.
   * `auditDocs()` in index.ts catches it, and the test suite fails on it.
   */
  | { kind: "table"; head: string[]; rows: string[][] };

export interface Section {
  /**
   * The anchor, and the stable identity of this section across languages and
   * across edits.
   *
   * Numbers are NOT part of it. A section renumbered when another is inserted
   * would break every link anyone had saved, and "see §8" in a support email
   * would quietly come to mean something else. The renderers print the index
   * position as the visible number; the id is what a URL carries.
   */
  id: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  /** Shown as the page title and in the browser tab. */
  title: string;
  /** One sentence, for the page's meta description and the lede. */
  summary: string;
  /**
   * ISO date, and the date the WORDS changed, not the date of a deploy.
   * Same reasoning as `CONTENT_LAST_MODIFIED` in irt-landing's site.ts.
   */
  updated: string;
  sections: Section[];
}
