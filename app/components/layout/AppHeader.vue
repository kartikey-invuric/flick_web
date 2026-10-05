<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Phone } from 'lucide-vue-next'

const navHolderRef = ref(null)
const isStuck = ref(false)
const navHeight = ref(0)

let stickyTop = 0
let frame = null
let resizeObserver = null

const evaluate = () => {
  const el = navHolderRef.value
  if (!el) return

  if (isStuck.value) {
    navHeight.value = el.offsetHeight
    if (window.scrollY <= stickyTop) isStuck.value = false
    return
  }

  navHeight.value = el.offsetHeight

  const top = el.getBoundingClientRect().top

  // Utility bar + branding row have scrolled past the top of the viewport.
  if (top <= 0) {

    stickyTop = window.scrollY + top
    isStuck.value = true
    
  }
}

const onScroll = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = null
    evaluate()
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)

  resizeObserver = new ResizeObserver(() => {
    if (navHolderRef.value) navHeight.value = navHolderRef.value.offsetHeight
  })
  resizeObserver.observe(navHolderRef.value)

  evaluate()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  resizeObserver?.disconnect()
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <header class="relative z-40 w-full bg-white">
    <UtilityBar />

    <!-- Main branding row -->
    <div class="bg-white">
      <div
        class="mx-auto flex h-[86px] w-full max-w-[75%] items-center justify-between gap-4 px-4 sm:h-[106px] sm:px-5"
      >
        <!-- Brand logo -->
        <NuxtLink
          to="/"
          class="inline-flex shrink-0 items-center"
          aria-label="Flick Pest Control home"
        >
          <img
            src="https://www.flick.com.au/wp-content/themes/Flick_v2/img/flick_logo.svg"
            alt="Flick Pest Control"
            class="h-[55px] w-auto object-contain sm:h-[70px]"
          />
        </NuxtLink>

        <!-- Main phone number -->
        <a
          href="tel:1300158946"
          class="group inline-flex items-center gap-1.5 text-[12px] font-bold uppercase text-[#12358e] transition-colors hover:text-[#bd3023] sm:gap-2 sm:text-[16px]"
        >
          <Phone
            class="size-[17px] shrink-0 transition-transform group-hover:rotate-[-12deg] sm:size-[22px]"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <span>
            <span class="hidden sm:inline">Call Us Now </span>
            1300 158 946
          </span>
        </a>
      </div>
    </div>

    <!-- Spacer keeps the document flow while the nav is pinned to the top. -->
    <div
      v-if="isStuck"
      :style="{ height: `${navHeight}px` }"
      aria-hidden="true"
    />

    <!-- Main navigation: sticks to the top once the utility bar + branding row scroll past. -->
    <div
      ref="navHolderRef"
      :class="
        isStuck
          ? 'fixed left-0 top-0 z-50 w-full shadow-[0_2px_8px_rgba(0,0,0,0.12)]'
          : 'relative'
      "
    >
      <MainNav />
    </div>

    <!-- Announcement is intentionally kept inside the header. -->
    <NuxtLink
      
      class="flex min-h-[25px] items-center justify-center bg-[#27a66c] px-4 py-2 text-center text-[11px] leading-tight text-white transition-colors hover:bg-[#218d5c] sm:text-[12px]"
    >
      Found Rodents? Don’t Wait Until It’s Too Late!
      <span class="ml-1 font-bold">Contact Us Today &gt;</span>
    </NuxtLink>
  </header>
</template>