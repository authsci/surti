<template>
  <div class="h-screen overflow-y-auto boddIndexZ">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div class="flex flex-col">
            <div
              class="flex flex-row items-center text-lg font-normal sm:text-lg"
            >
              <nuxt-link to="/FUABC" class="">
                <span class="hover:font-bold">FUABC</span>
              </nuxt-link>
              <p class="ml-2 cursor-default">/Events</p>
              <p class="ml-2 font-bold cursor-default">/Workshops</p>
            </div>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-col items-center mb-5 text-3xl text-left">
        <div class="w-8/12 mt-10">
          <div class="mb-6">Workshops</div>

          <p class="text-sm sm:text-base">
            At the core of the project is a series of four thematically linked
            international workshops. Each workshop is convened by one of the
            investigators at their home institution, and to which the other
            investigators travel to work collaboratively. The investigators will
            meet in the designated city and spend an intensive three days
            discussing the outcomes of the semester’s colloquium, the
            methodological and theoretical issues arising from the work under
            consideration, and leading discussion around primary texts. The
            workshop will also include invited speakers and paper presentations
            to a public audience.
          </p>
        </div>
      </div>
      <!-- <div class="flex flex-wrap items-center content-center justify-center">
        <div
          v-for="event in events"
          :key="event.slug"
          class="w-3/12 mb-10 mr-5"
        >
          <nuxt-link :to="event.path">
            <img
              :src="`/Content/FUABC/events/workshops/${event.thumbnail}`"
              class="object-cover"
              style="-webkit-filter: grayscale(100%); filter: grayscale(100%)"
            />
            <p class="mt-2 font-mono text-lg font-bold text-black">
              {{ event.semester }}
            </p>

            <p class="font-mono text-base text-black">{{ event.name }}</p>
          </nuxt-link>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const events = await $content('FUABC/events/workshops')
      .sortBy('slug')
      .fetch()

    return {
      events,
    }
  },
  data() {
    return {}
  },
  components: {},
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
