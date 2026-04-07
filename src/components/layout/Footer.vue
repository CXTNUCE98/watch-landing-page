<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-primary border-t border-gold-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 border-2 border-gold-500 flex items-center justify-center">
              <span class="text-gold-500 font-heading font-bold text-xl">L</span>
            </div>
            <div>
              <span class="text-2xl font-heading font-bold text-white tracking-wider block">LUXE</span>
              <span class="text-[10px] text-gold-500 tracking-[0.3em] uppercase">{{ t('nav.tagline') }}</span>
            </div>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            {{ t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a 
              href="#" 
              class="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-all"
            >
              <i class='bx bxl-facebook text-xl'></i>
            </a>
            <a 
              href="#" 
              class="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-all"
            >
              <i class='bx bxl-instagram text-xl'></i>
            </a>
            <a 
              href="#" 
              class="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-all"
            >
              <i class='bx bxl-twitter text-xl'></i>
            </a>
          </div>
        </div>

        <!-- Collections -->
        <div>
          <h3 class="text-white font-heading font-semibold text-lg mb-6 tracking-wider">
            {{ t('footer.collections.title') }}
          </h3>
          <ul class="space-y-3">
            <li v-for="item in ['classic', 'sport', 'luxury', 'limited']" :key="item">
              <a href="#" class="text-slate-400 hover:text-gold-500 transition-colors text-sm">
                {{ t(`footer.collections.${item}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h3 class="text-white font-heading font-semibold text-lg mb-6 tracking-wider">
            {{ t('footer.service.title') }}
          </h3>
          <ul class="space-y-3">
            <li v-for="item in ['warranty', 'shipping', 'returns', 'faq']" :key="item">
              <a href="#" class="text-slate-400 hover:text-gold-500 transition-colors text-sm">
                {{ t(`footer.service.${item}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-heading font-semibold text-lg mb-6 tracking-wider">
            {{ t('footer.contact.title') }}
          </h3>
          <ul class="space-y-3 text-slate-400 text-sm">
            <li class="flex items-start gap-3">
              <i class='bx bx-map text-gold-500 text-xl flex-shrink-0 mt-1'></i>
              <span>{{ t('footer.contact.address') }}</span>
            </li>
            <li class="flex items-center gap-3">
              <i class='bx bx-phone text-gold-500 text-xl flex-shrink-0'></i>
              <span>{{ t('footer.contact.phone') }}</span>
            </li>
            <li class="flex items-center gap-3">
              <i class='bx bx-envelope text-gold-500 text-xl flex-shrink-0'></i>
              <span>{{ t('footer.contact.email') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">
            {{ t('footer.copyright', { year: currentYear }) }}
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-slate-500 hover:text-gold-500 text-sm transition-colors">
              {{ t('footer.privacy') }}
            </a>
            <a href="#" class="text-slate-500 hover:text-gold-500 text-sm transition-colors">
              {{ t('footer.terms') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
