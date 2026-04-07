<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const plans = computed(() => [
  {
    name: t('pricing.items.free.name'),
    price: t('pricing.items.free.price'),
    period: t('pricing.period'),
    description: t('pricing.items.free.description'),
    features: [
      t('pricing.items.free.features.0'),
      t('pricing.items.free.features.1'),
      t('pricing.items.free.features.2'),
    ],
    highlighted: false,
    cta: t('pricing.items.free.cta'),
  },
  {
    name: t('pricing.items.pro.name'),
    price: t('pricing.items.pro.price'),
    period: t('pricing.period'),
    description: t('pricing.items.pro.description'),
    features: [
      t('pricing.items.pro.features.0'),
      t('pricing.items.pro.features.1'),
      t('pricing.items.pro.features.2'),
      t('pricing.items.pro.features.3'),
      t('pricing.items.pro.features.4'),
    ],
    highlighted: true,
    cta: t('pricing.items.pro.cta'),
  },
  {
    name: t('pricing.items.team.name'),
    price: t('pricing.items.team.price'),
    period: t('pricing.period'),
    description: t('pricing.items.team.description'),
    features: [
      t('pricing.items.team.features.0'),
      t('pricing.items.team.features.1'),
      t('pricing.items.team.features.2'),
      t('pricing.items.team.features.3'),
      t('pricing.items.team.features.4'),
      t('pricing.items.team.features.5'),
    ],
    highlighted: false,
    cta: t('pricing.items.team.cta'),
  },
])
</script>

<template>
  <section id="pricing" class="py-20 bg-slate-50 dark:bg-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {{ t('pricing.title') }}
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BaseCard
          v-for="(plan, index) in plans"
          :key="index"
          :hover="!plan.highlighted"
          padding="lg"
          :class="[
            'relative transition-all duration-300',
            plan.highlighted ? 'ring-2 ring-blue-600 shadow-xl scale-105' : ''
          ]"
        >
          <!-- Popular Badge -->
          <div v-if="plan.highlighted" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
              {{ t('pricing.popular') }}
            </span>
          </div>

          <!-- Plan Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {{ plan.name }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {{ plan.description }}
            </p>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-slate-900 dark:text-white">
                {{ plan.price }}
              </span>
              <span class="text-slate-600 dark:text-slate-400">/{{ plan.period }}</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="space-y-3 mb-8">
            <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start gap-3">
              <i class='bx bx-check text-green-500 text-xl flex-shrink-0 mt-0.5'></i>
              <span class="text-slate-700 dark:text-slate-300">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <NuxtLink
            :to="localePath('/get-started')"
            :class="plan.highlighted ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'"
          >
            {{ plan.cta }}
          </NuxtLink>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
