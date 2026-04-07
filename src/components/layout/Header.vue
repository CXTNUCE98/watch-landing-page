<script setup lang="ts">
const isScrolled = ref(false)
const showMobileMenu = ref(false)
const { t } = useI18n()
const localePath = useLocalePath()

const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'py-2 bg-primary/95 backdrop-blur-xl shadow-2xl' : 'py-6 bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink 
          :to="localePath('/')" 
          class="flex items-center gap-3 group"
        >
          <div class="relative">
            <div class="w-12 h-12 border-2 border-gold-500 flex items-center justify-center transition-transform group-hover:rotate-12">
              <span class="text-gold-500 font-heading font-bold text-xl">L</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-heading font-bold text-white tracking-wider">LUXE</span>
            <span class="text-[10px] text-gold-500 tracking-[0.3em] uppercase">{{ t('nav.tagline') }}</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <NuxtLink
            :to="localePath('/#collections')"
            class="text-white hover:text-gold-500 tracking-wider uppercase text-sm font-medium transition-colors relative group"
          >
            {{ t('nav.collections') }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/#featured')"
            class="text-white hover:text-gold-500 tracking-wider uppercase text-sm font-medium transition-colors relative group"
          >
            {{ t('nav.featured') }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/#about')"
            class="text-white hover:text-gold-500 tracking-wider uppercase text-sm font-medium transition-colors relative group"
          >
            {{ t('nav.about') }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/#contact')"
            class="text-white hover:text-gold-500 tracking-wider uppercase text-sm font-medium transition-colors relative group"
          >
            {{ t('nav.contact') }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Cart Icon -->
          <button class="relative text-white hover:text-gold-500 transition-colors">
            <i class='bx bx-shopping-bag text-2xl'></i>
            <span class="absolute -top-2 -right-2 w-5 h-5 bg-gold-500 text-primary text-xs font-bold rounded-full flex-center">0</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="showMobileMenu = !showMobileMenu"
            class="lg:hidden text-white hover:text-gold-500 transition-colors"
          >
            <i v-if="!showMobileMenu" class='bx bx-menu text-3xl'></i>
            <i v-else class='bx bx-x text-3xl'></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div v-if="showMobileMenu" class="lg:hidden mt-4 bg-primary/98 backdrop-blur-xl border-t border-gold-500/20">
        <nav class="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <NuxtLink
            v-for="item in [
              { label: t('nav.collections'), href: '/#collections' },
              { label: t('nav.featured'), href: '/#featured' },
              { label: t('nav.about'), href: '/#about' },
              { label: t('nav.contact'), href: '/#contact' }
            ]"
            :key="item.href"
            :to="localePath(item.href)"
            @click="showMobileMenu = false"
            class="block text-white hover:text-gold-500 tracking-wider uppercase text-lg font-medium transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
