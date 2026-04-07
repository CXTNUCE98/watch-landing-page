<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const featured = ref([
  {
    name: 'Patrimony',
    brand: 'Vacheron Constantin',
    price: '30.000.000đ',
    image: 'https://i.pinimg.com/1200x/93/32/9e/93329e5ce0f649e3f8e16fab24372f8b.jpg',
    badge: t('featured.badge'),
    description: 'The Patrimony collection is a testament to Vacheron Constantin’s watchmaking heritage, combining classic design with modern elegance.',
  },
  {
    name: 'Reverso Classic',
    brand: 'Jaeger-LeCoultre',
    price: '12.500.000đ',
    image: 'https://i.pinimg.com/736x/6d/30/e9/6d30e9f0d2c3aebb9b1954d7ecbbd954.jpg',
    badge: t('featured.badge'),
    description: 'The Reverso Classic collection is a testament to Jaeger-LeCoultre’s watchmaking heritage, combining classic design with modern elegance.',
  },
  {
    name: 'Portugieser Chronograph',
    brand: 'IWC Schaffhausen',
    price: '15.000.000đ',
    image: 'https://i.pinimg.com/1200x/ce/5d/19/ce5d19afacdad212ea37f4f8b8c0a10b.jpg',
    badge: t('featured.badge'),
    description: 'The Portugieser Chronograph collection is a testament to IWC Schaffhausen’s watchmaking heritage, combining classic design with modern elegance.',
  },
])
</script>

<template>
  <section id="featured" class="py-20 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gold-600 dark:text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
          {{ t('featured.subtitle') }}
        </p>
        <h2 class="text-4xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-6">
          {{ t('featured.title') }}
        </h2>
        <div class="w-24 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto"></div>
      </div>

      <!-- Featured Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left - Large Feature -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <div
            class="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
            <img src="https://i.pinimg.com/736x/86/1a/28/861a2876a07429d8026c97900970591c.jpg" alt="">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <span
              class="inline-block bg-gold-500 text-primary px-4 py-1 text-xs font-semibold tracking-wider uppercase mb-4">
              {{ t('featured.badge') }}
            </span>
            <h3 class="text-3xl font-heading font-bold text-white mb-3">
              {{ t('featured.product.name') }}
            </h3>
            <p class="text-slate-300 mb-4">{{ t('featured.product.description') }}</p>
            <div class="flex items-center gap-4">
              <span class="text-gold-500 text-3xl font-bold">{{ t('featured.product.price') }}</span>
              <NuxtLink :to="localePath('/product')" class="btn-primary !py-2 !px-6">
                {{ t('featured.product.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right - Smaller Features -->
        <div class="space-y-6">
          <div v-for="(item, index) in featured" :key="index" class="luxury-card group cursor-pointer">
            <div class="flex gap-6 p-6">
              <div
                class="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center">
                <img class="w-full h-auto object-cover" :src="item.image" alt="watch-img">
              </div>
              <div class="flex-1">
                <span class="text-xs text-slate-500 tracking-wider uppercase">{{ item.brand }}</span>
                <h3
                  class="text-xl font-heading font-semibold text-primary dark:text-white mt-2 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors">
                  {{ item.name }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-gold-600 dark:text-gold-500 font-bold text-xl">{{ item.price }}</span>
                  <button class="text-slate-400 hover:text-gold-500 transition-colors">
                    <i class='bx bx-shopping-bag text-2xl'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
