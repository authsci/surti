<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexX">
    <div
      style="height: 90%"
      class="absolute w-full -mt-12 overflow-y-scroll font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-lg sm:text-2xl"
      >
        <div class="w-10/12 mt-10 ml-16 sm:w-8/12">
          <h1 class="mt-5 mb-5 text-xl font-bold leading-tight sm:text-4xl">
            The Federal University
            <br />of ABC
          </h1>

          <div class="block sm:hidden">
            <p class="mb-5 mr-10 font-mono text-sm text-left text-copy-primary">
              The Brazil team is led by Silvio Gomes Carneiro, Assistant
              Professor of Philosophy and Principal Investigator. In September
              2019, AUC hosted a two-day international workshop on Critical
              Theory and Psychoanalysis. The scholars and psychoanalysts based
              around the world who participated in the workshop presented papers
              to be engaged by the conference participants. In an effort to make
              the scholarship more accessible and contribute to the global
              nature of the Extimacies project, a selection of these papers will
              be translated to Arabic by the translation team based at the
              American University in Cairo.
            </p>
          </div>

          <div
            @click="peopleS"
            class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
          >
            <span class="ml-2 font-semibold">People</span>
          </div>

          <div id="peoplesection" class="transition duration-300 ease-linear">
            <transition
              name="expand"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div
                v-show="people"
                class="flex flex-wrap items-start content-center justify-center"
              >
                <div
                  class="flex flex-wrap items-start content-start justify-start m-5 mb-10 font-mono"
                >
                  <div
                    v-for="doc in docs"
                    :key="doc.slug"
                    class="w-8/12 p-3 sm:w-4/12"
                  >
                    <div
                      @click="docs2Acitve = !docs2Acitve"
                      class="cursor-pointer people-fuabc"
                    >
                      <img
                        :data-src="`/Content/FUABC/people/${doc.photo}`"
                        class="object-cover"
                        style="
                          -webkit-filter: grayscale(100%);
                          filter: grayscale(100%);
                        "
                        v-lazy-load
                      />
                    </div>

                    <p class="font-mono text-xl font-bold text-black">
                      {{ doc.name }}
                    </p>
                    <p class="font-mono text-base text-black">{{ doc.role }}</p>
                    <p class="font-mono text-sm text-black">{{ doc.office }}</p>
                    <p class="font-mono text-sm text-black">{{ doc.email }}</p>

                    <div>
                      <transition
                        name="expand"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @leave="leave"
                      >
                        <nuxt-content
                          v-if="docs2Acitve"
                          class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                          :document="doc"
                        />
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div
            @click="eventsS"
            class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
          >
            <span class="ml-2 font-semibold">Events</span>
          </div>

          <transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div v-show="events" class="flex flex-col">
              <nuxt-link
                to="/FUABC/events/colloquium"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Colloquium</span>
              </nuxt-link>
              <nuxt-link
                to="/FUABC/events/lectures"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Lectures</span>
              </nuxt-link>
              <!-- <nuxt-link
                to="/FUABC/events/workshops"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Workshop</span>
              </nuxt-link> -->
            </div>
          </transition>

          <nuxt-link to="/FUABC/publications">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <nuxt-link to="/FUABC/publications" class="ml-2 font-semibold"
                >Publications</nuxt-link
              >
            </div>
          </nuxt-link>

          <nuxt-link to="/FUABC/initiatives">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <nuxt-link to="/FUABC/Initiatives" class="ml-2 font-semibold"
                >Initiatives</nuxt-link
              >
            </div>
          </nuxt-link>

          <div
            id="coursesa"
            @click="coursesS"
            class="pr-5 font-semibold border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
          >
            <span class="ml-2 font-semibold">Courses</span>
          </div>

          <div id="coursesS" class="p-2 mt-2">
            <transition
              name="expand"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="courses">
                <div
                  v-for="aubCourse in aubCourses"
                  :key="aubCourse.slug"
                  class="flex flex-col text-base sm:text-xl"
                >
                  <nuxt-link
                    :to="aubCourse.path"
                    class="pl-16 font-mono text-black border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
                    >{{ aubCourse.name }}</nuxt-link
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content('FUABC/people').sortBy('slug').fetch()

    const aubCourses = await $content('FUABC/courses').sortBy('slug').fetch()
    return { docs, aubCourses }
  },

  data() {
    return {
      people: false,
      events: false,
      courses: false,
      docs2Acitve: false,
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
    coursesS() {
      this.courses = !this.courses
    },
    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    },
  },
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

.people-fuabc {
  background: rgba(209, 19, 15, 0);
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-fuabc > img {
  position: relative;
  width: 100%;
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-fuabc:hover {
  background: rgba(5, 59, 113, 0.5);
}
.people-fuabc:hover > img {
  z-index: -1;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrolly::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.scrolly {
  -ms-overflow-style: none;
}

.textv {
  writing-mode: tb-rl;
  transform: rotate(-180deg);
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
