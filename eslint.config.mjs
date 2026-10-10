import { defineConfig, globalIgnores } from 'eslint/config'
import { fixupPluginRules } from '@eslint/compat'
import nextConfig from 'eslint-config-next'
import nextPlugin from '@next/eslint-plugin-next'

export default defineConfig([
  ...nextConfig.map((config) => config.plugins?.['@next/next'] ? {
    ...config,
    plugins: {
      ...config.plugins,
      '@next/next': fixupPluginRules(nextPlugin),
    },
  } : config),
  // The temporary Next 14 plugin exposes its vitals preset in legacy format.
  // Keep its rules while the Next 16 plugin depends on unpatched braces.
  { rules: nextPlugin.configs['core-web-vitals'].rules },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
