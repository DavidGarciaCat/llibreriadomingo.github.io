import assert from 'node:assert/strict'
import test from 'node:test'
import { ESLint } from 'eslint'

// Exercise the compatibility wrapper and the overridden glob dependency.
const eslint = new ESLint({
  overrideConfig: { settings: { next: { rootDir: process.cwd() } } },
})

test('the pinned Next plugin lints valid TSX without compatibility errors', async () => {
  const [result] = await eslint.lintText(
    'export default function Page() { return <p>Llibreria Domingo</p> }',
    { filePath: 'src/app/page.tsx' },
  )
  assert.deepEqual(result.messages, [])
})

test('Next, Core Web Vitals, accessibility, and React Hooks checks remain active', async () => {
  const [result] = await eslint.lintText(
    `import { useState } from 'react'
    export default function Page({ visible }: { visible: boolean }) {
      if (visible) useState(0)
      return <><script src="/test.js"></script><img src="/test.png" /></>
    }`,
    { filePath: 'src/app/page.tsx' },
  )
  const messages = new Map(result.messages.map((message) => [message.ruleId, message]))
  for (const rule of ['@next/next/no-sync-scripts', 'react-hooks/rules-of-hooks']) {
    assert.equal(messages.get(rule)?.severity, 2, `${rule} must report an error`)
  }
  for (const rule of ['@next/next/no-img-element', 'jsx-a11y/alt-text']) {
    assert.equal(messages.get(rule)?.severity, 1, `${rule} must report a warning`)
  }
})
