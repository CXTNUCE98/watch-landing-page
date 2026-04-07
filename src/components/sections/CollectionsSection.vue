<script setup lang="ts">
const { t } = useI18n()

const watches = computed(() => [
  {
    name: t('watches.items.0.name'),
    brand: t('watches.items.0.brand'),
    price: t('watches.items.0.price'),
    image: 'https://i.pinimg.com/736x/41/d5/3a/41d53a0664c6ee4e378ffbebf612616c.jpg',
    badge: t('watches.badges.new'),
  },
  {
    name: t('watches.items.1.name'),
    brand: t('watches.items.1.brand'),
    price: t('watches.items.1.price'),
    image: 'https://i.pinimg.com/1200x/b1/8f/00/b18f00480241d5bebbe7e0ab2d997f1b.jpg',
    badge: t('watches.badges.bestseller'),
  },
  {
    name: t('watches.items.2.name'),
    brand: t('watches.items.2.brand'),
    price: t('watches.items.2.price'),
    image: 'https://i.pinimg.com/1200x/e7/85/65/e7856502499c5ba933343c2027721d9a.jpg',
    badge: null,
  },
  {
    name: t('watches.items.3.name'),
    brand: t('watches.items.3.brand'),
    price: t('watches.items.3.price'),
    image: 'https://i.pinimg.com/1200x/e1/2d/8e/e12d8e1ca0dda7c79130b8db1801e518.jpg',
    badge: t('watches.badges.limited'),
  },
])
</script>

<template>
  <section id="collections" class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gold-600 dark:text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
          {{ t('collections.subtitle') }}
        </p>
        <h2 class="text-4xl md:text-6xl font-heading font-bold text-primary dark:text-white mb-6">
          {{ t('collections.title') }}
        </h2>
        <div class="w-24 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto"></div>
      </div>

      <!-- Watches Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(watch, index) in watches" :key="index" class="luxury-card cursor-pointer group">
          <!-- Image Container -->
          <div
            class="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center overflow-hidden">
            <!-- Badge -->
            <div v-if="watch.badge" class="absolute top-4 left-4 z-10">
              <span class="bg-gold-500 text-primary px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                {{ watch.badge }}
              </span>
            </div>

            <!-- Watch Icon -->
            <div class="text-9xl group-hover:scale-110 transition-transform duration-500">
              <img :src="watch.image" alt="">
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
              <button
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn-primary !py-2 !px-6 !text-sm">
                {{ t('collections.quickView') }}
              </button>
            </div>
          </div>

          <!-- Info -->
          <div class="p-6">
            <p class="text-slate-500 dark:text-slate-400 text-xs tracking-wider uppercase mb-2">
              {{ watch.brand }}
            </p>
            <h3
              class="text-lg font-heading font-semibold text-primary dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors">
              {{ watch.name }}
            </h3>
            <div class="flex items-center justify-between">
              <span class="text-gold-600 dark:text-gold-500 font-bold text-xl">{{ watch.price }}</span>
              <button class="text-slate-400 hover:text-gold-500 transition-colors">
                <i class='bx bx-shopping-bag text-2xl'></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <button class="btn-secondary">
          {{ t('collections.viewAll') }}
          <i class='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </div>
  </section>
</template>
