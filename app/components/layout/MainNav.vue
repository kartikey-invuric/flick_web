<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from '#imports'
import {
  Home,
  Building2,
  Shield,
  Bug,
  Droplets,
  Users,
  ChevronDown,
  Menu,
  X
} from 'lucide-vue-next'

const route = useRoute()

const navRef = ref(null)
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)

/*
 * Links point to real sections in this project.
 * Add dedicated routes later if you build individual service pages.
 */
const navItems = [
  {
    label: 'Residential',
    icon: Home,
    links: [
      { label: 'Home Protection Subscription Plans', to: '/#services' },
      { label: 'SMART Digital Rodent Monitoring', to: '/#services' },
      { label: 'Termite Protection for Homes', to: '/#top-pest-solutions' },
      { label: 'Get a Residential Quote', to: '/#hero-quote-form' }
    ]
  },
  {
    label: 'Commercial',
    icon: Building2,
    links: [
      { label: 'Commercial Pest Control', to: '/#industry' },
      { label: 'Pest Control for Your Industry', to: '/#industry' },
      { label: 'Commercial Washroom Hygiene', to: '/#services' },
      { label: 'Get a Commercial Quote', to: '/#hero-quote-form' }
    ]
  },
  {
    label: 'Termite Treatment',
    icon: Shield,
    links: [
      { label: 'Termite Solutions', to: '/#services' },
      { label: 'Termite Inspections', to: '/#hero-quote-form' },
      { label: 'Termite Protection', to: '/#top-pest-solutions' },
      { label: 'Book an Inspection', to: '/#hero-quote-form' }
    ]
  },
  {
    label: 'Pest Solutions',
    icon: Bug,
    links: [
      { label: 'Rodent Control', to: '/#top-pest-solutions' },
      { label: 'Cockroach Control', to: '/#top-pest-solutions' },
      { label: 'Bed Bug Control', to: '/#top-pest-solutions' },
      { label: 'Ant Control', to: '/#top-pest-solutions' },
      { label: 'Bird Control', to: '/#top-pest-solutions' }
    ]
  },
  {
    label: 'Washroom Hygiene',
    icon: Droplets,
    to: '/#services',
    links: []
  },
  {
    label: 'Join Us',
    icon: Users,
    links: [
      { label: 'About Flick', to: '/#leaders' },
      { label: 'Our Services', to: '/#services' },
      { label: 'Contact Our Team', to: '/#hero-quote-form' }
    ]
  }
]

const toggleDropdown = (label) => {
  activeDropdown.value = activeDropdown.value === label ? null : label
}

const closeAll = () => {
  activeDropdown.value = null
  mobileMenuOpen.value = false
}

