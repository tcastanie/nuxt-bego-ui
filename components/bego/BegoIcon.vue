<script lang="ts" setup>
const props = withDefaults(defineProps<{
  icon: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}>(), {
  size: 'sm',
})

const { size } = toRefs(props)

const iconSizeClasses = computed(() => {
  switch (size.value) {
    case 'sm':
      return 'w-4 h-4'
    case 'md':
      return 'w-5 h-5'
    case 'lg':
      return 'w-6 h-6'
    case 'xl':
      return 'w-8 h-8'
    case '2xl':
      return 'w-12 h-12'
    default:
      return ''
  }
})
</script>

<template>
  <span :class="[icon, iconSizeClasses, 'shrink-0']" />
</template>
