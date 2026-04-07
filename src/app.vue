<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#D4AF37" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white dark:bg-slate-900 text-slate-900 dark:text-white;
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
}

/* View Transitions - circular reveal */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-primary;
}

::-webkit-scrollbar-thumb {
  @apply bg-gold-500;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gold-400;
}
</style>
