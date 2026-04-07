<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="flex items-center gap-2 text-white hover:text-gold-500 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
    aria-label="Toggle theme"
  >
    <Transition name="theme-icon" mode="out-in">
      <i v-if="theme === 'dark'" class='bx bx-sun text-xl' key="sun"></i>
      <i v-else class='bx bx-moon text-xl' key="moon"></i>
    </Transition>
  </button>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.3s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
