<template>
  <div class="max-h-screen overflow-y-auto boddIndexY">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div class="flex flex-col">
            <div
              class="flex flex-row items-center text-lg font-normal sm:text-lg"
            >
              <nuxt-link to="/AUC" class="">
                <span class="hover:font-bold">AUC</span>
              </nuxt-link>
              <p class="ml-2 cursor-default">/Events</p>
              <p class="ml-2 font-bold cursor-default">/Colloquium</p>
            </div>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-col items-center mb-5 text-3xl text-left">
        <div class="w-8/12 mt-10">
          <div class="mb-6 text-xl font-bold sm:text-2xl">Colloquium</div>

          <p class="text-sm sm:text-base">
            The bi-monthly, semester or quarter long colloquium, runs
            concurrently at all of the institutions and is convened by the
            investigators. The purpose of the colloquium is to foster a space to
            engage with current scholarship in an interdisciplinary setting, to
            create an intellectual community, and to develop comparative and
            critical pedagogical approaches unconstrained by particular
            departments or the traditional geographical and methodological
            boundaries between north and south. It provides a platform to
            facilitate close readings and discussion of primary texts. While
            each investigator chooses their own schedule of readings, all
            colloquiua have some texts in common and work with a common theme.
            The colloquiua are public, involving faculty, students and
            individuals from the greater community.
          </p>
          <div
            class="flex flex-wrap items-start content-start justify-start mt-10"
          >
            <div
              v-for="event in events"
              :key="event.slug"
              class="mb-10 mr-5 sm:w-4/12"
            >
              <nuxt-link :to="event.path">
                <div class="people-auc">
                  <img
                    :data-src="`/Content/AUC/events/colloquium/${event.thumbnail}`"
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
    const events = await $content('AUC/events/colloquium')
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

.people-auc {
  background: rgba(209, 19, 15, 0);
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-auc > img {
  position: relative;
  width: 100%;
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-auc:hover {
  background: rgba(225, 175, 25, 0.5);
}
.people-auc:hover > img {
  z-index: -1;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
}
</style>
