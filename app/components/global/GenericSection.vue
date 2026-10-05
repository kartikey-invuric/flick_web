<script setup>
const props = defineProps({
  sectionId: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  cards: {
    type: Array,
    default: () => []
  },
  bgColor: {
    type: String,
    default: 'bg-white'
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['intro', 'default', 'leaders', 'industry', 'faq'].includes(value)
  },
  faqData: {
    type: Array,
    default: () => []
  },
  footerLink: {
    type: Object,
    default: null
  },

  // Optional styling overrides for individual sections.
  headingClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  subtitleClass: {
    type: String,
    default: ''
  },

  // Text at the start of the intro description that should be bold.
  introLead: {
    type: String,
    default: ''
  }
})

const sectionRef = ref(null)
const { isVisible } = useScrollAnimation(sectionRef)

const openFaqIndex = ref(0)

const isFaq = computed(
  () => props.variant === 'faq' || props.faqData.length > 0
)

const introHasLead = computed(
  () =>
    props.variant === 'intro' &&
    props.introLead &&
    props.subtitle.startsWith(props.introLead)
)

const introDescriptionRemainder = computed(() =>
  introHasLead.value
    ? props.subtitle.slice(props.introLead.length).trimStart()
    : props.subtitle
)

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}
</script>

<template>
  <section
    :id="sectionId"
    ref="sectionRef"
    :class="[
      bgColor,
      'transition-all duration-700 ease-out',
      variant === 'intro'
        ? 'py-11 sm:py-14 lg:py-16'
        : variant === 'industry'
          ? 'py-12 sm:py-14 lg:py-14'
          : variant === 'default'
            ? 'py-12 sm:py-14 lg:py-16'
            : 'py-12 sm:py-16 lg:py-20',
      isVisible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0'
    ]"
  >
    <AppContainer>
      <!-- Shared heading; intro can receive its own layout classes. -->
      <div
        :class="[
          variant === 'intro'
            ? 'mx-auto max-w-[1100px] text-center'
            : variant === 'industry'
              ? 'mb-6 text-center'
              : variant === 'default'
                ? 'mb-8 text-center sm:mb-9'
                : 'mb-8 text-center sm:mb-8 lg:mb-10',
          headingClass
        ]"
      >
        <h2
          :class="[
            variant === 'intro'
              ? 'text-[32px] font-bold leading-[0.95] text-[#12358e] sm:text-[35px] lg:text-[40px]'
              : 'text-[28px] font-normal leading-tight text-[#4b4b4b] sm:text-[32px] lg:text-[34px]',
            titleClass
          ]"
        >
          {{ title }}
        </h2>

        <!-- Intro description supports a bold opening phrase. -->
        <p
          v-if="subtitle && variant === 'intro'"
          :class="[
            'mx-auto mt-5 max-w-[1100px] text-[10px] leading-[1.2] tracking-[0.045em] text-[#555] sm:text-[11px] sm:leading-[1.5]',
            subtitleClass
          ]"
        >
          <template v-if="introHasLead">
            <strong class="font-bold text-[#3f3f3f]">
              {{ introLead }}
            </strong>
            {{ ' ' + introDescriptionRemainder }}
          </template>

          <template v-else>
            {{ subtitle }}
          </template>
        </p>

        <!-- Existing subtitles retain their original appearance. -->
        <p
          v-else-if="subtitle"
          :class="[
            'mt-2 text-[17px] leading-snug text-[#555] sm:text-[21px] lg:text-[23px]',
            subtitleClass
          ]"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Intro intentionally has no cards or accordion. -->
      <template v-if="variant !== 'intro'">
        <!-- Services: four evenly spaced cards -->
        <div
          v-if="!isFaq && variant === 'default'"
          class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7"
        >
          <GenericCard
            v-for="(card, index) in cards"
            :key="card.id ?? index"
            v-bind="card"
            variant="default"
          />
        </div>

        <!-- Leaders: three-column cards -->
        <div
          v-else-if="!isFaq && variant === 'leaders'"
          class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-10 xl:px-16"
        >
          <GenericCard
            v-for="(card, index) in cards"
            :key="card.id ?? index"
            v-bind="card"
            variant="leaders"
          />
        </div>

        <!-- Industry: compact centered group -->
        <div
          v-else-if="!isFaq && variant === 'industry'"
          class="mx-auto grid w-full max-w-[1050px] grid-cols-1 gap-[10px] min-[480px]:grid-cols-2 lg:grid-cols-4"
        >
          <GenericCard
            v-for="(card, index) in cards"
            :key="card.id ?? index"
            v-bind="card"
            variant="industry"
            :card-bg-color="card.cardBgColor || 'bg-[#d4dee2]'"
          />
        </div>

        <!-- FAQ accordion -->
        <div
          v-else
          class="mx-auto max-w-[1000px] overflow-hidden rounded-[5px] px-4 sm:px-6"
        >
          <GenericFaqItem
            v-for="(item, index) in faqData"
            :key="index"
            :number="index + 1"
            :question="item.question"
            :answer="item.answer"
            :is-open="openFaqIndex === index"
            @toggle="toggleFaq(index)"
          />
        </div>

        <!-- Existing footer link behavior -->
        <div
          v-if="footerLink"
          :class="[
            'text-center',
            variant === 'industry' ? 'mt-9' : 'mt-10'
          ]"
        >
          <p
            v-if="!isFaq"
            class="text-[16px] leading-relaxed text-[#555] sm:text-[20px]"
          >
            Find out more about
            <NuxtLink
              :to="footerLink.to"
              class="text-[#12358e] underline underline-offset-2 transition-colors hover:text-[#bd3023]"
            >
              {{ footerLink.text }}
            </NuxtLink>
          </p>

          <NuxtLink
            v-else
            :to="footerLink.to"
            class="inline-flex items-center justify-center rounded-full bg-[#bd3023] px-6 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-[#12358e] sm:text-sm"
          >
            {{ footerLink.text }}
          </NuxtLink>
        </div>
      </template>
    </AppContainer>
  </section>
</template>