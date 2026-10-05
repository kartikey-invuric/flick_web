<!-- components/home/Reviews.vue -->
<script setup>
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const reviews = [
  {
    id: 1,
    name: 'John R.',
    avatar: 'https://ui-avatars.com/api/?name=John+R&background=random',
    rating: 5,
    text: 'Mark Newman was very knowledgeable and had great advice!',
    date: '10 days ago'
  },
  {
    id: 2,
    name: 'Abiramee S.',
    avatar: 'https://ui-avatars.com/api/?name=Abiramee+S&background=random',
    rating: 5,
    text: 'Mark P was very friendly and professional. He took the time to explain everything.',
    date: '10 days ago'
  },
  {
    id: 3,
    name: 'Jesher E.',
    avatar: 'https://ui-avatars.com/api/?name=Jesher+E&background=random',
    rating: 5,
    text: 'Great service by Corey TB',
    date: '10 days ago'
  },
  {
    id: 4,
    name: 'Sarah M.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+M&background=random',
    rating: 5,
    text: 'Excellent service! The technician was punctual and very thorough. Highly recommend Flick Pest Control.',
    date: '2 weeks ago'
  },
  {
    id: 5,
    name: 'David K.',
    avatar: 'https://ui-avatars.com/api/?name=David+K&background=random',
    rating: 5,
    text: 'Very professional team. They solved our termite problem quickly and efficiently.',
    date: '3 weeks ago'
  },
  {
    id: 6,
    name: 'Emma L.',
    avatar: 'https://ui-avatars.com/api/?name=Emma+L&background=random',
    rating: 5,
    text: 'Best pest control service in Australia! Fair pricing and great results.',
    date: '1 month ago'
  },
  {
    id: 7,
    name: 'Michael T.',
    avatar: 'https://ui-avatars.com/api/?name=Michael+T&background=random',
    rating: 5,
    text: 'The SMART rodent control system is amazing. No more mice in our home!',
    date: '1 month ago'
  },
  {
    id: 8,
    name: 'Lisa W.',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+W&background=random',
    rating: 5,
    text: 'Friendly staff and effective treatments. Our home is finally pest-free!',
    date: '2 months ago'
  }
]

const currentIndex = ref(0)
const reviewsPerView = ref(3)
let autoPlayInterval

const lastIndex = computed(() =>
  Math.max(0, reviews.length - reviewsPerView.value)
)

const updateReviewsPerView = () => {
  reviewsPerView.value =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3

  currentIndex.value = Math.min(currentIndex.value, lastIndex.value)
}

const next = () => {
  currentIndex.value =
    currentIndex.value >= lastIndex.value ? 0 : currentIndex.value + 1
}

const prev = () => {
  currentIndex.value =
    currentIndex.value <= 0 ? lastIndex.value : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
  restartAutoPlay()
}

const restartAutoPlay = () => {
  clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(next, 5000)
}

onMounted(() => {
  updateReviewsPerView()
  window.addEventListener('resize', updateReviewsPerView)
  restartAutoPlay()
})

onUnmounted(() => {
  clearInterval(autoPlayInterval)
  window.removeEventListener('resize', updateReviewsPerView)
})
</script>

