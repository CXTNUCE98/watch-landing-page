<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  {
    step: 1,
    icon: 'bx-user-plus',
    title: t('howItWorks.items.0.title'),
    description: t('howItWorks.items.0.description'),
  },
  {
    step: 2,
    icon: 'bx-play',
    title: t('howItWorks.items.1.title'),
    description: t('howItWorks.items.1.description'),
  },
  {
    step: 3,
    icon: 'bx-bar-chart',
    title: t('howItWorks.items.2.title'),
    description: t('howItWorks.items.2.description'),
  },
])
</script>

<template>
  <section id="how-it-works" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {{ t('howItWorks.title') }}
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {{ t('howItWorks.subtitle') }}
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <!-- Connecting Line (desktop) -->
        <div class="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20"></div>

        <div
          v-for="item in steps"
          :key="item.step"
          class="text-center relative"
        >
          <!-- Step Number -->
          <div class="relative inline-block mb-8">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl shadow-xl shadow-blue-500/30">
              <i :class="['bx', item.icon]"></i>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-sm font-bold">
              {{ item.step }}
            </div>
          </div>

          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {{ item.title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
