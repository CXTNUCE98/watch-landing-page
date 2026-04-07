<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-1/4 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>

    <!-- Animated Circle -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/10 rounded-full animate-rotate-360"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-500/20 rounded-full animate-rotate-360" style="animation-direction: reverse;"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <div class="animate-fade-in-down">
            <p class="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              {{ t('hero.badge') }}
            </p>
          </div>

          <h1 class="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {{ t('hero.title.part1') }}
            <br>
            <span class="text-gradient-gold">{{ t('hero.title.part2') }}</span>
          </h1>

          <p class="text-xl text-slate-300 mb-8 max-w-xl animate-fade-in-up delay-200">
            {{ t('hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
            <NuxtLink :to="localePath('/#collections')" class="btn-primary">
              {{ t('hero.cta.primary') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/#about')" class="btn-secondary">
              {{ t('hero.cta.secondary') }}
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-800 animate-fade-in-up delay-400">
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-2">50+</div>
              <div class="text-slate-400 text-sm">{{ t('hero.stats.brands') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-2">10K+</div>
              <div class="text-slate-400 text-sm">{{ t('hero.stats.watches') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-2">100%</div>
              <div class="text-slate-400 text-sm">{{ t('hero.stats.authentic') }}</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Watch Display -->
        <div class="relative hidden lg:flex items-center justify-center animate-scale-in delay-300">
          <!-- Decorative rings -->
          <div class="absolute w-[450px] h-[450px] border border-gold-500/20 rounded-full"></div>
          <div class="absolute w-[400px] h-[400px] border border-gold-500/30 rounded-full"></div>
          
          <!-- Watch placeholder -->
          <div class="relative w-80 h-80 animate-float">
            <div class="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full blur-2xl"></div>
            <div class="relative w-full h-full border-4 border-gold-500/40 rounded-full flex items-center justify-center glass-effect">
              <div class="text-center">
                <i class='bx bx-watch text-9xl text-gold-500 animate-rotate-360' style="animation-duration: 30s;"></i>
                <p class="text-gold-500 mt-4 text-sm tracking-wider uppercase">{{ t('hero.watch.label') }}</p>
              </div>
            </div>
          </div>

          <!-- Floating badges -->
          <div class="absolute top-10 right-10 glass-effect px-4 py-2 animate-fade-in-up delay-500">
            <i class='bx bx-check-shield text-gold-500 text-2xl'></i>
            <p class="text-white text-xs mt-1">{{ t('hero.badges.authentic') }}</p>
          </div>
          <div class="absolute bottom-20 left-0 glass-effect px-4 py-2 animate-fade-in-up delay-600">
            <i class='bx bx-gift text-gold-500 text-2xl'></i>
            <p class="text-white text-xs mt-1">{{ t('hero.badges.shipping') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#collections" class="text-white/50 hover:text-gold-500 transition-colors">
        <i class='bx bx-chevron-down text-4xl'></i>
      </a>
    </div>
  </section>
</template>
