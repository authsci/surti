<template>
  <div class="max-h-screen overflow-y-auto boddIndexZ">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div
            class="flex flex-row items-center text-lg font-normal sm:text-lg"
          >
            <nuxt-link to="/AUB" class="">
              <span class="hover:font-bold">AUB</span>
            </nuxt-link>
            <p class="ml-2 cursor-default">/Events</p>
            <p class="ml-2 font-bold cursor-default">/Workshops</p>
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

          <div
            class="flex flex-wrap items-start content-start justify-start mt-10"
          >
            <div
              v-for="event in events"
              :key="event.slug"
              class="mb-10 mr-10 sm:w-3/12"
            >
              <nuxt-link :to="event.path">
                <div class="people-aub">
                  <img
                    :data-src="`/Content/AUB/events/workshops/${event.thumbnail}`"
                    class="object-cover"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>
                <p class="mt-2 font-mono text-lg font-bold text-black">
                  {{ event.semester }}
                </p>

                <p class="font-mono text-base text-black">{{ event.name }}</p>
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
    const events = await $content('AUB/events/workshops').sortBy('slug').fetch()

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

.people-aub {
  background: rgba(209, 19, 15, 0);
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-aub > img {
  position: relative;
  width: 100%;
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-aub:hover {
  background: rgba(42, 253, 130, 0.35);
}
.people-aub:hover > img {
  z-index: -1;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
}
</style>
