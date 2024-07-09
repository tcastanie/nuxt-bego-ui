<script lang="ts" setup>
const { bego } = useAppConfig()
const headerHeight = ref(bego.headerHeight)
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <main class="main-min-height">
      <div v-auto-animate class="mt-8 pb-24">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-min-height {
  min-height: calc(100vh - v-bind(headerHeight));
}
</style>
