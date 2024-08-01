<script lang="ts" setup>
import { useToggle, onClickOutside } from '@vueuse/core'
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  title?: string
  to?: `/${string}` | ''
  links?: { label: string, to: string, icon?: string, target?: string }[]
  container?: boolean
}>(), {
  to: '/',
  container: true,
})
const { title, to, links, container } = toRefs(props)

const { bego } = useAppConfig()
const headerHeight = ref(bego.headerHeight)

const [panel, togglePanel] = useToggle()

const theHeader = ref(null)
onClickOutside(theHeader, () => {
  if (panel.value) {
    togglePanel(false)
  }
})
</script>

<template>
  <header ref="theHeader" class="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/75 backdrop-blur -mb-px">
    <div :class="[{ 'max-w-7xl': container }, 'header-height flex items-center justify-between gap-3 mx-auto px-4 sm:px-6 lg:px-8']">
      <div class="flex items-center gap-1.5 lg:flex-1">
        <template v-if="$slots.left">
          <slot name="left" />
        </template>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="$slots.logo"
          :to="to"
          class="flex flex-shrink-0 items-end gap-1.5 text-xl text-white font-bold"
          @click="to ? togglePanel(false) : null"
        >
          <slot name="logo" />
        </component>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="title"
          :to="to"
          class="flex items-end text-xl text-white font-bold"
          @click="to ? togglePanel(false) : null"
        >
          {{ title }}
        </component>
      </div>
      <ul v-if="links" class="hidden items-center gap-x-8 lg:flex">
        <li v-for="{ label, to: linkTo, icon, target } of links" :key="label" class="relative">
          <NuxtLink
            :to="linkTo"
            :target="target"
            :class="[{
              'text-bego-400': $route.path === linkTo,
              'hover:text-bego-400': $route.path !== linkTo,
            }, 'text-sm/6 font-semibold flex items-center gap-1']"
            @click="togglePanel(false)"
          >
            <span v-if="icon" :class="[icon, 'shrink-0 w-5 h-5']" />
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
      <div v-else-if="$slots.center" class="hidden items-center gap-x-8 lg:flex">
        <slot name="center" />
      </div>
      <div class="flex items-center justify-end gap-1.5 lg:flex-1">
        <slot name="right" />
        <BegoButton
          v-if="links || $slots.panel"
          white
          variant="link"
          :icon="panel ? 'i-mingcute-close-line' : 'i-mingcute-menu-line'"
          class="lg:hidden"
          @click="togglePanel()"
        />
      </div>
    </div>
    <div
      v-if="panel"
      class="panel-top fixed z-50 w-full border-b border-zinc-800 bg-zinc-900 px-4 py-3 lg:hidden sm:px-6"
    >
      <div v-if="links" class="mb-3 -mx-1 lg:mx-0 lg:mb-6 space-y-3">
        <NuxtLink
          v-for="{ label, to: linkTo, icon, target } of links"
          :key="label"
          :to="linkTo"
          :target="target"
          :class="[{
            'text-bego-400': $route.path === linkTo,
            'text-zinc-400 hover:text-zinc-200 font-medium': $route.path !== linkTo,
          }, 'flex items-center gap-1.5 lg:gap-2 group']"
          @click="togglePanel(false)"
        >
          <div
            v-if="icon"
            :class="[{
              'bg-bego-400 ring-bego-400 text-zinc-900': $route.path === linkTo,
              'bg-zinc-800/50 ring-zinc-700 group-hover:bg-bego-400 group-hover:ring-bego-400 group-hover:text-zinc-900': $route.path !== linkTo,
            }, 'rounded-md p-1 inline-flex ring-inset ring-1']"
          >
            <span
              :class="[icon, 'w-4 h-4 shrink-0']"
              aria-hidden="true"
            />
          </div>
          <span class="relative text-sm/6">
            {{ label }}
            <span v-if="target==='_blank'" class="i-mingcute-external-link-line absolute top-0.5 h-3 w-3 text-zinc-500 -right-3.5" />
          </span>
        </NuxtLink>
      </div>
      <div v-else-if="$slots.panel">
        <slot name="panel" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-height {
  height: v-bind(headerHeight);
}
.panel-top {
  top: calc(v-bind(headerHeight) + 1px);
}
</style>
