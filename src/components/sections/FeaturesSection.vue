<script setup lang="ts">
const { t } = useI18n()

const features = computed(() => [
  {
    icon: 'bx-time',
    title: t('features.items.0.title'),
    description: t('features.items.0.description'),
  },
  {
    icon: 'bx-git-repo-forked',
    title: t('features.items.1.title'),
    description: t('features.items.1.description'),
  },
  {
    icon: 'bx-package',
    title: t('features.items.2.title'),
    description: t('features.items.2.description'),
  },
  {
    icon: 'bx-refresh',
    title: t('features.items.3.title'),
    description: t('features.items.3.description'),
  },
])
</script>

<template>
  <section class="py-20 bg-primary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div v-for="(feature, index) in features" :key="index" class="text-center group">
          <div
            class="w-20 h-20 mx-auto mb-6 border-2 border-gold-500 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-500">
            <i
              :class="['bx', feature.icon, 'text-4xl text-gold-500 group-hover:text-primary transition-colors duration-500']"></i>
          </div>
          <h3 class="text-white font-heading font-semibold text-xl mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
