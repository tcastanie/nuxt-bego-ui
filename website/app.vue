<script setup lang="ts">
const links = [
  { label: 'Home', to: '/', icon: 'i-mingcute-layout-top-line' },
  { label: 'About', to: '/about', icon: 'i-mingcute-information-line' },
  {
    label: 'GitHub',
    to: 'https://github.com/tcastanie/nuxt-bego-ui',
    target: '_blank',
    icon: 'i-mingcute-github-line',
  },
]
</script>

<template>
  <BegoHeader title="Nuxt bego UI showcase" :links="links">
    <template #right>
      <BegoButton
        to="https://github.com/tcastanie/nuxt-bego-ui/blob/main/website/pages/index.vue"
        target="_blank"
        variant="ghost"
        white
        icon="i-mingcute-code-line"
      >
        Page source
      </BegoButton>
    </template>
  </BegoHeader>
  <NuxtPage />
  <BegoFooter :links="links" />
</template>
