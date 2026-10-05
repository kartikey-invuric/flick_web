<!-- AnnouncementBar.vue -->
<template>
  <div class="bg-[#22c55e] py-2 text-center text-xs text-white">
    <AppContainer>
      <p class="flex items-center justify-center gap-1 font-medium">
        <span>Found Rodents? Don't Wait Until It's Too Late!</span>
        <NuxtLink
          href="#contact"
          class="group inline-flex items-center gap-1 font-bold transition hover:underline"
        >
          Contact Us Today
          <ArrowRight class="h-3 w-3 transition group-hover:translate-x-1" />
        </NuxtLink>
      </p>
    </AppContainer>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>