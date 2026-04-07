<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-950"></div>

    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute inset-0"
        style="background-image: linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px); background-size: 60px 60px;">
      </div>
    </div>

    <!-- Floating Glow Effects -->
    <div class="absolute top-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-80 h-80 bg-gold-600/10 rounded-full blur-[100px] animate-pulse"
      style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-gold-400/5 rounded-full blur-[80px] animate-pulse"
      style="animation-delay: 2s;"></div>

    <!-- Rotating Rings -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="w-[700px] h-[700px] border border-gold-500/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-gold-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-gold-500/10 rounded-full animate-[spin_20s_linear_infinite]">
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- Badge -->
          <div class="animate-fade-in-down">
            <span
              class="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full">
              <span class="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
              <span class="text-gold-500 tracking-[0.2em] uppercase text-xs font-semibold">
                {{ t('hero.badge') }}
              </span>
            </span>
          </div>

          <!-- Title -->
          <div class="animate-fade-in-up">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1]">
              {{ t('hero.title.part1') }}
              <br>
              <span class="text-gradient-gold">{{ t('hero.title.part2') }}</span>
            </h1>
          </div>

          <!-- Subtitle -->
          <p
            class="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200 leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
            <NuxtLink :to="localePath('/#collections')"
              class="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-primary font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105">
              <span class="relative z-10">{{ t('hero.cta.primary') }}</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
              </div>
            </NuxtLink>
            <NuxtLink :to="localePath('/#about')"
              class="group px-8 py-4 border-2 border-gold-500/30 text-gold-500 font-semibold rounded-lg hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:scale-105">
              {{ t('hero.cta.secondary') }}
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/50 animate-fade-in-up delay-400">
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-1">50+</div>
              <div class="text-slate-500 text-sm uppercase tracking-wider">{{ t('hero.stats.brands') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-1">10K+</div>
              <div class="text-slate-500 text-sm uppercase tracking-wider">{{ t('hero.stats.watches') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-heading font-bold text-gold-500 mb-1">100%</div>
              <div class="text-slate-500 text-sm uppercase tracking-wider">{{ t('hero.stats.authentic') }}</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Watch Display -->
        <div class="relative hidden lg:flex items-center justify-center animate-scale-in delay-300">
          <!-- Glow behind watch -->
          <div
            class="absolute w-[350px] h-[350px] bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-full blur-[60px]">
          </div>

          <!-- Watch Container -->
          <div class="relative w-[400px] h-[400px]">
            <!-- Outer ring -->
            <div class="absolute inset-0 border-2 border-gold-500/20 rounded-full animate-[spin_60s_linear_infinite]">
            </div>

            <!-- Watch Image -->
            <div class="absolute inset-8 animate-float">
              <img
                src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-antique-clock-face-png-image_20072994.png"
                alt="Luxury Watch" class="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
            </div>

            <!-- Rotating dots on ring -->
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-gold-500 rounded-full animate-[spin_60s_linear_infinite] origin-[50%_200px]">
            </div>
          </div>

          <!-- Floating Badges -->
          <div
            class="absolute top-0 right-0 glass-effect px-5 py-3 rounded-xl border border-gold-500/20 animate-fade-in-up delay-500 hover:scale-105 transition-transform">
            <div class="flex items-center gap-2">
              <i class='bx bx-check-shield text-gold-500 text-xl'></i>
              <p class="text-white text-xs font-medium">{{ t('hero.badges.authentic') }}</p>
            </div>
          </div>

          <div
            class="absolute bottom-10 left-0 glass-effect px-5 py-3 rounded-xl border border-gold-500/20 animate-fade-in-up delay-600 hover:scale-105 transition-transform">
            <div class="flex items-center gap-2">
              <i class='bx bx-gift text-gold-500 text-xl'></i>
              <p class="text-white text-xs font-medium">{{ t('hero.badges.shipping') }}</p>
            </div>
          </div>

          <!-- Small decorative elements -->
          <div class="absolute top-1/4 -left-4 w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
          <div class="absolute bottom-1/4 -right-4 w-2 h-2 bg-gold-400 rounded-full animate-ping"
            style="animation-delay: 0.5s;"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#collections"
        class="flex flex-col items-center gap-2 text-slate-500 hover:text-gold-500 transition-colors">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <i class='bx bx-chevron-down text-3xl'></i>
      </a>
    </div>
  </section>
</template>
