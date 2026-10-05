```vue
<!-- app/components/home/HomeHero.vue -->

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const heroImage =
  'https://www.flick.com.au/wp-content/uploads/2510_Termite-Campaign-Website-Banner_Image-scaled.webp'
  
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-white"
    aria-label="Termite and pest control"
  >
    <!-- The image fills the entire hero instead of rendering at its original size. -->
    <img
      :src="heroImage"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
    />

    <!-- No dark overlay: the section keeps the image and white areas bright. -->
    <AppContainer
      class="relative flex min-h-[680px] items-center py-12 sm:py-14 lg:min-h-[640px] lg:py-16"
    >
      <div
        class="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10 lg:pr-24 xl:gap-16 xl:pr-35"
      >
        <!-- Hero heading and action -->
        <div class="relative z-10 max-w-[550px] ml-10">
          <h1
            class="text-[34px] font-extrabold uppercase leading-[1.18] tracking-[-0.03em] text-white sm:text-[42px]  lg:text-[44px] xl:text-[48px]"
          >
            <span
              class="box-decoration-clone bg-[#173b94] px-[10px]  py-[2px] sm:px-[13px] sm:py-[3px]  letter-spacing-[10px] "
            >
              Protect Your Home From Termites And Pests
            </span>
          </h1>

          <a
            href="#hero-quote-form"
            class="mt-5 inline-flex min-h-[42px] items-center justify-center gap-3 rounded-[3px] bg-[#bd3023] px-5 text-[13px] font-bold uppercase text-white transition-colors hover:bg-[#a8291e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd3023]"
          >
            Book An Inspection

            <ArrowRight
              class="size-4"
              aria-hidden="true"
            />
          </a>
        </div>

        <!-- Quote form stays above the background image. -->
        <div
          id="hero-quote-form"
          class="relative z-10 mx-auto w-full max-w-[400px] scroll-mt-8 lg:mx-0"
        >
          <QuoteForm />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
```
