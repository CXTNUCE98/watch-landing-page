<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value as any[]).map((loc) => ({
    code: loc.code,
    name: loc.name,
    path: switchLocalePath(loc.code),
  }))
})

const currentLocaleName = computed(() => {
  const current = availableLocales.value.find((loc) => loc.code === locale.value)
  return current?.name || locale.value
})
</script>

<template>
  <div class="relative group">
    <button
      class="flex items-center gap-2 text-white hover:text-gold-500 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
      aria-label="Switch language"
    >
      <i class='bx bx-globe text-xl'></i>
      <span class="text-sm font-medium hidden sm:inline">{{ currentLocaleName }}</span>
      <i class='bx bx-chevron-down text-sm transition-transform group-hover:rotate-180'></i>
    </button>

    <!-- Dropdown -->
    <div
      class="absolute right-0 top-full mt-2 w-48 bg-primary/98 backdrop-blur-xl border border-gold-500/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50"
    >
      <NuxtLink
        v-for="loc in availableLocales"
        :key="loc.code"
        :to="loc.path"
        class="flex items-center gap-3 px-4 py-3 text-white hover:bg-gold-500/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
        :class="{ 'bg-gold-500/20': loc.code === locale }"
      >
        <i class='bx bx-check text-gold-500' v-if="loc.code === locale"></i>
        <span v-else class="w-5"></span>
        <span class="font-medium">{{ loc.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
