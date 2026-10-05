<script setup>
import {
  ArrowRight,
  Tractor,
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Landmark,
  Factory,
  House,
  Store
} from 'lucide-vue-next'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'leaders', 'industry'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  cardBgColor: {
    type: String,
    default: 'bg-white'
  },
  buttonText: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: ''
  }
})

// Map industry icon keys to Lucide components.
const industryIcons = {
  agricultural: Tractor,
  education: GraduationCap,
  health: HeartPulse,
  hospitality: UtensilsCrossed,
  government: Landmark,
  manufacturing: Factory,
  housing: House,
  retail: Store
}
</script>

<template>
  <!-- Circular service card -->
  <article
    v-if="variant === 'default'"
    class="group flex h-full min-w-0 flex-col items-center text-center"
  >
    <!-- Image and rotating interrupted outline -->
    <div
      class="relative mb-5 flex size-[204px] shrink-0 items-center justify-center sm:size-[212px] xl:size-[222px]"
    >
      <div
        class="pointer-events-none absolute inset-0 rotate-[70deg] rounded-full border-[6px] border-[#12358e] border-b-transparent border-r-transparent transition-transform duration-700 ease-in-out group-hover:rotate-[158deg] motion-reduce:transition-none"
      />

      <div
        class="pointer-events-none absolute inset-0 rotate-[20deg] rounded-full border-[6px] border-transparent border-b-[#12358e] transition-transform duration-700 ease-in-out group-hover:rotate-[204deg] motion-reduce:transition-none"
      />

      <div
        class="relative size-[188px] overflow-hidden rounded-full bg-[#e9edf0] sm:size-[196px] xl:size-[206px]"
      >
        <img
          v-if="image"
          :src="image"
          :alt="title"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>
    </div>

    <h3
      class="mb-1 text-[15px] font-bold leading-snug text-[#12358e] sm:text-[16px]"
    >
      {{ title }}
    </h3>

    <p
      v-if="description"
      class="mb-7 w-full flex-1 text-center text-[13px] leading-[1.5] text-[#626262]"
    >
      {{ description }}
    </p>

    <NuxtLink
      v-if="buttonText && link"
      :to="link"
      class="mt-auto inline-flex min-h-[38px] items-center justify-center rounded-[12px] bg-[#12358e] px-5 py-2 text-center text-[12px] font-medium leading-tight text-white transition-colors duration-200 hover:bg-[#0b286f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12358e]"
    >
      {{ buttonText }}
    </NuxtLink>
  </article>

  <!-- Leaders card -->
  <article
    v-else-if="variant === 'leaders'"
    :class="[
      'group flex h-full min-w-0 flex-col',
      cardBgColor
    ]"
  >
    <div class="relative mb-2 overflow-hidden shadow-md">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[280px]"
      />

      <div
        class="absolute bottom-8 left-0 bg-white py-1 pl-5 pr-3 before:absolute before:left-0 before:top-0 before:h-full before:w-[10px] before:bg-[#12358e] sm:pl-6 sm:pr-4"
      >
        <h3 class="text-[14px] font-bold text-[#12358e] sm:text-[15px]">
          {{ title }}
        </h3>
      </div>
    </div>

    <p
      class="mb-4 flex-1 text-[14px] leading-relaxed text-[#626262] sm:text-[15px]"
    >
      {{ description }}
    </p>

    <NuxtLink
      v-if="linkText && link"
      :to="link"
      class="group/link inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#12358e] transition-colors hover:text-[#bd3023]"
    >
      {{ linkText }}

      <ArrowRight
        class="size-4 transition-transform group-hover/link:translate-x-1"
        aria-hidden="true"
      />
    </NuxtLink>
  </article>

  <!-- Industry card with a Lucide outline icon -->
<NuxtLink
  v-else-if="variant === 'industry'"
  :to="link || '#'"
  :class="[
    'group relative flex min-h-[96px] min-w-0 items-center justify-center overflow-hidden rounded-[12px] border border-transparent px-3 py-5 text-center transition-all duration-300  hover:border-2 hover:border-[#12358e] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12358e]',
    cardBgColor
  ]"
>
    <!-- Decorative icon is positioned at the right, behind the title. -->
    <component
      :is="industryIcons[props.icon] || House"
      :stroke-width="1.25"
      aria-hidden="true"
      class="pointer-events-none absolute -right-3 top-1/2 size-[78px] -translate-y-1/2 text-[#9eafb7]/55 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#7f99a8]/65"
    />

    <div class="relative z-10">
      <h3
        class="text-[14px] font-normal leading-[1.45] text-[#0d2b88] sm:text-[15px]"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="mt-1 text-[11px] leading-snug text-[#52606a]"
      >
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>