<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Mail, MapPin, Star } from 'lucide-vue-next'

const openMenu = ref(null)
const barRef = ref(null)

const toggleMenu = (menu) => {
  openMenu.value = openMenu.value === menu ? null : menu
}

const closeMenu = () => {
  openMenu.value = null
}

const handleOutsideClick = (event) => {
  if (barRef.value && !barRef.value.contains(event.target)) {
    closeMenu()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)

})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    ref="barRef"
    class="relative z-50 bg-[#12358e] text-white"
  >
    <div
      class="mx-auto flex min-h-[35px] w-full max-w-[75%] items-center justify-between gap-4 px-4 text-[10px] font-semibold sm:px-5"
    >
      <!-- Google-style rating and testimonial link -->
      <NuxtLink
        to="/#reviews"
        class="flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-80"
      >
        <span class="flex items-center gap-[1px] text-[#ffd338]">
          <Star
            v-for="star in 5"
            :key="star"
            class="size-[13px] fill-current"
            aria-hidden="true"
          />
        </span>

        <span class="whitespace-nowrap text-[12px]">
          4.6 Overall Rating
          <span class="hidden sm:inline"> | View Testimonials</span>
        </span>
      </NuxtLink>

      <!-- Community dropdown -->
      <div class="relative hidden md:block">
        <button
          type="button"
          class="flex text-[12px] items-center gap-1 py-2 transition-opacity hover:opacity-80 text-bold"
          :aria-expanded="openMenu === 'community'"
          aria-controls="utility-community-menu"
          @click="toggleMenu('community')"
        >
          Proudly Supporting Local Communities
          <ChevronDown
            class="size-4 transition-transform"
            :class="openMenu === 'community' ? 'rotate-180' : ''"
            aria-hidden="true"
          />
        </button>

        <div
          v-if="openMenu === 'community'"
          id="utility-community-menu"
          class="absolute left-1/2 top-full z-50 w-[225px] -translate-x-1/2 bg-white py-2 text-[#12358e] shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
        >
          <NuxtLink
            to="/#industry"
            class="block px-4 py-2.5 text-[13px] hover:bg-[#f1f4f8]"
            @click="closeMenu"
          >
            Businesses We Support
          </NuxtLink>

          <NuxtLink
            to="/#leaders"
            class="block px-4 py-2.5 text-[12px] hover:bg-[#f1f4f8]"
            @click="closeMenu"
          >
            About Flick
          </NuxtLink>
        </div>
      </div>

      <!-- Right-side utility links -->
      <div class="flex items-center gap-4 sm:gap-6">
        <div class="relative">
          <button
            type="button"
            class="flex text-[12.5px] items-center gap-1.5 whitespace-nowrap py-2 transition-opacity hover:opacity-80"
            :aria-expanded="openMenu === 'offices'"
            aria-controls="utility-offices-menu"
            @click="toggleMenu('offices')"
          >
            <MapPin class="size-[13px]" aria-hidden="true" />
            <span class="hidden sm:inline">LOCAL OFFICES</span>
            <span class="sm:hidden">OFFICES</span>
            <ChevronDown
              class="size-3 transition-transform"
              :class="openMenu === 'offices' ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </button>

          <div
            v-if="openMenu === 'offices'"
            id="utility-offices-menu"
            class="absolute right-0 top-full z-50 w-[225px] bg-white py-2 text-[#12358e] shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
          >
            <p class="px-4 pb-1 pt-2 text-[12px] font-normal text-[#666]">
              Find pest control services near you
            </p>

            <NuxtLink
              to="/#hero-quote-form"
              class="block px-4 py-2.5 text-[13px] hover:bg-[#f1f4f8]"
              @click="closeMenu"
            >
              Request a Local Quote
            </NuxtLink>

            <a
              href="tel:1300158946"
              class="block px-4 py-2.5 text-[12px] hover:bg-[#f1f4f8]"
              @click="closeMenu"
            >
              Call 1300 158 946
            </a>
          </div>
        </div>

        <NuxtLink
          to="/#hero-quote-form"
          class="flex items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-80"
        >
          <Mail class="size-[13px]" aria-hidden="true" />
          <span class="hidden sm:inline text-[12.5px]">CONTACT US</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>