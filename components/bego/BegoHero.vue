<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  headline?: string
  icon?: string
}>()
</script>

<template>
  <div class="py-8 sm:py-16">
    <div v-if="headline" class="mb-3 text-sm/6 font-semibold text-bego-400 flex items-center gap-1.5">
      {{ headline }}
    </div>
    <div :class="[{ 'gap-6': icon }, 'flex flex-col lg:flex-row lg:items-center lg:justify-between']">
      <div v-if="icon" class="flex">
        <span :class="[icon, 'w-10 h-10 shrink-0 text-bego-400']" aria-hidden="true" />
      </div>
      <div class="flex-1">
        <BegoH1 v-if="$slots.title">
          <slot name="title" />
        </BegoH1>
        <BegoH1 v-else-if="title">
          {{ title }}
        </BegoH1>
        <div v-if="description" class="mt-4 text-lg text-zinc-400">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
