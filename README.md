# Nuxt bego UI

[Nuxt layer](https://nuxt.com/docs/getting-started/layers) with default personnal configs. Strongly inspired by [Nuxt UI](https://ui.nuxt.com/) but with [UnoCSS](https://unocss.dev/). The aim is to be able to kickstart my *very serious* projects quickly.

> [!WARNING]
> 🚧 Work in progress 👷

## Getting started

### Installation

Add the dependency to `extends` in `nuxt.config.ts`:

```ts
// nuxt.config.ts
defineNuxtConfig({
  extends: [
    ['github:tcastanie/nuxt-bego-ui', { install: true }],
  ],
})
```

> [!NOTE]
> The `install: true` option installs the npm dependencies.

Then install [MingCute](https://github.com/Richard9394/MingCute) iconify package for some default icons to work:

```bash
pnpm i -D @iconify-json/mingcute
```

UnoCSS config (from [UnoCSS doc](https://unocss.dev/integrations/nuxt#configuration)):

```ts
// uno.config.ts
import config from './.nuxt/uno.config.mjs'

export default config
```

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
