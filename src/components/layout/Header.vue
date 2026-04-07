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

// Smooth scroll to section
const scrollToSection = (sectionId: string) => {
  showMobileMenu.value = false
  
  if (process.client) {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

const navItems = [
  { label: 'nav.collections', section: 'collections' },
  { label: 'nav.featured', section: 'featured' },
  { label: 'nav.about', section: 'about' },
  { label: 'nav.contact', section: 'contact' }
]

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
          <button
            v-for="item in navItems"
            :key="item.section"
            @click="scrollToSection(item.section)"
            class="text-white hover:text-gold-500 tracking-wider uppercase text-sm font-medium transition-colors relative group cursor-pointer bg-transparent border-none"
          >
            {{ t(item.label) }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
          </button>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <!-- Theme Toggle -->
          <BaseThemeToggle />

          <!-- Language Switcher -->
          <BaseLanguageSwitcher />

          <!-- Mobile Menu Toggle -->
          <button
            @click="showMobileMenu = !showMobileMenu"
            class="lg:hidden text-white hover:text-gold-500 transition-colors p-2"
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
        <nav class="max-w-7xl mx-auto px-4 py-8">
          <!-- Navigation Links -->
          <div class="space-y-6 mb-8">
            <button
              v-for="item in navItems"
              :key="item.section"
              @click="scrollToSection(item.section)"
              class="block w-full text-left text-white hover:text-gold-500 tracking-wider uppercase text-lg font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              {{ t(item.label) }}
            </button>
          </div>

          <!-- Divider -->
          <div class="border-t border-gold-500/20 pt-8">
            <p class="text-slate-400 text-sm mb-4 uppercase tracking-wider">{{ t('mobileMenu.quickActions') }}</p>
            
            <!-- Theme Toggle -->
            <div class="flex items-center justify-between py-3 border-b border-slate-800">
              <div class="flex items-center gap-3 text-white">
                <i v-if="useColorMode().value === 'dark'" class='bx bx-sun text-xl text-gold-500'></i>
                <i v-else class='bx bx-moon text-xl text-gold-500'></i>
                <span class="text-sm">{{ t('mobileMenu.theme') }}</span>
              </div>
              <BaseThemeToggle />
            </div>

            <!-- Language Switcher -->
            <div class="flex items-center justify-between py-3 border-b border-slate-800">
              <div class="flex items-center gap-3 text-white">
                <i class='bx bx-globe text-xl text-gold-500'></i>
                <span class="text-sm">{{ t('mobileMenu.language') }}</span>
              </div>
              <BaseLanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
