<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'vi'
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
