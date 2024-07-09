<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md'
}>(), {
  size: 'sm',
})
const { size } = toRefs(props)

const kbdSizeClasses = computed(() => {
  switch (size.value) {
    case 'xs':
      return `h-4 min-w-[16px] text-[10px]`
    case 'sm':
      return `h-5 min-w-[20px] text-[11px]`
    case 'md':
      return `h-6 min-w-[24px] text-[12px]`
    default:
      return ''
  }
})
</script>

<template>
  <kbd :class="[kbdSizeClasses, 'inline-flex items-center justify-center text-white px-1 rounded font-medium font-sans bg-zinc-800 ring-1 ring-zinc-700 ring-inset']">
    <p>
      <slot />
    </p>
  </kbd>
</template>
