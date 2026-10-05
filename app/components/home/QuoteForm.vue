```vue
<!-- app/components/home/QuoteForm.vue -->

<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  postcode: '',
  service: '',
  message: ''
})
</script>

<template>
  <form
    class="w-full max-w-[400px] overflow-hidden border border-[#fff] border-3 shadow-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
    @submit.prevent
  >
    <!-- Red header with inset white border -->
    <div class="bg-[#bd3023] px-[16px] py-[15px]">
      <div
        class="flex min-h-[65px] flex-col items-center justify-center rounded-[8px] border-2 border-white px-2 py-[6px] text-center text-white"
      >
        <h2
          class="text-[20px] font-extrabold uppercase leading-[22px] tracking-[1.1px]"
        >
          Get Your Free Quote*
        </h2>

        <p class="mt-[2px] text-[9px] leading-[12px]">
          *Available for most services, call for details.
        </p>

        <a
          href="tel:1300655157"
          class="mt-[2px] text-[12px] font-bold leading-[15px] hover:underline"
        >
          Call us now 1300 655 157
        </a>
      </div>
    </div>

    <!-- Form fields -->
    <div
      class="grid grid-cols-2 gap-x-8 gap-y-[12px] px-[17px] pb-[42px] pt-[15px]"
    >
      <!-- First name -->
      <div class="min-w-0">
        <label
          for="quote-first-name"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          First Name
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <input
          id="quote-first-name"
          v-model="form.firstName"
          name="firstName"
          type="text"
          autocomplete="given-name"
          required
          placeholder="First Name"
          class="h-[38px] w-full rounded-[10px] border border-[#e5e5e5] bg-white px-[7px] text-[11px] text-[#333] outline-none transition-colors placeholder:text-[#888] focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
        />
      </div>

      <!-- Last name -->
      <div class="min-w-0">
        <label
          for="quote-last-name"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Last Name
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <input
          id="quote-last-name"
          v-model="form.lastName"
          name="lastName"
          type="text"
          autocomplete="family-name"
          required
          placeholder="Last Name"
          class="h-[38px] w-full rounded-[10px] border border-[#e5e5e5] bg-white px-[7px] text-[11px] text-[#333] outline-none transition-colors placeholder:text-[#888] focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
        />
      </div>

      <!-- Email -->
      <div class="min-w-0">
        <label
          for="quote-email"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Email
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <input
          id="quote-email"
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          placeholder="Email"
          class="h-[38px] w-full rounded-[10px] border border-[#e5e5e5] bg-white px-[7px] text-[11px] text-[#333] outline-none transition-colors placeholder:text-[#888] focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
        />
      </div>

      <!-- Mobile phone with Australian prefix -->
      <div class="min-w-0">
        <label
          for="quote-mobile"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Mobile Phone
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <div
          class="flex h-[38px] items-center rounded-[10px] border border-[#e5e5e5] bg-white focus-within:border-[#bd3023] focus-within:ring-1 focus-within:ring-[#bd3023]"
        >
          <span
            class="shrink-0 pl-[7px] text-[12px]"
            aria-hidden="true"
          >
            🇦🇺
          </span>

          <svg
            class="ml-[4px] size-[10px] shrink-0 text-[#777]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="m5 7 5 5 5-5H5Z" />
          </svg>

          <input
            id="quote-mobile"
            v-model="form.mobile"
            name="mobile"
            type="tel"
            inputmode="tel"
            autocomplete="tel"
            required
            placeholder="Mobile Phone"
            class="h-full min-w-0 flex-1 bg-transparent pl-[7px] pr-[5px] text-[11px] text-[#333] outline-none placeholder:text-[#888]"
          />
        </div>
      </div>

      <!-- Post code -->
      <div class="min-w-0">
        <label
          for="quote-postcode"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Post Code
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <input
          id="quote-postcode"
          v-model="form.postcode"
          name="postcode"
          type="text"
          inputmode="numeric"
          autocomplete="postal-code"
          required
          placeholder="Post Code"
          class="h-[38px] w-full rounded-[10px] border border-[#e5e5e5] bg-white px-[7px] text-[11px] text-[#333] outline-none transition-colors placeholder:text-[#888] focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
        />
      </div>

      <!-- Service type -->
      <div class="min-w-0">
        <label
          for="quote-service"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Service Type
          <span class="font-semibold text-[#d43d27]">*</span>
        </label>

        <div class="relative">
          <select
            id="quote-service"
            v-model="form.service"
            name="service"
            required
            class="h-[38px] w-full appearance-none rounded-[10px] border border-[#e5e5e5] bg-white pl-[7px] pr-[24px] text-[11px] text-[#333] outline-none transition-colors focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
          >
            <option
              value=""
              disabled
            >
              Service Type
            </option>

            <option value="termite">
              Termite Solutions
            </option>

            <option value="pest">
              Pest Control
            </option>

            <option value="inspection">
              Inspection
            </option>

            <option value="other">
              Other
            </option>
          </select>

          <svg
            class="pointer-events-none absolute right-[8px] top-1/2 size-[12px] -translate-y-1/2 text-[#777]"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m4 7 6 6 6-6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>

      <!-- Message -->
      <div class="col-span-2 min-w-0">
        <label
          for="quote-message"
          class="mb-[4px] block text-[12px] text-[#3d3d3d]"
        >
          Tell us about your home, office, workplace
        </label>

        <textarea
          id="quote-message"
          v-model="form.message"
          name="message"
          rows="3"
          placeholder="Tell us about your pest issues, home, office, workplace"
          class="block min-h-[63px] w-full rounded-[10px] border border-[#e5e5e5] bg-white px-[7px] py-[10px] text-[11px] text-[#333] outline-none transition-colors placeholder:text-[#888] focus:border-[#bd3023] focus:ring-1 focus:ring-[#bd3023]"
        />
      </div>

      <!-- Submit button -->
      <div class="col-span-2 mt-[5px]">
        <button
          type="submit"
          class="flex h-[34px] w-full items-center justify-center rounded-[3px] bg-[#bd3023] text-[14px] font-bold text-white transition-colors hover:bg-[#a9291e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd3023]"
        >
          Get Quote
        </button>
      </div>
    </div>
  </form>
</template>
```
