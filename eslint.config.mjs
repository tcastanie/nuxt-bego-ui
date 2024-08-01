import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt(
  unocss,
  {
    rules: {
      'no-console': ['warn'],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 3 },
      }],
      'vue/block-order': ['warn', {
        order: ['script', 'template', 'style'],
      }],
      '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: true,
      }],
    },
  },
)
