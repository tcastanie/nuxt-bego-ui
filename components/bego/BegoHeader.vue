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
  <header ref="theHeader" class="bg-zinc-900/75 backdrop-blur border-b border-zinc-800 -mb-px sticky top-0 z-50">
    <div :class="[{ 'max-w-7xl': container }, 'header-height flex items-center justify-between gap-3 mx-auto px-4 sm:px-6 lg:px-8']">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <template v-if="$slots.left">
          <slot name="left" />
        </template>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="$slots.logo"
          :to="to"
          class="flex-shrink-0 font-bold text-xl text-white flex items-end gap-1.5"
          @click="to ? togglePanel(false) : null"
        >
          <slot name="logo" />
        </component>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="title"
          :to="to"
          class="font-bold text-xl text-white flex items-end"
          @click="to ? togglePanel(false) : null"
        >
          {{ title }}
        </component>
      </div>
      <ul v-if="links" class="hidden lg:flex gap-x-8 items-center">
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
      <div v-else-if="$slots.center" class="hidden lg:flex items-center gap-x-8">
        <slot name="center" />
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
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
      class="panel-top fixed w-full z-50 lg:hidden px-4 sm:px-6 py-3 bg-zinc-900 border-b border-zinc-800"
    >
      <div v-if="links" class="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
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
          <span class="text-sm/6 relative">
            {{ label }}
            <span v-if="target==='_blank'" class="i-mingcute-external-link-line w-3 h-3 absolute top-0.5 -right-3.5 text-zinc-500" />
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
