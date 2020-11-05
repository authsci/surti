<template>
  <div class="max-h-screen overflow-y-auto boddIndex">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div
          class="flex flex-col items-end content-center justify-start w-2/12 mb-5"
        ></div>
        <div class="w-9/12">
          <div class="flex flex-col">
            <div
              class="flex flex-row items-center mb-5 ml-10 text-lg font-normal sm:ml-0 sm:text-lg"
            >
              <nuxt-link to="/FUABC" class="">
                <span class="hover:font-bold">FUABC</span>
              </nuxt-link>
              <p class="ml-2 cursor-default">/Events</p>
              <nuxt-link
                to="/FUABC/events/workshops"
                class="ml-2 font-bold cursor-pointer"
                >/Workshops</nuxt-link
              >
            </div>
            <p class="z-40 -mb-16 text-5xl font-bold leading-tight">
              {{ aucColloquium.semester }}
            </p>
          </div>
          <div class="flex flex-row items-end mt-2">
            <img
              :data-src="`/Content/AUC/events/workshops/${aucColloquium.cover}`"
              alt
              v-lazy-load
            />
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div
        class="flex flex-col items-end content-end justify-end mb-5 mr-2 mr-56 text-3xl"
      >
        <div class="w-7/12 mt-10">
          <nuxt-content
            class="mt-5 font-mono text-base text-left"
            :document="aucColloquium"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const aucColloquium = await $content(
      `FUABC/events/workshops/${params.slug}`
    ).fetch()
    const [prev, next] = await $content('FUABC/events/workshops')
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
