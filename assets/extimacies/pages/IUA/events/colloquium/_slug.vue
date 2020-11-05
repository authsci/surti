<template>
  <div class="max-h-screen overflow-y-auto boddIndexX">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div
          class="flex flex-col items-end content-center justify-start hidden w-2/12 mb-5 sm:block"
        ></div>

        <div class="w-full sm:w-9/12">
          <div
            class="flex flex-row items-center mb-5 ml-10 text-lg font-normal sm:ml-0 sm:text-lg"
          >
            <nuxt-link to="/IUA" class="">
              <span class="hover:font-bold">IUA</span>
            </nuxt-link>
            <p class="ml-2 cursor-default">/Events</p>
            <nuxt-link
              to="/IUA/events/colloquium"
              class="ml-2 font-bold cursor-pointer"
              >/Colloquium</nuxt-link
            >
          </div>
          <div class="relative flex flex-col items-start mt-16 align-top">
            <p
              class="absolute top-0 z-40 w-5/6 ml-10 text-3xl font-bold leading-tight -mt-7 sm:-mt-11 sm:ml-0 sm:text-5xl"
            >
              {{ aucColloquium.name }}
            </p>
            <img
              class="w-full"
              :data-src="`/Content/IUA/events/colloquium/${aucColloquium.cover}`"
              v-lazy-load
            />
          </div>
        </div>
        <div class="hidden w-1/12 sm:block"></div>
      </div>
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-0 text-3xl sm:items-end sm:mr-56"
      >
        <div class="w-10/12 mt-10 sm:w-7/12">
          <nuxt-content
            class="mt-5 font-mono text-base text-left"
            :document="aucColloquium"
          />
        </div>
      </div>
      <div v-if="$nuxt.$route.path === '/IUA/events/colloquium/002'">
        <iuacoll />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const aucColloquium = await $content(
      `IUA/events/colloquium/${params.slug}`
    ).fetch()
    const [prev, next] = await $content('IUA/events/colloquium')
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .surround(params.slug, { after: 1, before: 1 })
      .fetch()
    return { aucColloquium }
  },
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
