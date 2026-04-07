<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="py-20 bg-primary">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
          {{ t('contact.subtitle') }}
        </p>
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          {{ t('contact.title') }}
        </h2>
        <p class="text-slate-300">{{ t('contact.description') }}</p>
      </div>

      <div class="bg-slate-900/50 p-8 md:p-12 border border-gold-500/20">
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-white text-sm mb-2 tracking-wider uppercase">{{ t('contact.form.name') }}</label>
              <input 
                type="text" 
                class="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:border-gold-500 focus:outline-none transition-colors"
                :placeholder="t('contact.form.namePlaceholder')"
              >
            </div>
            <div>
              <label class="block text-white text-sm mb-2 tracking-wider uppercase">{{ t('contact.form.email') }}</label>
              <input 
                type="email" 
                class="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:border-gold-500 focus:outline-none transition-colors"
                :placeholder="t('contact.form.emailPlaceholder')"
              >
            </div>
          </div>
          <div>
            <label class="block text-white text-sm mb-2 tracking-wider uppercase">{{ t('contact.form.message') }}</label>
            <textarea 
              rows="5"
              class="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 focus:border-gold-500 focus:outline-none transition-colors resize-none"
              :placeholder="t('contact.form.messagePlaceholder')"
            ></textarea>
          </div>
          <button type="submit" class="btn-primary w-full">
            {{ t('contact.form.submit') }}
            <i class='bx bx-send'></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
