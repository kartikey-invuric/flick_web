<script setup>
const pestSolutions = [
  {
    id: 1,
    option: 'Termite Control',
    title: 'TERMITE PEST CONTROL',
    description:
      'The silent destroyers, termites can be one of the most devastating pests to discover in your home or business. These insidious insects chew through wood 24/7, often causing extensive structural damage long before you even realize they’re there. While they work out of sight, their impact can be truly heartbreaking to homeowners and financially crippling for businesses. A DIY approach to termites is almost always a losing battle; you need a professional who understands their complex colonies and destructive habits. Our termite control solutions are meticulously designed to locate, eliminate, and protect your residential or commercial property from these relentless invaders, giving you back your peace of mind and preserving your property’s integrity.Learn Moreabout Termites'
  },
  {
    id: 2,
    option: 'Rodent Control',
    title: 'RODENT PEST CONTROL',
    description:
      "There’s something uniquely unsettling about sharing your space with rodents. Whether it’s your home or your commercial establishment, these aren’t just a nuisance; they’re clever, adaptable, and carry a host of diseases, not to mention their penchant for chewing through wires and walls. From the scurry in the roof to the gnaw marks in your pantry, their presence can make your skin crawl and your property feel less safe. Trying to tackle a rodent problem on your own often leads to frustration and a never-ending cycle. Our comprehensive rodent control services go beyond just traps; we identify their secret entry points, employ proven eradication methods, and provide expert advice to seal up your home or business and keep these unwelcome guests out for good."
  },
  {
    id: 3,
    option: 'Cockroach Control',
    title: 'COCKROACH PEST CONTROL',
    description:
      'Cockroaches can contaminate food, spread bacteria and trigger allergies. Our professional cockroach control treatments target both visible pests and hidden infestations, helping eliminate cockroaches and prevent them from returning.'
  },
  {
    id: 4,
    option: 'Bed Bug Control',
    title: 'BED BUG PEST CONTROL',
    description:
      'Bed bugs can turn a good night’s sleep into a nightmare. Our bed bug control services combine thorough inspections with targeted treatments to eliminate infestations and help you reclaim your home.'
  },
  {
    id: 5,
    option: 'Ant Control',
    title: 'ANT PEST CONTROL',
    description:
      'Ants can quickly become a persistent problem around your home or business. We identify the species, locate their nests and use targeted treatments to control colonies and help prevent future infestations.'
  },
  {
    id: 6,
    option: 'Bird Control',
    title: 'BIRD PEST CONTROL',
    description:
      'Birds nesting on your property can create mess, damage and hygiene concerns. Our humane bird control solutions use effective deterrents and exclusion methods to help protect your property.'
  }
]

// Screenshot .
const activeIndex = ref(1)
const activeSolution = computed(() => pestSolutions[activeIndex.value])
</script>

<template>
  <section class="overflow-hidden bg-[#12318b] text-white">
    <div class="relative mx-auto max-w-[1240px] px-5 pb-12 pt-10 sm:px-8 lg:px-0 lg:pb-12 lg:pt-11">
      <!-- Heading -->
      <div class="relative z-10 text-center">
        <h2 class="text-[28px] font-normal leading-tight sm:text-[34px]">
          Top Pest Solutions
        </h2>

        <p
          class="mx-auto mt-2 max-w-[950px] text-[12px] leading-[18px] text-white sm:mt-8"
        >
          Across Australia, the most common pests such as
          <span class="underline">ants, spiders, cockroaches, rodents and termites</span>
          can cause structural damage, spread bacteria, or disrupt your home's
          comfort. Flick's targeted treatments eliminate pests quickly and help
          prevent future infestations with ongoing monitoring and year-round
          home protection.
        </p>
      </div>

      <!-- Tabs + blue content panel -->
      <div
        class="relative z-10 mt-5 mx-10 flex flex-col lg:mr-[90px] lg:min-h-[302px] lg:flex-row"
      >
        <!-- Left tabs -->
        <div class="relative z-20 flex shrink-0 flex-col lg:w-[285px]">
          <button
            v-for="(solution, index) in pestSolutions"
            :key="solution.id"
            type="button"
            :aria-pressed="activeIndex === index"
            :class="[
              'flex min-h-[50px] w-full items-center border-b border-[#12318b] px-2 py-3 text-left text-[16px] font-[750] transition-colors duration-200 lg:px-2',
              activeIndex === index
                ? 'bg-[#173895] text-white'
                : 'bg-[#fafafa] text-[#12318b] hover:bg-[#e8edff]'
            ]"
            @click="activeIndex = index"
          >
            {{ solution.option }}
          </button>
        </div>

        <!-- Content:  -->
        <div
          class="relative min-w-0 flex-1 bg-[#173895] px-5 py-7 sm:px-8 lg:min-h-[302px] lg:py-[22px] lg:pl-[33px] lg:pr-[265px]"
        >
          <div class="relative z-10 lg:w-[530px] lg:max-w-full">
            <h3
              class="text-[22px] font-bold leading-tight sm:text-[25px]"
            >
              {{ activeSolution.title }}
            </h3>

            <p
              class="mt-3 text-[12px] leading-[17px] text-white sm:text-[12.5px] sm:leading-[17.5px]"
            >
              {{ activeSolution.description }}
            </p>

            <button
              type="button"
              class="mt-5 inline-flex min-h-[34px] items-center justify-center rounded-full bg-[#25ad72] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-[#1d965f]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

     
      <img
        src="https://www.flick.com.au/wp-content/uploads/pest-service-man-cutout-fs8.png"
        alt="Flick Pest Control technician"
        class="pointer-events-none absolute bottom-[-5px] right-[-120px] z-20 hidden h-[500px] w-auto max-w-none object-contain lg:block"
      />
    </div>
  </section>
</template>