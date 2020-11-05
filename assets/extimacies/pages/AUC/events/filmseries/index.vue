<template>
  <div class="max-h-screen overflow-y-auto boddIndexA">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div
            class="flex flex-row items-center text-lg font-normal sm:text-lg"
          >
            <nuxt-link to="/AUC" class="">
              <span class="hover:font-bold">AUC</span>
            </nuxt-link>
            <p class="ml-2 cursor-default">/Events</p>
            <p class="ml-2 font-bold cursor-default">/Film Series</p>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-col items-center mb-5 text-3xl text-left">
        <div class="w-8/12 mt-10">
          <div class="mb-6 text-xl font-bold sm:text-2xl">Film Series</div>

          <p class="text-sm sm:text-base">
            This film series, curated by Surti Singh, Department of Philosophy,
            and Sami Khatib, Department of the Arts, took place in conjunction
            with Surti Singh's Spring 2020 graduate course, Philosophy and Film:
            Time and Memory in Cinema. The programming, with its focus on
            avant-garde cinema, attracted current students, alumni, faculty, and
            a public audience interested in taking up the films in an
            intellectual, informed context. The series was co-sponsored by
            Extimacies and the Tahrir Cultural Center.
          </p>
          <p class="mt-5 text-sm sm:text-base">
            Before the series’ premature ending, two screenings took place in
            the Armenian Room of the AUC Tahrir Campus. The first film, Last
            Year in Marienbad (1961), was shown on February 11, 2020 and the
            second film The Exterminating Angel (1962) was shown on February 25,
            2020.
          </p>

          <p class="mt-5 text-sm sm:text-base">
            The screenings were open and widely advertised to the public, and
            the successful attendance for both screenings would not have been
            possible without the collaboration with TCC. Each screening was
            followed by a discussion, moderated by profs Singh and Khatib, and
            participants engaged the films’ thematic elements and questions of
            temporality.
          </p>

          <div
            class="flex flex-wrap items-start content-start justify-start mt-10"
          >
            <div
              v-for="event in events"
              :key="event.slug"
              class="w-full mb-10 mr-5 sm:w-4/12"
            >
              <nuxt-link :to="event.path">
                <div class="people-auc">
                  <img
                    :data-src="`/Content/AUC/events/filmseries/${event.thumbnail}`"
                    class="object-cover"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>
                <p class="mt-2 font-mono text-lg font-bold text-black">
                  {{ event.name }}
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const events = await $content('AUC/events/filmseries')
      .sortBy('slug')
      .fetch()

    return {
      events,
    }
  },
  data() {
    return {
      people: false,
      events: false,
    }
  },
  methods: {},
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
