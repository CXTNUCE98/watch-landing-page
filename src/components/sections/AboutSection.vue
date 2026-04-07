<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left - Image/Visual -->
        <div class="relative">
          <div class="aspect-square bg-gradient-to-br from-primary to-slate-900 rounded-lg overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <i class='bx bx-watch text-[200px] text-gold-500 animate-float'></i>
              </div>
            </div>
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-gold-500/20 rounded-lg"></div>
          <div class="absolute -top-8 -left-8 w-48 h-48 border-4 border-gold-500/20 rounded-lg"></div>
        </div>

        <!-- Right - Content -->
        <div>
          <p class="text-gold-600 dark:text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
            {{ t('about.subtitle') }}
          </p>
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
            {{ t('about.title') }}
          </h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {{ t('about.description') }}
          </p>

          <!-- Highlights -->
          <div class="space-y-6 mb-8">
            <div v-for="i in 3" :key="i" class="flex items-start gap-4">
              <div class="w-12 h-12 border-2 border-gold-500 flex items-center justify-center flex-shrink-0">
                <i :class="['bx bx-check text-gold-500 text-xl']"></i>
              </div>
              <div>
                <h3 class="text-primary dark:text-white font-semibold mb-1">{{ t(`about.highlights.${i-1}.title`) }}</h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm">{{ t(`about.highlights.${i-1}.description`) }}</p>
              </div>
            </div>
          </div>

          <button class="btn-primary">
            {{ t('about.cta') }}
            <i class='bx bx-right-arrow-alt'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
