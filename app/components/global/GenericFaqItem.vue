<!-- components/global/GenericFaqItem.vue -->
<script setup>
import { Plus, Minus } from 'lucide-vue-next'

const props = defineProps({
  number: {
    type: [Number, String],
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const formattedNumber = computed(() => {
  return String(props.number).padStart(2, '0')
})
</script>

<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <!-- Question Header -->
   <button
  @click="emit('toggle')"
  class="group flex w-full items-center justify-between px-15 py-2 text-left transition-colors hover:bg-gray-50 sm:py-3"
>
      <div class="flex items-center gap-3 sm:gap-3">
        <!-- Number -->
        <span
          class="
            text-[20px]
            font-[800]
          
            text-brand-navy
  
          "
        >
          {{ formattedNumber }}
        </span>
        
        <!-- Question Text -->
<span
  :class="[
    'text-base font-[500] tracking-[-0.02em] transition-colors md:text-xl',
    isOpen
      ? ' text-brand-navy'
      : 'text-text-heading'
  ]"
>
  {{ question }}
</span>
      </div>

      <!-- Toggle Icon -->
      <div
        class="
          flex
          size-8
          items-center
          justify-center
          rounded-full
          bg-gray-100
          text-brand-navy
          transition-all
          duration-300
          group-hover:bg-brand-navy
          group-hover:text-white
        "
      >
        <Minus v-if="isOpen" class="h-4 w-4" />
        <Plus v-else class="h-4 w-4" />
      </div>
    </button>

    <!-- Answer Content -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="isOpen"
        class="pb-2 pl-[4.5rem] sm:pl-[5.5rem]"
      >
        <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
          {{ answer }}
        </p>
      </div>
    </transition>
  </div>
</template>