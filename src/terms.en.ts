/**
 * Terms of Use, English.
 *
 * A translation of terms.pt-PT.ts, which is authoritative. Section ids match
 * the Portuguese one for one, for the reasons set out in privacy.en.ts.
 */

import type { LegalDoc } from "./types";
import { ENTITY, PLATFORM, LAST_UPDATED } from "./entity";

export const termsEn: LegalDoc = {
  title: "Terms of Use",
  summary:
    "The rules for using the IRT® platform: what it is, what it is not, what you can expect from us and what we expect from you.",
  updated: LAST_UPDATED,
  sections: [
    {
      id: "quem",
      title: "Who provides this service",
      blocks: [
        {
          kind: "p",
          text: `The ${ENTITY.product} is operated by ${ENTITY.legalName} (Portuguese company number ${ENTITY.nif}), registered at ${ENTITY.address}. In this document, "we" is that company and "you" is whoever uses the platform.`,
        },
        { kind: "p", text: `Contact: ${ENTITY.email}.` },
        {
          kind: "p",
          text: "By using the IRT® platform you accept these terms. If you do not accept them, do not use it.",
        },
      ],
    },

    {
      id: "servico",
      title: "What the IRT® platform is",
      blocks: [
        {
          kind: "p",
          text: "IRT® is a leadership development method, and the platform is where you work through it. It comprises:",
        },
        {
          kind: "ul",
          items: [
            "the Leadership Snapshot®, a self-assessment questionnaire producing a State and a profile across dimensions and competencies;",
            "a six-month IRT® Cycle, with checkpoints at 30 and 90 days and reassessment at 180;",
            "development Missions, assigned according to your result;",
            "the Toolkit, where the MIA assistant matches the situation you describe to an Action Plan from the method;",
            "the Library, holding development content tied to the competencies;",
            "for organisations, an aggregate reading of the enrolled group.",
          ],
        },
        {
          kind: "p",
          text: "We may change, add or withdraw features. Where a change withdraws something substantial, we will give reasonable notice.",
        },
      ],
    },

    {
      id: "acesso",
      title: "Who may use it, and how you get in",
      blocks: [
        {
          kind: "p",
          text: `Access uses your ${PLATFORM.name} account and depends on belonging to the IRT® community on that platform. We do not create accounts and we do not store passwords.`,
        },
        {
          kind: "p",
          text: `That means the ${PLATFORM.name} terms apply as well, at ${PLATFORM.terms}. If you stop belonging to the community you lose access to the IRT® platform, and that follows from your relationship with the platform rather than from any decision of ours.`,
        },
        {
          kind: "p",
          text: "The platform is intended for professionals over 18 in leadership roles, or preparing to take one on.",
        },
        {
          kind: "p",
          text: "Access is personal. Do not share your account and do not let anyone else answer the Snapshot for you, which besides breaching these terms would produce a result worth nothing.",
        },
      ],
    },

    {
      id: "pagamento",
      title: "Payment",
      blocks: [
        {
          kind: "p",
          text: `The IRT® platform charges nothing directly and processes no payments. Where there is an amount to pay for community membership, an event or a programme, the transaction is ${PLATFORM.name}'s and is governed by their terms and their refund policy.`,
        },
        {
          kind: "p",
          text: "Where an organisation buys a programme for a group of leaders, that is done under a separate agreement with our company, and that agreement prevails over these terms as to whatever it covers.",
        },
      ],
    },

    {
      id: "natureza",
      title: "What the Leadership Snapshot® is not",
      blocks: [
        {
          kind: "p",
          text: "This section matters, and we ask you to read it even if you skip the others.",
        },
        {
          kind: "p",
          text: "The Snapshot is a self-assessment and structured-reflection instrument. It rests on what you report about yourself, at one point in time.",
        },
        { kind: "h3", text: "It is not" },
        {
          kind: "ul",
          items: [
            "a validated psychometric test or a clinical instrument;",
            "a health diagnosis, a psychological assessment or medical advice;",
            "a performance appraisal, nor evidence of competence or fitness for a role;",
            "a prediction of professional success.",
          ],
        },
        {
          kind: "p",
          text: "The State, the scores and the Missions are working material for your development. They do not replace professional judgement, specialist support or, where relevant, clinical care. If what you are living through at work is affecting your health, see a health professional rather than an application.",
        },
        {
          kind: "p",
          text: "MIA's replies are generated by a language model working from the method. They can contain errors and should be read with the same distance you would give a colleague's suggestion, not as instruction.",
        },
      ],
    },

    {
      id: "organizacoes",
      title: "Use by organisations",
      blocks: [
        {
          kind: "p",
          text: "Where an organisation enrols a group of leaders, it undertakes the following, as a condition of access to the aggregate reading:",
        },
        {
          kind: "ul",
          items: [
            "not to use IRT® data, in any form, to decide on hiring, promotion, pay, termination or any disciplinary measure;",
            "not to require any employee to show it their individual result, their Missions, what they wrote or their conversations with MIA, nor to make anything conditional on showing them;",
            "not to attempt to re-identify individuals from aggregate figures, including by cross-referencing information it already holds;",
            "to tell enrolled employees that it has enrolled them, and what for.",
          ],
        },
        {
          kind: "p",
          text: "On our side, the platform is built to make this hard to breach and not merely prohibited: the aggregate is computed without ever assembling a row per person, statistics appear only from 5 assessed participants upwards, and Toolkit use is counted over an irreversible code. The Privacy Policy sets out exactly what an organisation sees.",
        },
        {
          kind: "p",
          text: "Breach of these undertakings entitles us to suspend the organisation's access to the aggregate reading immediately.",
        },
      ],
    },

    {
      id: "utilizacao",
      title: "What we expect from you",
      blocks: [
        { kind: "p", text: "In using the platform, you undertake to:" },
        {
          kind: "ul",
          items: [
            "answer the Snapshot honestly, because a result built on convenient answers is of no use to you;",
            "not attempt to reach other people's data, circumvent access checks, probe the service for weaknesses or extract content by automated means;",
            "not copy, redistribute or reuse the method's content outside your personal use, per the section below;",
            "not use the platform to harass, defame or harm anyone;",
            "not circumvent usage limits, including the limit of 40 MIA messages per day.",
          ],
        },
        { kind: "h3", text: "About what you attach" },
        {
          kind: "p",
          text: "You can attach files to conversations with MIA. They often contain information about other people, such as 360-degree feedback or messages from colleagues. You are the one deciding to share them with us, and it is your responsibility to be entitled to do so.",
        },
        {
          kind: "p",
          text: "Do not attach health data, data about minors, confidential information that is not yours, or anything you would not show the person concerned. Remove names where the question does not need them. We delete files after 30 days, and we may remove any content that breaches this rule sooner.",
        },
      ],
    },

    {
      id: "propriedade",
      title: "What is ours and what is yours",
      blocks: [
        { kind: "h3", text: "Ours" },
        {
          kind: "p",
          text: "The IRT® method, the trade marks, the Leadership Snapshot®, the questionnaire statements, the taxonomy of dimensions and competencies, the Action Plans, the Missions, the Library content and the software are our company's property and are protected by copyright and industrial property rights.",
        },
        {
          kind: "p",
          text: "We grant you a personal, non-exclusive, non-transferable licence to use them while you have access, and only for your own development. You may not reproduce or adapt them, train third parties with them, or use them to build a competing service.",
        },
        { kind: "h3", text: "Yours" },
        {
          kind: "p",
          text: "Your answers, reflections, evidence, conversations and files are yours. We claim no ownership over any of it.",
        },
        {
          kind: "p",
          text: "You grant us only the licence needed to store and process that content in order to provide the service, strictly on the terms of the Privacy Policy. We do not use it to train models, we do not sell it, and we do not show it to third parties beyond what is described there. That licence ends when the content is deleted.",
        },
        {
          kind: "p",
          text: "Your Snapshot result is yours and you may ask us for a copy at any time.",
        },
      ],
    },

    {
      id: "disponibilidade",
      title: "Service availability",
      blocks: [
        {
          kind: "p",
          text: "We do what is reasonable to keep the platform available, but we do not guarantee uninterrupted or error-free operation, and there is no contracted service level.",
        },
        {
          kind: "p",
          text: "In particular, the MIA assistant runs against a prepaid balance with the model provider. Once that balance is exhausted, or where the provider is unavailable, MIA stops answering while the rest of the platform continues to work. That is an anticipated condition rather than a fault, and the application says so instead of failing silently.",
        },
        {
          kind: "p",
          text: "There may be interruptions for maintenance. Outside working hours wherever possible.",
        },
      ],
    },

    {
      id: "responsabilidade",
      title: "Limitation of liability",
      blocks: [
        {
          kind: "p",
          text: "The platform is provided as it stands. To the fullest extent permitted by law, we give no warranty that the results are fit for any particular purpose of yours.",
        },
        {
          kind: "p",
          text: "We are not liable for decisions you take, or that anyone else takes, on the basis of a Snapshot result, a Mission or a reply from MIA. Those decisions are yours.",
        },
        {
          kind: "p",
          text: "We are not liable for indirect loss, lost profits, loss of opportunity or loss of data caused by matters outside our control, nor for unavailability of the Cobuntu platform or of any provider identified in the Privacy Policy.",
        },
        {
          kind: "p",
          text: "Nothing in these terms excludes or limits our liability for wilful misconduct, gross negligence, or death or personal injury, nor does it set aside rights the law gives consumers that cannot be contracted away.",
        },
      ],
    },

    {
      id: "suspensao",
      title: "Suspension and termination",
      blocks: [
        {
          kind: "p",
          text: "You may stop using the platform whenever you wish, and ask for your data to be deleted under the Privacy Policy.",
        },
        {
          kind: "p",
          text: "We may suspend or end your access if you breach these terms seriously or repeatedly, in particular the rules on use by organisations or on what you attach. Except where the seriousness prevents it, we will warn you first and give you a chance to put it right.",
        },
        {
          kind: "p",
          text: "If we discontinue the platform, we will give reasonable notice and let you obtain a copy of your data before it closes.",
        },
      ],
    },

    {
      id: "alteracoes",
      title: "Changes to these terms",
      blocks: [
        {
          kind: "p",
          text: "We may change these terms. The date at the top marks the current version. Where a change is substantial we will say so in the application or by email with reasonable notice, and continuing to use the platform after it takes effect counts as acceptance. If you do not accept, you may stop using the platform and ask for your data to be deleted.",
        },
      ],
    },

    {
      id: "lei",
      title: "Governing law and jurisdiction",
      blocks: [
        { kind: "p", text: "These terms are governed by Portuguese law." },
        {
          kind: "p",
          text: "The courts of the district of Lisbon have jurisdiction over any dispute, to the exclusion of any other, without prejudice to a consumer's right to sue in the courts of their own domicile where the law guarantees it.",
        },
        {
          kind: "p",
          text: "As a consumer you may also use an alternative dispute resolution body. The list of registered bodies is available on the Portuguese consumer portal at https://www.consumidor.gov.pt.",
        },
        {
          kind: "p",
          text: "If any clause of these terms is held invalid, the remainder stays in force.",
        },
        {
          kind: "p",
          text: "The Portuguese version is the authoritative one. This English version is provided for convenience and, where the two diverge, the Portuguese prevails.",
        },
      ],
    },
  ],
};