const handleOutsideClick = (event) => {
  if (navRef.value && !navRef.value.contains(event.target)) {
    closeAll()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeAll()
}

watch(
  () => route.fullPath,
  () => closeAll()
)

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
  <nav
    ref="navRef"
    aria-label="Main navigation"
    class="relative z-40 border-t border-[#f5f5f5] bg-gradient-to-b from-white to-[#f5f5f5]"
  >
    <!-- Mobile menu toggle -->
    <div class="mx-auto flex max-w-[1150px] justify-end px-4 md:hidden">
      <button
        type="button"
        class="flex min-h-[48px] items-center gap-2 text-[12px] font-bold uppercase text-[#12358e]"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-main-navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <X
          v-if="mobileMenuOpen"
          class="size-5"
          aria-hidden="true"
        />
        <Menu
          v-else
          class="size-5"
          aria-hidden="true"
        />
        Menu
      </button>
    </div>

    <!-- Desktop navigation -->
    <div class="mx-auto hidden w-full max-w-[1300px] px-4 sm:px-5 md:block">
      <ul class="flex min-h-[49px] items-stretch justify-between gap-1">
        <li
          v-for="item in navItems"
          :key="item.label"
          class="relative flex min-w-0"
        >
          <!-- Dropdown trigger -->
          <button
            v-if="item.links.length"
            type="button"
            :aria-expanded="activeDropdown === item.label"
            :aria-controls="`desktop-menu-${item.label.replace(/\s+/g, '-').toLowerCase()}`"
            :class="[
              'group flex h-full items-center gap-2 whitespace-nowrap rounded-t-[5px] px-2.5 text-[10px] font-bold uppercase transition-colors lg:px-3 lg:text-[12.5px]',
              activeDropdown === item.label
                ? 'bg-[#f2f2f2] text-[#12358e] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]'
                : 'text-[#c23124] hover:bg-[#f5f5f5] hover:text-[#12358e]'
            ]"
            @click="toggleDropdown(item.label)"
          >
            <component
              :is="item.icon"
              class="size-[19px] shrink-0 lg:size-[25px]"
              :stroke-width="1.35"
              aria-hidden="true"
            />

            <span>{{ item.label }}</span>

            <ChevronDown
              class="size-[13px] shrink-0 transition-transform"
              :class="activeDropdown === item.label ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </button>

          <!-- Direct navigation item -->
          <NuxtLink
            v-else
            :to="item.to"
            class="group flex h-full items-center gap-2 whitespace-nowrap rounded-t-[5px] px-2.5 text-[10px] font-bold uppercase text-[#c23124] transition-colors hover:bg-[#f5f5f5] hover:text-[#12358e] lg:px-3 lg:text-[11px]"
            @click="closeAll"
          >
            <component
              :is="item.icon"
              class="size-[19px] shrink-0 lg:size-[21px]"
              :stroke-width="1.35"
              aria-hidden="true"
            />

            <span>{{ item.label }}</span>
          </NuxtLink>

          <!-- Click-open desktop dropdown -->
          <div
            v-if="item.links.length && activeDropdown === item.label"
            :id="`desktop-menu-${item.label.replace(/\s+/g, '-').toLowerCase()}`"
            class="absolute left-0 top-full z-50 w-[215px] bg-[#f2f2f2] py-1 shadow-[0_8px_16px_rgba(0,0,0,0.17)]"
          >
            <NuxtLink
              v-for="link in item.links"
              :key="`${item.label}-${link.label}`"
              :to="link.to"
              class="block border-b border-[#e8e8e8] px-3 py-2.5 text-[11px] font-normal leading-[1.25] text-[#c23124] transition-colors last:border-b-0 hover:bg-white hover:text-[#12358e]"
              @click="closeAll"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>

    <!-- Mobile navigation and expandable submenus -->
    <div
      v-if="mobileMenuOpen"
      id="mobile-main-navigation"
      class="border-t border-[#e8e8e8] bg-white px-4 pb-3 shadow-md md:hidden"
    >
      <ul class="mx-auto max-w-[600px]">
        <li
          v-for="item in navItems"
          :key="`mobile-${item.label}`"
          class="border-b border-[#ededed]"
        >
          <button
            v-if="item.links.length"
            type="button"
            class="flex min-h-[49px] w-full items-center gap-3 text-left text-[12px] font-bold uppercase text-[#c23124]"
            :aria-expanded="activeDropdown === item.label"
            @click="toggleDropdown(item.label)"
          >
            <component
              :is="item.icon"
              class="size-5 shrink-0"
              :stroke-width="1.5"
              aria-hidden="true"
            />

            <span class="flex-1">{{ item.label }}</span>

            <ChevronDown
              class="size-4 transition-transform"
              :class="activeDropdown === item.label ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </button>

          <NuxtLink
            v-else
            :to="item.to"
            class="flex min-h-[49px] items-center gap-3 text-[12px] font-bold uppercase text-[#c23124]"
            @click="closeAll"
          >
            <component
              :is="item.icon"
              class="size-5 shrink-0"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            {{ item.label }}
          </NuxtLink>

          <div
            v-if="item.links.length && activeDropdown === item.label"
            class="mb-2 bg-[#f5f5f5] py-1"
          >
            <NuxtLink
              v-for="link in item.links"
              :key="`mobile-${item.label}-${link.label}`"
              :to="link.to"
              class="block border-b border-white px-4 py-3 text-[12px] text-[#c23124] last:border-0 hover:bg-[#ececec]"
              @click="closeAll"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>