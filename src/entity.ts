/**
 * Who the controller is, in one place.
 *
 * Every mention of the company across four documents reads from here. A legal
 * entity that appears as a literal in eight paragraphs is one that will be
 * half-renamed the day it changes, and a privacy policy naming two different
 * controllers is worse than one naming none.
 *
 * ── On the name ────────────────────────────────────────────────────────────
 *
 * The controller is CHASTRE CONSULTING UNIPESSOAL LDA, not Anabela Chastre
 * personally and not "IRT". IRT® is a registered methodology and a product
 * name; it is not a legal person and cannot be a controller. If the business
 * is ever moved into an IRT entity, this file is the change.
 */

export const ENTITY = {
  /** Exactly as registered. */
  legalName: "Chastre Consulting Unipessoal Lda",
  /** Número de Identificação de Pessoa Coletiva / VAT. */
  nif: "510564046",
  address: "Avenida da República n.º 1, 2.º D, 1495-110 Algés, Portugal",
  country: "Portugal",
  /**
   * Where a data-subject request lands.
   *
   * A real, monitored address is a legal requirement, not a nicety: both
   * documents tell a member this is how they exercise their rights, and an
   * unread inbox turns a 30-day statutory deadline into a breach.
   */
  email: "anabela.chastre@chastreconsulting.com",
  /** The product this entity operates. */
  product: "IRT® Leadership Platform",
} as const;

/**
 * The supervisory authority a member complains to.
 *
 * Portuguese controller, so the CNPD, regardless of where the member lives:
 * a member elsewhere in the EU may also go to their own authority, and the
 * documents say so rather than implying the CNPD is the only door.
 */
export const AUTHORITY = {
  name: "Comissão Nacional de Proteção de Dados (CNPD)",
  url: "https://www.cnpd.pt",
} as const;

/**
 * The platform IRT is installed on, and a separate controller.
 *
 * This distinction is the single most load-bearing fact in the privacy policy.
 * Cobuntu holds the account, the password, the membership and any payment;
 * IRT holds the assessment results and the method. Neither can answer for the
 * other, and a member who reads only one document has half the picture, so
 * both IRT documents link out to Cobuntu's.
 */
export const PLATFORM = {
  name: "Cobuntu",
  community: "https://irt.cobuntu.com",
  terms: "https://irt.cobuntu.com/terms",
  privacy: "https://irt.cobuntu.com/privacy",
} as const;

/**
 * The date the documents' WORDS last changed.
 *
 * One date for all four, because they are one release and a member comparing
 * the Portuguese and the English should not find two. Bump it when the text
 * changes; leave it alone when only a renderer does.
 */
export const LAST_UPDATED = "2026-09-24";
