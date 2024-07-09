<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
  rounded?: boolean
}>(), {
  size: 'sm',
  variant: 'solid',
  rounded: false,
})
const { size, variant, rounded } = toRefs(props)

const badgeSizeClasses = computed(() => {
  switch (size.value) {
    case 'xs':
      return `text-xs px-1.5 py-0.5`
    case 'sm':
      return `text-xs px-2 py-1`
    case 'md':
      return `text-sm px-2 py-1`
    case 'lg':
      return `text-sm px-2.5 py-1.5`
    default:
      return ''
  }
})

const badgeVariantClasses = computed(() => {
  switch (variant.value) {
    case 'solid':
      return 'bg-bego-400 text-zinc-900'
    case 'outline':
      return 'text-bego-400 ring-1 ring-inset ring-bego-400'
    case 'soft':
      return 'bg-bego-400 bg-opacity-10 text-bego-400'
    case 'subtle':
      return 'bg-bego-400 bg-opacity-10 text-bego-400 ring-1 ring-inset ring-bego-400 ring-opacity-25'
    default:
      return ''
  }
})
</script>

<template>
  <div
    :class="[{
      'rounded-full': rounded,
      'rounded-md': !rounded,
    }, badgeSizeClasses, badgeVariantClasses, 'inline-flex items-center font-medium']"
  >
    <p>
      <slot />
    </p>
  </div>
</template>
