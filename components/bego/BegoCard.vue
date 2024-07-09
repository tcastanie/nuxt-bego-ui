<script setup lang="ts">
import { NuxtLink } from '#components'

defineProps<{
  to?: string
  target?: string
  primary?: boolean
}>()
</script>

<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    :target="target"
    :class="[{
      'hover:ring-2 hover:ring-bego-400 hover:bg-zinc-800/50 cursor-pointer': to,
      'ring-bego-400 divide-bego-400 bg-bego-950/10': primary,
      'ring-zinc-800 divide-zinc-800 bg-zinc-900': !primary,
    }, 'divide-y ring-1 rounded-lg shadow relative']"
  >
    <div v-if="$slots.header" class="px-4 py-5 sm:px-6">
      <slot name="header" />
    </div>
    <div class="px-4 py-5 sm:px-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-4 py-5 sm:px-6">
      <slot name="footer" />
    </div>
  </component>
</template>
