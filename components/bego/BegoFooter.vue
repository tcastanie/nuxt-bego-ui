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
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
        <slot name="right" />
      </div>
      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center">
        <ul v-if="links" class="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
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
              <span v-if="target === '_blank'" class="i-mingcute-arrow-right-up-line w-3 h-3 absolute top-0.5 -right-3.5 text-zinc-500" />
            </NuxtLink>
          </li>
        </ul>
        <template v-else-if="$slots.center">
          <slot name="center" />
        </template>
      </div>
      <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <slot name="left" />
      </div>
    </div>
  </footer>
</template>
