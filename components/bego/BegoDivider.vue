<script lang="ts" setup>
const props = withDefaults(defineProps<{
  label?: string
  orientation?: 'horizontal' | 'vertical'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  type?: 'solid' | 'dotted' | 'dashed'
  icon?: `i-${string}`
}>(), {
  orientation: 'horizontal',
  size: '2xs',
  type: 'solid',
})

const { orientation, size, type } = toRefs(props)

const dividerBorderClasses = computed(() => {
  let base = 'flex border-zinc-800'
  base += orientation.value === 'horizontal' ? ' w-full' : ' h-full'
  if (size.value === '2xs') {
    base += orientation.value === 'horizontal' ? ' border-t' : ' border-s'
  } else if (size.value === 'xs') {
    base += orientation.value === 'horizontal' ? ' border-t-[2px]' : ' border-s-[2px]'
  } else if (size.value === 'sm') {
    base += orientation.value === 'horizontal' ? ' border-t-[3px]' : ' border-s-[3px]'
  } else if (size.value === 'md') {
    base += orientation.value === 'horizontal' ? ' border-t-[4px]' : ' border-s-[4px]'
  } else if (size.value === 'lg') {
    base += orientation.value === 'horizontal' ? ' border-t-[5px]' : ' border-s-[5px]'
  } else if (size.value === 'xl') {
    base += orientation.value === 'horizontal' ? ' border-t-[6px]' : ' border-s-[6px]'
  } else if (size.value === '2xl') {
    base += orientation.value === 'horizontal' ? ' border-t-[7px]' : ' border-s-[7px]'
  }
  if (type.value === 'solid') {
    base += ' border-solid'
  } else if (type.value === 'dotted') {
    base += ' border-dotted'
  } else if (type.value === 'dashed') {
    base += ' border-dashed'
  }
  return base
})
</script>

<template>
  <div
    :class="[{
      'w-full flex-row': orientation === 'horizontal',
      'flex-col': orientation === 'vertical',
    }, 'flex items-center text-center']"
  >
    <div :class="dividerBorderClasses" />
    <div
      v-if="$slots.default || label || icon"
      :class="[{
        'mx-3 whitespace-nowrap': orientation === 'horizontal',
        'my-2': orientation === 'vertical',
      }, 'font-medium text-zinc-200 flex']"
    >
      <template v-if="$slots.default">
        <slot />
      </template>
      <span v-else-if="label" class="text-sm">{{ label }}</span>
      <BegoIcon v-else-if="icon" :icon="icon" size="md" />
    </div>
    <div :class="dividerBorderClasses" />
  </div>
</template>
