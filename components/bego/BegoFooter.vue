<script lang="ts" setup>
const props = withDefaults(defineProps<{
  links?: { label: string, to: string, target?: string }[]
  container?: boolean
}>(), {
  container: true,
})

const { links, container } = toRefs(props)
</script>

<template>
  <footer v-auto-animate class="relative">
    <div v-if="$slots.top" class="py-8 lg:py-12">
      <slot name="top" />
    </div>
    <div
      v-if="$slots.left || links || $slots.center || $slots.right"
      :class="[{
        'max-w-7xl': container,
      }, 'mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3']"
    >
      <div class="flex items-center justify-center gap-x-1.5 lg:order-3 lg:flex-1 lg:justify-end">
        <slot name="right" />
      </div>
      <div class="mt-3 flex items-center justify-center lg:order-2 lg:mt-0">
        <ul v-if="links" class="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6">
          <li v-for="{ label, to, target } of links" :key="label" class="relative">
            <NuxtLink
              :to="to"
              :class="[{
                'text-white font-medium': $route.path === to,
                'text-zinc-400 hover:text-zinc-300': $route.path !== to,
              }, 'text-sm']"
              :target="target"
            >
              {{ label }}
              <span v-if="target === '_blank'" class="i-mingcute-arrow-right-up-line absolute top-0.5 h-3 w-3 text-zinc-500 -right-3.5" />
            </NuxtLink>
          </li>
        </ul>
        <template v-else-if="$slots.center">
          <slot name="center" />
        </template>
      </div>
      <div class="mt-3 flex items-center justify-center gap-x-1.5 lg:order-1 lg:mt-0 lg:flex-1 lg:justify-start">
        <slot name="left" />
      </div>
    </div>
  </footer>
</template>
