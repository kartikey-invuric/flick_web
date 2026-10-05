<script setup>
const tests = [
  {
    title: 'Home',
    description: 'Homepage implementation.',
    path: '/home'
  }
]
</script>

<template>
  <main
    class="
      min-h-screen
      w-full
      bg-[#f5f5f5]
      px-[24px]
      py-[40px]
      text-[#111111]
      max-[600px]:px-[18px]
      max-[600px]:py-[28px]
    "
  >
    <div class="mx-auto w-full max-w-[1120px]">

      <!-- Page Heading -->
      <div class="mb-[26px]">
        <p
          class="
            mb-[6px]
            text-[11px]
            font-bold
            uppercase
            tracking-[1.6px]
            text-[#777777]
          "
        >
          Frontend Testing
        </p>

        <h1
          class="
            mb-[6px]
            text-[32px]
            font-extrabold
            tracking-[-1px]
            text-[#111111]
            max-[600px]:text-[27px]
          "
        >
          Test Pages
        </h1>

        <p
          class="
            max-w-[600px]
            text-[14px]
            leading-[1.5]
            text-[#666666]
          "
        >
          Select a test page to open and verify different frontend
          implementations.
        </p>
      </div>

      <!-- Test Cards -->
      <section
        class="
          grid
          grid-cols-2
          gap-[14px]
          max-[800px]:grid-cols-1
        "
      >
        <NuxtLink
          v-for="(test, index) in tests"
          :key="test.path"
          :to="test.path"
          class="
            group
            flex
            min-h-[205px]
            flex-col
            justify-between
            border
            border-[#dddddd]
            bg-white
            p-[20px]
            no-underline
            transition-all
            duration-200
            hover:border-[#b5b5b5]
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]
          "
        >
          <!-- Card Top -->
          <div>
            <div class="mb-[16px] flex items-center justify-between">
              <span
                class="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#3c3c3c]
                  px-[8px]
                  py-[5px]
                  text-[10px]
                  font-bold
                  tracking-[0.6px]
                  text-white
                "
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span
                class="
                  text-[11px]
                  font-medium
                  text-[#898989]
                "
              >
                {{ test.path }}
              </span>
            </div>

            <h2
              class="
                mb-[7px]
                text-[25px]
                font-bold
                tracking-[-0.3px]
                text-[#161616]
              "
            >
              {{ test.title }}
            </h2>

            <p
              class="
                max-w-[460px]
                text-[15px]
                leading-[1.5]
                text-[#6b6b6b]
              "
            >
              {{ test.description }}
            </p>
          </div>

          <!-- Open Button -->
          <div class="mt-[18px]">
            <span
              class="
                inline-flex
                items-center
                justify-center
                bg-[#6533c2]
                px-[10px]
                py-[5px]
                text-[15px]
                font-semibold
                uppercase
                tracking-[0.6px]
                text-white
                transition-colors
                duration-200
                group-hover:bg-[#2d2d2d]
              "
            >
              Open Test
            </span>
          </div>
        </NuxtLink>
      </section>

    </div>
  </main>
</template>