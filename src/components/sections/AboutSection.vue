<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left - Visual -->
        <div class="relative">
          <!-- Main Image Container -->
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-slate-800"></div>

            <!-- Subtle Pattern -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0"
                style="background-image: repeating-linear-gradient(45deg, rgba(212,175,55,0.3) 0px, rgba(212,175,55,0.3) 1px, transparent 1px, transparent 20px);">
              </div>
            </div>

            <!-- Watch Image -->
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20251201/pngtree-close-up-of-luxurious-gold-watch-image_20657748.webp"
                alt="Luxury Watch Craftsmanship"
                class="w-full h-full object-contain drop-shadow-[0_10px_40px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform duration-700">
            </div>

            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

            <!-- Floating Stats Card -->
            <div class="absolute bottom-6 left-6 right-6 glass-effect rounded-xl p-4 border border-gold-500/20">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-gold-500">1970</div>
                  <div class="text-[10px] text-slate-300 uppercase tracking-wider">Thành lập</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gold-500">50+</div>
                  <div class="text-[10px] text-slate-300 uppercase tracking-wider">Thương hiệu</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gold-500">100K+</div>
                  <div class="text-[10px] text-slate-300 uppercase tracking-wider">Khách hàng</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Frame -->
          <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/20 rounded-2xl -z-10"></div>
          <div class="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-gold-500/30 rounded-tl-2xl -z-10">
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute -top-4 -right-4 glass-effect px-4 py-3 rounded-xl border border-gold-500/20 animate-float shadow-xl">
            <div class="flex items-center gap-2">
              <i class='bx bx-award text-gold-500 text-2xl'></i>
              <div>
                <div class="text-white font-semibold text-sm">Chính Hãng</div>
                <div class="text-slate-400 text-xs">100% Authentic</div>
              </div>
            </div>
          </div>

          <!-- Decorative Dots -->
          <div
            class="absolute -bottom-2 -left-2 w-4 h-4 bg-gold-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          </div>
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
                <h3 class="text-primary dark:text-white font-semibold mb-1">{{ t(`about.highlights.${i - 1}.title`) }}
                </h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm">{{ t(`about.highlights.${i - 1}.description`) }}</p>
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
