<script lang="ts" setup>
const props = withDefaults(defineProps<{
  items: {
    label: string
    icon?: string
    content?: string
    slot?: string
    defaultOpen?: boolean
    disabled?: boolean
  }[]
  openIcon?: string | null
  closeIcon?: string | null
  defaultOpen?: boolean
  multiple?: boolean
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}>(), {
  openIcon: 'i-mingcute-down-line',
  closeIcon: null,
  defaultOpen: false,
  multiple: false,
  variant: 'soft',
  size: 'sm',
})
const { items, openIcon, closeIcon, defaultOpen, multiple, variant, size } = toRefs(props)

const itemsPlus = computed(() => items.value.map((item) => {
  const isOpen = ref(defaultOpen.value || item.defaultOpen || false)
  const toggle = useToggle(isOpen)
  return { ...item, isOpen, toggle }
}))

const itemsPlusPlus = ref(itemsPlus.value.map((item) => {
  const togglePlus = () => {
    if (item.disabled) return
    if (!multiple.value) {
      itemsPlus.value.forEach((other) => {
        if (other !== item && !other.disabled && other.isOpen) {
          other.toggle(false)
        }
      })
    }
    item.toggle()
  }
  return { ...item, togglePlus }
}))

function onEnter(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = '0'
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
  el.style.height = `${el.scrollHeight}px`
}
function onBeforeLeave(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = `${el.scrollHeight}px`
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
}
function onAfterEnter(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = 'auto'
}
function onLeave(_el: Element) {
  const el = _el as HTMLElement
  el.style.height = '0'
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      v-for="{ label, icon, content, slot, disabled, isOpen, togglePlus } of itemsPlusPlus"
      :key="label"
      class="w-full flex flex-col"
    >
      <BegoButton
        class="mb-1.5"
        :variant
        :size
        :disabled
        @click="togglePlus()"
      >
        <div class="inline-flex items-center gap-x-1.5 w-full">
          <BegoIcon
            v-if="icon"
            :icon
            size="md"
            aria-hidden="true"
          />
          <span class="text-left break-all line-clamp-1">{{ label }}</span>
          <BegoIcon
            v-if="openIcon || closeIcon"
            :icon="!isOpen ? openIcon ? openIcon : '' : closeIcon ? closeIcon : openIcon ? openIcon : ''"
            size="md"
            aria-hidden="true"
            class="ms-auto transform transition-transform duration-200"
            :class="{ '-rotate-180': isOpen }"
          />
        </div>
      </BegoButton>
      <Transition
        enter-active-class="overflow-hidden transition-[height] duration-200 ease-out"
        leave-active-class="overflow-hidden transition-[height] duration-200 ease-out"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="isOpen">
          <div v-if="content" class="text-sm text-zinc-400 pt-1.5 pb-3">
            {{ content }}
          </div>
          <div v-else-if="slot && $slots[slot]" class="pt-1.5 pb-3">
            <slot :name="slot" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
