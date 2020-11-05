<template>
  <div class="h-screen overflow-y-auto boddIndex">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 -mt-4 text-3xl"
      >
        <div class="w-8/12 mt-32 sm:mt-10">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/AUC"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              AUC
            </nuxt-link>
            <p class="ml-2 text-lg font-bold cursor-default">/Initiatives</p>
          </div>
          <p class="mt-5 text-sm sm:text-base">
            In September 2019, AUC hosted a two-day international workshop on
            Critical Theory and Psychoanalysis. The scholars and psychoanalysts
            based around the world who participated in the workshop presented
            papers to be engaged by the conference participants. In an effort to
            make the scholarship more accessible and contribute to the global
            nature of the Extimacies project, a selection of these papers will
            be translated to Arabic by the translation team based at the
            American University in Cairo. Mae Safaan and Sherif Magdy, both
            graduate students in the Philosophy Department at AUC, are
            spearheading the Critical Theory & Psychoanalysis Translation
            Project and are working to present five of the conference papers in
            Arabic by summer 2020.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: false,
      events: false,
    }
  },
  components: {},
  methods: {
    peopleS() {
      this.people = !this.people
    },
    eventsS() {
      this.events = !this.events
    },
  },
  mounted() {},
}
</script>

<style>
.line {
  fill: none;
  stroke: #e6ebf1;
  --stroke-width: 1px;
  stroke-width: var(--stroke-width);
}
.curve {
  fill: none;
  stroke: #e6ebf1;
  stroke-width: 1px;
}
.arrow {
  stroke: #e6ebf1;
  stroke-width: 2;
}
</style>
