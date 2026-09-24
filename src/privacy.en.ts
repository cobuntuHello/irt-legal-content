/**
 * Privacy Policy, English.
 *
 * A translation of privacy.pt-PT.ts, which is the authoritative version and
 * says so in its final section. This one says the same.
 *
 * ── Keep the section ids identical ─────────────────────────────────────────
 *
 * Same `id` on the same section in both languages, in the same order. That is
 * what lets a member switch language on a deep link and land on the paragraph
 * they were reading, and what lets `auditDocs()` in index.ts catch a section
 * added to one language and forgotten in the other. A test enforces it,
 * because forgetting is the normal way translations rot.
 */

import type { LegalDoc } from "./types";
import { ENTITY, AUTHORITY, PLATFORM, LAST_UPDATED } from "./entity";

export const privacyEn: LegalDoc = {
  title: "Privacy Policy",
  summary:
    "What data IRT® processes, why, for how long and with whom, including what your organisation never sees.",
  updated: LAST_UPDATED,
  sections: [
    {
      id: "responsavel",
      title: "Who is responsible for your data",
      blocks: [
        {
          kind: "p",
          text: `${ENTITY.legalName} (Portuguese company number ${ENTITY.nif}), registered at ${ENTITY.address}, is the controller of the personal data described in this policy. It operates the ${ENTITY.product}, which comprises the public IRT® site and the application where you take the Leadership Snapshot® and work through your Missions, the Toolkit and the Library.`,
        },
        {
          kind: "p",
          text: `For anything concerning this policy, or to exercise the rights set out under "Your rights", write to ${ENTITY.email}. We answer within 30 days at the latest.`,
        },
        {
          kind: "p",
          text: "We have not appointed a Data Protection Officer, because we do not meet the criteria that make one mandatory: we carry out no large-scale systematic monitoring and we do not process special categories of data as a core activity. The address above is read by the company's principal.",
        },
      ],
    },

    {
      id: "ambito",
      title: "What this covers, and what it does not",
      blocks: [
        {
          kind: "p",
          text: "It covers the public IRT® site and the IRT® application you reach from the community.",
        },
        {
          kind: "p",
          text: `It does not cover the ${PLATFORM.name} platform, where your account lives. That distinction has practical consequences and is not a formality: ${PLATFORM.name} is independently responsible for your account, your password, your community membership and any payment, and has its own policy. IRT® is responsible for what we describe here, which is the record of your work with the method.`,
        },
        {
          kind: "p",
          text: `The ${PLATFORM.name} policy is at ${PLATFORM.privacy}. You need both to have the full picture.`,
        },
      ],
    },

    {
      id: "conta",
      title: "Your account is not ours",
      blocks: [
        {
          kind: "p",
          text: "IRT® has no sign-up, no password and no user table. We do not store credentials because we never receive them.",
        },
        {
          kind: "p",
          text: `When you open IRT® from the community, ${PLATFORM.name} issues a short-lived, single-use code that our servers exchange for a session. From that exchange we receive a user identifier, and nothing else, unless the community has authorised more:`,
        },
        {
          kind: "ul",
          items: [
            "your email address, so we can send you the checkpoints of your cycle;",
            "your name and profile photograph, so the application addresses you rather than a code;",
            "the language you chose on the platform, so IRT® speaks it too.",
          ],
        },
        {
          kind: "p",
          text: "Where the community has not authorised one of these, the application still works, with less. We do not ask you for this data directly, nor obtain it any other way.",
        },
        {
          kind: "p",
          text: "Internally, everything we hold is keyed to that identifier. No name and no address sit next to your answers: anyone opening our database would see results attached to a code, not to a person.",
        },
      ],
    },

    {
      id: "dados",
      title: "What we process, and on what basis",
      blocks: [
        {
          kind: "p",
          text: "The table below is exhaustive as to personal data. Everything IRT® holds about you falls into one of these rows.",
        },
        {
          kind: "table",
          head: ["Data", "Purpose", "Legal basis", "How long"],
          rows: [
            [
              "User and community identifier",
              "Tie your journey to you and to nobody else",
              "Performance of a contract",
              "For as long as you have access to IRT®",
            ],
            [
              "Leadership Snapshot® answers (51 statements) and the computed result: State, Readiness, scores per dimension and per competency",
              "Produce your report, select your Missions and let cycles be compared",
              "Performance of a contract",
              "For as long as you have access to IRT®. Comparability across cycles is the product: a deleted result makes the next one unreadable",
            ],
            [
              "Cycle, assigned Missions, the status of each and the dates",
              "Run the six-month programme",
              "Performance of a contract",
              "For as long as you have access to IRT®",
            ],
            [
              "Your written reflections: Mission text, evidence, lever consolidation and cycle reflections",
              "They are yours. They exist so you can reread them",
              "Performance of a contract",
              "For as long as you have access to IRT®. See the next section",
            ],
            [
              "Conversations with MIA, including whatever you write in them",
              "Keep the conversation open between sessions",
              "Performance of a contract",
              "Until you delete them. There is no automatic sweep",
            ],
            [
              "Files you attach to a conversation",
              "Explain a situation to MIA",
              "Performance of a contract",
              "30 days, then deleted automatically",
            ],
            [
              "Email, name, photograph and language from the platform",
              "Send you the checkpoints and render the application in your language",
              "Performance of a contract",
              "The email is deleted 90 days after your last sign-in, where no cycle is active",
            ],
            [
              "A record that someone opened an Action Plan, in the form of an irreversible code",
              "Count how many distinct leaders looked for a theme, without knowing which ones",
              "Legitimate interest in understanding which themes are sought",
              "For as long as the Action Plan exists",
            ],
            [
              "Server logs (IP address, timestamp, errors)",
              "Security and fault diagnosis",
              "Legitimate interest in keeping the service running and secure",
              "Held by our hosting providers for short periods, typically up to 30 days",
            ],
          ],
        },
        {
          kind: "p",
          text: "We process no special categories of data. The Leadership Snapshot® measures leadership behaviours you report about yourself, not health, beliefs, origin or orientation, and it is neither a clinical nor a psychometric instrument. We carry out no profiling with legal effects and no automated decision-making that significantly affects you: the algorithm computes a result and suggests Missions, and nothing in it decides anything about your employment.",
        },
      ],
    },

    {
      id: "texto-livre",
      title: "What you write is yours",
      blocks: [
        {
          kind: "p",
          text: "The reflections you write in Missions, the evidence, the lever consolidation and the cycle reflections are treated differently from everything else, deliberately.",
        },
        { kind: "h3", text: "This text is never" },
        {
          kind: "ul",
          items: [
            "analysed, scored or used to change your result;",
            "sent to MIA or to any artificial-intelligence model;",
            "included in exports, including those the platform administrator runs;",
            "visible to your organisation, in any form.",
          ],
        },
        {
          kind: "p",
          text: "It is stored so that you can reread it, and for no other reason. That separation is written into the code and not only into this policy: the function that assembles what MIA may know about you does not even select those columns, and the administrative export omits them.",
        },
      ],
    },

    {
      id: "mia",
      title: "The MIA assistant",
      blocks: [
        {
          kind: "p",
          text: "MIA is a conversational assistant that matches the situation you describe to one of the method's Action Plans. It runs on a language model from Anthropic (Claude), which acts as a processor.",
        },
        { kind: "h3", text: "What MIA knows about you" },
        {
          kind: "p",
          text: "Your State, your Levers, the titles and status of your Missions, and where you are in the cycle. Nothing more. That context is there to choose better, not to assess you.",
        },
        { kind: "h3", text: "What MIA never receives" },
        {
          kind: "p",
          text: "Your written reflections, per the section above, and your Snapshot answers. It receives the computed result, not the 51 answers behind it.",
        },
        { kind: "h3", text: "Conversations are stored" },
        {
          kind: "p",
          text: "A conversation stays available until you delete it. When you delete it, it is genuinely deleted: the messages are removed from the database, not flagged as hidden. We keep no copy.",
        },
        {
          kind: "p",
          text: "Anthropic processes the messages to generate the reply and does not use them to train models. There is a limit of 40 messages per 24 hours per person, which exists to protect a shared balance and not to police you.",
        },
        {
          kind: "p",
          text: "Your organisation does not see these conversations. There is no path in the product between what you write to MIA and anything a company can consult. See the section on organisations.",
        },
      ],
    },

    {
      id: "anexos",
      title: "Files you attach, and the people in them",
      blocks: [
        {
          kind: "p",
          text: "You can attach images, PDFs, Word and Excel files to a message for MIA. These are often 360-degree feedback reports, messages from colleagues or internal documents, which is to say data about other people who are not here and who agreed to nothing.",
        },
        {
          kind: "p",
          text: "So this part has rules of its own:",
        },
        {
          kind: "ul",
          items: [
            "files are held in a private store in the European Union (Frankfurt region) and are not reachable by URL: every read is checked against the owner;",
            "they are deleted automatically 30 days after upload, by a daily process, whether the conversation continues or not;",
            "images and PDFs are sent to the model to answer the message you attached them to, and are not re-sent with later messages;",
            "Word and Excel files are never sent to the model. We extract the text on our own server and it is that text that travels, stored inside the message;",
            "reopening an older conversation shows an expired-file marker where the image was. That is correct behaviour, not a fault.",
          ],
        },
        {
          kind: "p",
          text: "Please do not attach anything you would not show the person concerned, and remove names where the question does not need them. In attaching a document about third parties, you are the one deciding to share it with us, and that responsibility is yours. What we limit is what we do with it, and for how long.",
        },
      ],
    },

    {
      id: "organizacao",
      title: "If your employer enrolled you",
      blocks: [
        {
          kind: "p",
          text: "When an organisation enrols a group of leaders, it buys a programme and receives a collective reading. What it can see is strictly this:",
        },
        {
          kind: "ul",
          items: [
            "how many people are enrolled and how many have taken the Snapshot;",
            "the distribution of States and the group's averages per dimension and per competency;",
            "which themes were most sought in the Toolkit, counted in distinct leaders.",
          ],
        },
        { kind: "h3", text: "What the organisation never sees" },
        {
          kind: "ul",
          items: [
            "any individual's result, State or scores;",
            "which Missions you were given, or anything you wrote in them;",
            "your conversations with MIA, what you asked, or which Action Plans you opened;",
            "a list of participants with results beside their names.",
          ],
        },
        {
          kind: "p",
          text: "This is not filtering at the edge: the aggregate is computed without ever assembling a row per person. On top of that, statistics appear only from 5 assessed participants upwards. Below that, the organisation is told the group is too small and sees no figures, because in a group of three any average identifies the people in it.",
        },
        {
          kind: "p",
          text: "Toolkit theme counts are computed over an irreversible code derived from your identifier with a secret key. It supports saying that ten distinct leaders sought the same theme; it does not support saying who, not even for someone holding the database without that key.",
        },
      ],
    },

    {
      id: "emails",
      title: "Emails we send you",
      blocks: [
        {
          kind: "p",
          text: "Where we have your address, we send you the checkpoints of your cycle: the milestones at 30 and 90 days, the reassessment notice at 180, a reminder when a Mission has been idle for three weeks, and a nudge after two weeks of inactivity. They are part of the programme, not marketing, and IRT® sends you no promotions and no newsletters.",
        },
        {
          kind: "p",
          text: "Delivery is through Resend, our transactional email provider.",
        },
        {
          kind: "p",
          text: "The address is deleted from our database 90 days after your last sign-in, if no cycle is active at that point. We keep a copy of your email only while it is good for something. The rest of the record, which is anonymous, remains.",
        },
      ],
    },

    {
      id: "cookies",
      title: "Cookies",
      blocks: [
        {
          kind: "p",
          text: "IRT® uses no analytics cookies, no advertising cookies and no third-party cookies. There is no Google Analytics, no social pixel and nothing that follows you between sites. We use two cookies, both strictly necessary, which is why we do not ask you to consent to them:",
        },
        {
          kind: "table",
          head: ["Cookie", "Where", "Purpose", "Lifetime"],
          rows: [
            [
              "irt_session",
              "Application",
              "Keep you signed in. Not readable by JavaScript, and holds nothing about you beyond the identifier",
              "11 hours",
            ],
            [
              "NEXT_LOCALE",
              "Public site",
              "Remember the language you picked, so it does not revert on each visit",
              "1 year",
            ],
          ],
        },
        {
          kind: "p",
          text: `The ${PLATFORM.name} community, being a different service, has its own cookies and its own preferences control, described in its policy.`,
        },
      ],
    },

    {
      id: "subcontratantes",
      title: "Who we share with",
      blocks: [
        {
          kind: "p",
          text: "We do not sell personal data, we do not pass it to advertising intermediaries, and we do not share it with anyone outside this list. The providers below process data on our behalf under processing agreements:",
        },
        {
          kind: "table",
          head: ["Provider", "Purpose", "Where"],
          rows: [
            [
              "Vercel",
              "Hosting the applications and the private attachment store",
              "European Union (Frankfurt) for attachments; United States for platform operations",
            ],
            [
              "PostgreSQL database provider",
              "Storing everything in the table above",
              "European Union",
            ],
            ["Anthropic", "Generating MIA's replies", "United States"],
            ["Resend", "Sending the cycle emails", "United States"],
            [
              `${PLATFORM.name}`,
              "Identity and community membership, as an independent controller and not as our processor",
              "European Union",
            ],
          ],
        },
        {
          kind: "p",
          text: "We may also disclose data where the law requires it, on a reasoned request from a competent authority.",
        },
        { kind: "h3", text: "Transfers outside the European Union" },
        {
          kind: "p",
          text: "Anthropic, Resend and part of Vercel's operations are in the United States. Those transfers rely on the Standard Contractual Clauses approved by the European Commission, together with the technical measures those providers document. Attachments, the most sensitive category, were deliberately placed in a European region.",
        },
      ],
    },

    {
      id: "conservacao",
      title: "How long we keep things",
      blocks: [
        {
          kind: "p",
          text: "The periods are in the data table above. In summary, soonest to expire first:",
        },
        {
          kind: "table",
          head: ["What", "Period", "How"],
          rows: [
            ["Signed-in session", "11 hours", "The cookie expires"],
            ["Files attached to MIA", "30 days", "Deleted by an automatic daily process"],
            [
              "The copy of your email",
              "90 days without signing in, no active cycle",
              "Deleted by the daily sweep",
            ],
            ["Conversations with MIA", "Until you delete them", "Your call. There is no deadline"],
            [
              "Results, cycles, Missions and your reflections",
              "For as long as you have access to IRT®",
              "Deleted on request, or when you lose access and ask",
            ],
          ],
        },
        {
          kind: "p",
          text: "Leaving the community does not by itself delete your IRT® history, because someone who comes back expects to find their journey where they left it. If you want it deleted, just ask, and we do not have to ask why.",
        },
      ],
    },

    {
      id: "direitos",
      title: "Your rights",
      blocks: [
        {
          kind: "p",
          text: "Under the General Data Protection Regulation you have the right to:",
        },
        {
          kind: "ul",
          items: [
            "know what data we hold about you and obtain a copy;",
            "have inaccurate data corrected;",
            "ask for erasure;",
            "receive your data in a machine-readable format, or have us send it to another organisation;",
            "restrict processing while a challenge of yours is being considered;",
            "object to processing based on our legitimate interest, which in this policy is only the theme counts and the server logs.",
          ],
        },
        {
          kind: "p",
          text: `Write to ${ENTITY.email}. We answer within 30 days and charge nothing, except for manifestly repetitive requests. We may ask you to confirm your identity before handing data over, which is there to protect you rather than to delay you.`,
        },
        {
          kind: "p",
          text: "Some things need no request: deleting a conversation with MIA is done in the application itself, and takes effect immediately.",
        },
        {
          kind: "p",
          text: `If you believe we have not handled a matter properly, you may complain to the ${AUTHORITY.name}, Portugal's supervisory authority, at ${AUTHORITY.url}. If you live in another European Union country you may go to your own country's authority.`,
        },
        {
          kind: "p",
          text: `Your account, password and membership data belong to ${PLATFORM.name}, and rights over those are exercised with them, at ${PLATFORM.privacy}.`,
        },
      ],
    },

    {
      id: "seguranca",
      title: "Security",
      blocks: [
        { kind: "p", text: "The measures that matter, concretely:" },
        {
          kind: "ul",
          items: [
            "all traffic is encrypted in transit, and the database and file store are encrypted at rest by the providers;",
            "the session cookie is not readable by JavaScript, so an injected script cannot take it;",
            "your standing in the community is checked on every request rather than cached in the session, so a removal takes effect on the next page load and not hours later;",
            "attachments live in a private store and every read verifies ownership, rather than relying on an address being hard to guess;",
            "the platform API key exists in a single service, and the applications you use do not hold it.",
          ],
        },
        {
          kind: "p",
          text: "No system is impregnable. If a data breach occurs that is likely to result in a high risk to you, we will tell you and the authority within the statutory deadlines.",
        },
      ],
    },

    {
      id: "menores",
      title: "Minors",
      blocks: [
        {
          kind: "p",
          text: "IRT® is intended for professionals in leadership roles and is not directed at anyone under 18. We do not knowingly collect data from minors. If we learn that we have, we delete it.",
        },
      ],
    },

    {
      id: "alteracoes",
      title: "Changes to this policy",
      blocks: [
        {
          kind: "p",
          text: "When this policy changes, the date at the top changes with it. Where a change is substantial, a new processor or a new purpose for instance, we will say so in the application or by email before it takes effect.",
        },
        {
          kind: "p",
          text: "The Portuguese version is the authoritative one. This English version is provided for convenience and, where the two diverge, the Portuguese prevails.",
        },
      ],
    },
  ],
};
