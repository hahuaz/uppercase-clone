<template>
  <div>
    <div class="testimonials tw-py-32 sm:tw-py-56">
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <div class="tw-container tw-mx-auto">
          <div class="tw-p-4 tw-space-y-36 tw-text-center">
            <h1 class="tw-text-5xl sm:tw-text-7xl">CASE STUDIES</h1>
            <div class="tw-grid sm:tw-grid-cols-2">
              <div class="tw-col-start-2 tw-text-right tw-space-y-8">
                <h1 class="tw-text-4xl sm:tw-text-7xl">
                  UPPERCASE CRO CASE STUDY
                </h1>
                <h1 class="tw-text-3xl tw-font-bold">
                  Port x Polish achieves 259% increase in revenue in 3 months
                </h1>

                <pre class="tw-text-xl tw-whitespace-pre-wrap tw-font-varela">
<span class="tw-font-bold tw-underline">PROBLEM</span>: Port x Polish ran their e-commerce site on SquareSpace with some success but were attaining below average web conversion rates. After receiving some very positive PR and utilizing SEO they started to see a sharp increase in traffic, but also started getting complaints on the speed of their e-commerce store.

<span class="tw-font-bold  tw-underline">SOLUTION</span>: Uppercase completed a full store redesign, as well as investigated options to improve Port x Polish’s page speed and simplify their user flow to dramatically boost user experience.

<span class="tw-font-bold  tw-underline">RESULTS</span>: The new design dramatically enhanced the user experience and increased revenue by 2.59X in three months. Two main fundamentals contributed to this improvement: a more user friendly experience with an easier to understand flow, and optimized web elements with slower scripts removed. While user experience increased conversion rate, the optimization process also decreased the bounce rate significantly. This lower bounce rate produced higher session numbers with no extra effort, which further improved the revenue numbers.
                </pre>
              </div>
            </div>
            <div class="tw-space-y-8">
              <p class="tw-text-xl tw-max-w-md tw-mx-auto">
                Our passion his helping business owners like you. We would love
                to learn more about your business, and offer advice to help you
                grow!
              </p>
              <v-btn
                outlined
                x-large
                color="blue-aqua"
                class="
                  tw-font-black
                  tw-font-sans
                  tw-text-xl
                  tw-border-2
                  tw-rounded-md
                  tw-p-4
                  sm:tw-p-8
                "
              >
                Contact Us</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped>
.testimonials {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>
