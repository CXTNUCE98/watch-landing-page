<script setup lang="ts">
interface Props {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  hover: false,
  padding: 'md',
})

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <div
    :class="[
      'rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700',
      paddingClasses[padding],
      hover ? 'hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300' : '',
    ]"
  >
    <slot />
  </div>
</template>
