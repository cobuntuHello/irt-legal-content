# @irt/legal-content

The IRT® Leadership Platform's **Privacy Policy** and **Terms of Use**, in
Portuguese and English, shared by `irt-landing` and `irt-app`.

The repository is **public** because Vercel installs git dependencies during a
build with no credentials of its own, and a private one fails the build. That
is fine here: these documents are meant to be read by anyone.

## Why this ships data, not components

`@cobuntu/legal-content` ships JSX, and that works because both of its
consumers are Tailwind apps on one design system. IRT's two consumers are not:
`irt-landing` is hand-written CSS with its own editorial type scale and has no
Tailwind at all, while `irt-app` is Tailwind v4 on the warm ground. A shared
component would have to pick one and render unstyled in the other.

So this package owns the **words**, which must never diverge, and each app owns
the **markup**, which should. A renderer is about forty lines on either side.

The upshot: no React dependency, no JSX, no build step, and nothing for
Tailwind to scan (so no `@source` line to forget).

## Using it

```ts
import { privacyDoc, termsDoc, legalLocaleFor, ENTITY } from "@irt/legal-content";

const doc = privacyDoc("pt-BR"); // -> the pt-PT document; see legalLocaleFor
```

`LegalDoc` is `{ title, summary, updated, sections[] }`; a section is
`{ id, title, blocks[] }`; a block is a paragraph, an `h3`, a `ul` or a
`table`. That is the whole vocabulary.

Both consumers must add the package to `transpilePackages` in
`next.config.ts`, because it ships TypeScript source rather than built output.

### Locales

The documents exist in **pt-PT** (authoritative) and **en**. Both apps speak
more languages than that and speak different sets, so `legalLocaleFor()` owns
the fallback: anything Portuguese lands on pt-PT, including pt-BR, and
everything else on English. A Brazilian reader is better served by the
authoritative Portuguese of a document governed by Portuguese law than by an
English translation of it.

## Editing

1. Edit the document in `src/`. **Edit the Portuguese and the English in the
   same commit** and keep the section ids identical; the test suite fails if
   they drift, which is the whole point of it.
2. Bump `version` here and move `LAST_UPDATED` in `src/entity.ts` if the words
   changed. Leave the date alone if only a renderer did.
3. `npm test && npx tsc --noEmit`.
4. Commit, push, capture the **full 40-character SHA**.
5. Re-pin that SHA in both apps' `package.json`, `npm install` in each so the
   lockfile moves too, then typecheck and open a PR per app.

A `package.json`-only bump ships stale content: the lockfile is what the build
actually installs.

## The accuracy gate

Every technical claim in the Privacy Policy corresponds to code in production,
and the header of `src/privacy.pt-PT.ts` lists where each one was verified.
**Check that list before changing a retention period, a limit or a provider.**
A policy that describes behaviour the code no longer has is not merely stale,
it is false.

`__tests__/docs.test.ts` asserts that each of those numbers still appears in
both languages. It cannot reach into the other repositories to compare, so it
catches a half-finished edit rather than a genuine drift between doc and code.
That part is still human.

## Counsel

These documents were drafted against the code and are roughly 90% done, so that
a lawyer finishing them is cheap. **They have not been reviewed by counsel.**
The clauses that most need it are the limitation of liability, the jurisdiction
clause, and the undertakings imposed on organisations.