<template>
  <section class="bg-white py-12 sm:py-14">
    <div class="mx-auto w-full max-w-[1250px] px-5 sm:px-8">
      <h2
        class="mb-10 text-center text-[30px] font-normal leading-tight text-[#484848] sm:mb-11 sm:text-[42px]"
      >
        Customer Reviews on Google
      </h2>

      <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-[10px]">
        <!-- Rating block shown on the left in the reference -->
        <div
          class="flex shrink-0 flex-col items-center justify-center lg:h-[210px] lg:w-[270px] lg:items-start"
        >
          <p class="text-[19px] font-semibold text-[#484848]">
            Flick Pest Control
          </p>

          <div class="mt-1 flex items-center gap-2">
            <span class="text-[16px] font-bold text-[#ff8828]">4.4</span>

            <div class="flex items-center gap-[3px] text-[#ff8828]">
              <Star
                v-for="star in 4"
                :key="star"
                class="size-[19px] fill-current"
              />
              <Star class="size-[19px]" />
            </div>
          </div>
        </div>

        <!-- Carousel -->
        <div class="relative min-w-0 flex-1 bg-white-50 px-2 py-2">
          <div class="overflow-hidden">
            <div
              class="flex gap-[18px] transition-transform duration-500 ease-in-out"
              :style="{
                '--per-view': reviewsPerView,
                transform: `translateX(calc(-${currentIndex} * (100% + 18px) / ${reviewsPerView}))`
              }"
            >
              <div
                v-for="review in reviews"
                :key="review.id"
                class="min-w-0 shrink-0 px-2 py-2"
                style="width: calc((100% - (var(--per-view) - 1) * 18px) / var(--per-view))"
              >
                <!-- Speech-bubble review card -->
                <div
                  class="relative flex h-[210px] flex-col rounded-[5px] bg-[#fafafa] px-4 pb-4 pt-[17px] shadow-[0_1px_6px_rgba(0,0,0,0.25)]"
                >
                  <span
                    class="pointer-events-none absolute bottom-[-10px] left-[18px] size-[19px] rotate-45 border-b border-r border-[#dedede] bg-[#fafafa] shadow-[2px_2px_2px_rgba(0,0,0,0.08)]"
                  />

                  <!-- Google mark -->
                  <svg
                    class="absolute right-3 top-3 size-[15px]"
                    viewBox="0 0 24 24"
                    aria-label="Google"
                    role="img"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>

                  <p class="pr-3 text-[14px] leading-[25px] text-[#4c4c4c]">
                    {{ review.text }}
                  </p>

                  <div class="mt-auto flex gap-[3px] text-[#ff8828]">
                    <Star
                      v-for="star in 5"
                      :key="star"
                      :class="[
                        'size-[19px]',
                        star <= review.rating ? 'fill-current' : ''
                      ]"
                    />
                  </div>
                </div>

                <!-- Reviewer sits BELOW the card -->
                <div class="mt-[13px] flex items-center gap-3 pl-[18px]">
                  <img
                    :src="review.avatar"
                    :alt="review.name"
                    class="size-[44px] rounded-full object-cover"
                  />
                  <div>
                    <p class="text-[14px] font-semibold text-[#082a78]">
                      {{ review.name }}
                    </p>
                    <p class="mt-[3px] text-[12px] text-[#777]">
                      {{ review.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Arrows overlap the outer edges of the cards -->
          <button
            type="button"
            aria-label="Previous reviews"
            class="absolute -left-5 top-[117px] z-10 flex size-[35px] -translate-y-1/2 items-center justify-center rounded-full border border-[#dedede] bg-white text-[#888] shadow-[0_1px_5px_rgba(0,0,0,0.16)] hover:text-[#082a78]"
            @click="prev"
          >
            <ChevronLeft class="size-[18px]" />
          </button>

          <button
            type="button"
            aria-label="Next reviews"
            class="absolute -right-5 top-[117px] z-10 flex size-[35px] -translate-y-1/2 items-center justify-center rounded-full border border-[#dedede] bg-white text-[#888] shadow-[0_1px_5px_rgba(0,0,0,0.16)] hover:text-[#082a78]"
            @click="next"
          >
            <ChevronRight class="size-[18px]" />
          </button>

          <!-- Small circular dots, not elongated pills -->
          <div class="mt-4 flex justify-center gap-[9px]">
            <button
              v-for="dot in lastIndex + 1"
              :key="dot"
              type="button"
              :aria-label="`Go to review ${dot}`"
              :aria-current="currentIndex === dot - 1 ? 'true' : undefined"
              :class="[
                'size-[7px] rounded-full transition-colors',
                currentIndex === dot - 1
                  ? 'bg-[#ff8828]'
                  : 'bg-[#d8d8d8]'
              ]"
              @click="goToSlide(dot - 1)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>