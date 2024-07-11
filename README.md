# Nuxt bego UI

[Nuxt layer](https://nuxt.com/docs/getting-started/layers) with default personnal configs. Strongly inspired by [Nuxt UI](https://ui.nuxt.com/) but with [UnoCSS](https://unocss.dev/). The aim is to be able to kickstart my *very serious* projects quickly.

> [!WARNING]
> 🚧 Work in progress 👷

## Getting started

### Installation

Add the dependency to `extends` in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    ['github:tcastanie/nuxt-bego-ui', { install: true }],
  ],
})
```

> [!NOTE]
> The `install: true` option installs the npm dependencies.

```bash
pnpm i -D @iconify-json/mingcute @unocss/core eslint
```

## UnoCSS configuration

Install [MingCute](https://github.com/Richard9394/MingCute) iconify package for some default icons to work:

```bash
pnpm i -D @iconify-json/mingcute
```

And `@unocss/core` to get layer config.

```bash
pnpm i -D @unocss/core
```

To reexport the layer config:

```ts
// uno.config.ts
import config from './.nuxt/uno.config.mjs'

export default config
```

To modify/extend it:

```ts
// uno.config.ts
import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  // your overrides
}])
```

[See more in doc](https://unocss.dev/integrations/nuxt#configuration)

### Eslint

If needed, install `eslint`

```bash
pnpm i -D eslint
```

Add your rules in `eslint.config.mjs`. See more on [eslint.nuxt.com](https://eslint.nuxt.com/)

### Usage

- Example `app.vue`:

  ```html
  <template>
    <BegoHeader title="Nuxt bego UI" />
    <NuxtPage />
    <BegoFooter />
  </template>
  ```

- `pages/index.vue`:

  ```html
  <template>
    <BegoPage>
      <BegoH1>Hello there!</BegoH1>
    </BegoPage>
  </template>
  ```

## Configuration

Overridable default `app.config.ts`:

```ts
export default defineAppConfig({
  bego: {
    headerHeight: '4rem',
  },
})
```

## Development

Make sure to install the dependencies

```bash
pnpm install
```

Then start the development server of the `.playground` folder, on <http://localhost:3000>

```bash
pnpm run dev
```
