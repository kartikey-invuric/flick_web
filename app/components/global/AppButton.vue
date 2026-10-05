<script setup>
defineProps({
  to: {
    type: String,
    default: ''
  },

  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold transition-all duration-300"
    :class="{
      'bg-brand-red text-white hover:bg-red-700': variant === 'primary',
      'bg-brand-navy text-white hover:bg-blue-900': variant === 'navy',
      'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold transition-all duration-300"
    :class="{
      'bg-brand-red text-white hover:bg-red-700': variant === 'primary',
      'bg-brand-navy text-white hover:bg-blue-900': variant === 'navy',
      'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>