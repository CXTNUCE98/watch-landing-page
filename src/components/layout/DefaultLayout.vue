<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <LayoutHeader />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>
