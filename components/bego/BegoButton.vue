<script lang="ts" setup>
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  to?: string
  target?: string | '_blank' | '_self' | '_parent' | '_top'
  truncate?: boolean
  block?: boolean
  square?: boolean
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
  icon?: string | `i-${string}`
  noPadding?: boolean
  loading?: boolean
  loadingIcon?: `i-${string}`
  trailing?: boolean
  white?: boolean
  disabled?: boolean
}>(), {
  truncate: false,
  block: false,
  square: false,
  size: 'sm',
  variant: 'solid',
  loading: false,
  loadingIcon: 'i-mingcute-loading-line',
  noPadding: false,
  trailing: false,
  white: false,
  disabled: false,
})
const { size, square, variant, icon, loading, loadingIcon } = toRefs(props)

const buttonSizeClasses = computed(() => {
  switch (size.value) {
    case '2xs':
      return `text-xs ${square.value ? 'p-1' : 'px-2 py-1 gap-x-1'}`
    case 'xs':
      return `text-xs ${square.value ? 'p-1.5' : 'px-2.5 py-1.5 gap-x-1.5'}`
    case 'sm':
      return `text-sm ${square.value ? 'p-1.5' : 'px-2.5 py-1.5 gap-x-1.5'}`
    case 'md':
      return `text-sm ${square.value ? 'p-2' : 'px-3 py-2 gap-x-2'}`
    case 'lg':
      return `text-sm ${square.value ? 'p-2.5' : 'px-3.5 py-2.5 gap-x-2.5'}`
    case 'xl':
      return `text-base ${square.value ? 'p-2.5' : 'px-3.5 py-2.5 gap-x-2.5'}`
    case '2xl':
      return `text-base ${square.value ? 'p-3' : 'px-4 py-3 gap-x-3'}`
    default:
      return ''
  }
})

const buttonColorClasses = computed(() => {
  switch (variant.value) {
    case 'solid':
      return `shadow-sm text-zinc-900 bg-bego-400 hover:bg-bego-500 disabled:bg-bego-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bego-400`
    case 'outline':
      return `ring-1 ring-inset ring-current text-bego-400 hover:bg-bego-950 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-bego-400`
    case 'soft':
      return `text-bego-400 bg-bego-950 hover:bg-bego-900 disabled:bg-bego-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bego-400`
    case 'ghost':
      return `text-bego-400 hover:bg-bego-950 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bego-400`
    case 'link':
      return `text-bego-400 hover:text-bego-500 disabled:text-bego-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bego-400`
    default:
      return ''
  }
})

const iconClasses = computed(() => {
  if (loading.value) {
    return `animate-spin ${loadingIcon.value}`
  }
  return icon.value
})

const iconSizeClasses = computed(() => {
  switch (size.value) {
    case '2xs':
    case 'xs':
      return 'w-4 h-4'
    case 'sm':
    case 'md':
    case 'lg':
      return 'w-5 h-5'
    case 'xl':
    case '2xl':
      return 'w-6 h-6'
    default:
      return ''
  }
})
</script>

<template>
  <component
    :is="(to && !disabled) ? NuxtLink : 'button'"
    :to="(to && !disabled) ? to : null"
    :target="target"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 shrink-0 font-medium rounded-md items-center justify-center"
    :class="[{
      'inline-flex': !block,
      'w-full flex': block,
      'w-20': truncate,
      '!p-0': noPadding,
      '!text-white': white,
    }, buttonSizeClasses, buttonColorClasses]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <span
      v-if="icon || loading"
      :class="[{
        'order-last': trailing,
      }, iconClasses, iconSizeClasses, 'shrink-0']"
    />
    <slot
      v-if="$slots.default"
      :as="to || icon ? 'span' : 'p'"
      :class="{ 'text-left break-all line-clamp-1': truncate }"
    />
  </component>
</template>
