<script lang="ts" setup>
const props = withDefaults(defineProps<{
  links: {
    label: string
    icon?: string
    to?: string
    target?: string | '_blank' | '_self' | '_parent' | '_top'
  }[]
  divider?: string
}>(), {
  divider: 'i-mingcute-right-line',
})
const { links, divider } = toRefs(props)
</script>

<template>
  <nav class="relative min-w-0" aria-label="Breadcrumb">
    <ol class="flex items-center gap-x-1.5">
      <li v-for="(link, i) in links" :key="link.label" class="min-w-0 flex items-center gap-x-1.5 text-sm text-zinc-400 leading-6">
        <BegoButton
          v-if="link.to"
          :to="link.to"
          variant="link"
          :icon="link.icon"
          class="group min-w-0 flex items-center gap-x-1.5 font-semibold"
          :class="{
            'text-bego-400': i === links.length - 1,
            'hover:text-zinc-200 text-zinc-400': i !== links.length - 1,
          }"
          :aria-current="i === links.length - 1 ? 'page' : undefined"
        >
          <span class="block truncate">{{ link.label }}</span>
        </BegoButton>
        <span
          v-else
          class="group min-w-0 flex items-center gap-x-1.5 font-semibold"
          :class="{ 'text-bego-400': i === links.length - 1 }"
          type="button"
          :aria-current="i === links.length - 1 ? 'page' : undefined"
        >
          <span v-if="link.icon" class="h-5 w-5 flex-shrink-0" :class="link.icon" />
          <span class="block truncate">{{ link.label }}</span>
        </span>
        <span v-if="i !== links.length - 1" class="h-5 w-5 flex-shrink-0 rtl:rotate-180" :class="divider" />
      </li>
    </ol>
  </nav>
</template>
