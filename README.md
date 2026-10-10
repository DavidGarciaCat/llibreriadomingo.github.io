This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use Node.js 20.9 or newer. Install the locked dependencies, then run the development server:

```bash
npm ci
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependency security

Run `npm audit`, `npm run lint`, `npm test`, and `npm run build` when updating dependencies.
Docker builds and development containers use `npm ci` to install the reviewed lockfile.

Next.js and its ESLint configuration use version 16.4. The Next-specific lint
plugin is temporarily pinned to 14.2.35, with `glob` overridden to its patched
10.5 release. The current Next 16 plugin pulls in `braces`, which has no patched
release for [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
The official `@eslint/compat` helper adapts that plugin to ESLint 9.
This keeps the existing Next.js/Core Web Vitals checks without that dependency;
newer Next-specific rules will be available once the plugin can be upgraded.
Remove the plugin override and compatibility helper, and restore `eslint-config-next/core-web-vitals` when a
Next lint plugin release removes or fixes the vulnerable dependency.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
