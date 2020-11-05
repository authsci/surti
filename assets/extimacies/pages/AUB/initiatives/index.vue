<template>
  <div class="h-screen overflow-y-auto boddIndexA">
    <div id="main" class="absolute w-full -mt-12 font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 -mt-4 text-3xl"
      >
        <div class="w-8/12 mt-16 sm:mt-10">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/AUB"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              AUB
            </nuxt-link>
            <p class="ml-2 text-lg font-bold cursor-default">/Initiatives</p>
          </div>

          <p class="mt-5 mb-10 text-2xl font-bold sm:text-3xl">
            Launching “Naqḍ” Research Project
          </p>
          <p class="mt-5 text-sm sm:text-base">
            Under the Early Career Grant from the Andrew Mellon Foundation
            “Extimacies: Critical Theory from the Global South” headed by Dr.
            Nadia Bou Ali at the American University of Beirut, we are launching
            “Naqḍ” research project coordinated by Abdallah El Ayache. Naqḍ in
            Arabic means at once critique, negation, and caesura. Naqḍ as a
            research project seeks to establish a field of discourse that
            addresses the contradictions at the heart of social structures and
            history.
          </p>
          <p class="mt-5 text-sm sm:text-base">
            The project aims at compiling a database of texts dealing with
            Critical Theory in the Arabic language. This database, which will be
            made available online, will focus primarily on works covering
            Critical Theory, Historical Materialism, and Psychoanalysis. The
            database will comprise translations of works from the critical
            theoretical corpus and original contributions by Arabic speaking
            scholars and thinkers in the twentieth and twenty-first centuries.
            This research project aims to create at a preliminary stage a source
            for researchers and scholars interested in Critical Theory in the
            Arabic speaking world. At a later stage, the project will evolve
            into a mapping of concept formations which will allow for an
            understanding of the scope and range of critical theoretical
            interests at different historical moments of the past century in
            Arabic.
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
