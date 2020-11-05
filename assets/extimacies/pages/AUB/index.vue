<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexA">
    <div
      style="height: 90%"
      class="absolute w-full -mt-12 overflow-y-scroll font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-lg sm:text-2xl"
      >
        <div class="w-10/12 mt-10 ml-16 sm:w-8/12">
          <h1 class="mt-5 mb-5 text-xl font-bold leading-tight sm:text-4xl">
            The American University
            <br />in Beirut
          </h1>

          <div class="block sm:hidden">
            <p class="mb-5 mr-10 font-mono text-sm text-left text-copy-primary">
              The Beirut team is led by Nadia Bou Ali, Assistant Professor in
              the Department of Civilization Studies. In September 2019, AUC
              hosted a two-day international workshop on Critical Theory and
              Psychoanalysis. The scholars and psychoanalysts based around the
              world who participated in the workshop presented papers to be
              engaged by the conference participants. In an effort to make the
              scholarship more accessible and contribute to the global nature of
              the Extimacies project, a selection of these papers will be
              translated to Arabic by the translation team based at the American
              University in Cairo.
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
                v-if="people"
                class="flex flex-wrap items-start content-center justify-center"
              >
                <div
                  class="flex flex-row flex-wrap items-start content-start justify-start m-5 mb-10 font-mono"
                >
                  <div class="w-8/12 p-3 sm:w-4/12">
                    <div
                      @click="aubp1Acitve = !aubp1Acitve"
                      class="cursor-pointer people-aub"
                    >
                      <img
                        :data-src="`/Content/AUB/people/${aubp1.photo}`"
                        class="object-covr"
                        style="
                          -webkit-filter: grayscale(100%);
                          filter: grayscale(100%);
                        "
                        v-lazy-load
                      />
                    </div>

                    <p class="font-mono text-xl font-bold text-black">
                      {{ aubp1.name }}
                    </p>
                    <p class="font-mono text-base text-black">
                      {{ aubp1.role }}
                    </p>
                    <p class="font-mono text-sm text-black">
                      {{ aubp1.office }}
                    </p>
                    <p class="font-mono text-sm text-black">
                      {{ aubp1.email }}
                    </p>
                    <div :class="aubp1Acitve ? 'block' : 'hidden'">
                      <transition
                        name="expand"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @leave="leave"
                      >
                        <nuxt-content
                          v-if="aubp1Acitve"
                          class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                          :document="aubp1"
                        />
                      </transition>
                    </div>
                  </div>

                  <div class="w-8/12 p-3 sm:w-4/12">
                    <div @click="aubp2Acitve = !aubp2Acitve">
                      <div class="cursor-pointer people-aub">
                        <img
                          :data-src="`/Content/AUB/people/${aubp2.photo}`"
                          class="object-covr"
                          style="
                            -webkit-filter: grayscale(100%);
                            filter: grayscale(100%);
                          "
                          v-lazy-load
                        />
                      </div>
                    </div>

                    <p class="font-mono text-xl font-bold text-black">
                      {{ aubp2.name }}
                    </p>
                    <p class="font-mono text-base text-black">
                      {{ aubp2.role }}
                    </p>
                    <p class="font-mono text-sm text-black">
                      {{ aubp2.office }}
                    </p>
                    <p class="font-mono text-sm text-black">
                      {{ aubp2.email }}
                    </p>
                    <div :class="aubp2Acitve ? 'block' : 'hidden'">
                      <transition
                        name="expand"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @leave="leave"
                      >
                        <nuxt-content
                          v-if="aubp2Acitve"
                          class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                          :document="aubp2"
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

          <div :class="events ? 'block' : 'hidden'" class="p-2 mt-2">
            <transition
              name="expand"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="events" class="flex flex-col text-xl">
                <nuxt-link
                  to="AUB/events/colloquium"
                  class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
                >
                  <span class="ml-16">Colloquium</span>
                </nuxt-link>

                <nuxt-link
                  to="/AUB/events/workshops"
                  class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
                >
                  <span class="ml-16">Workshops</span>
                </nuxt-link>
              </div>
            </transition>
          </div>

          <nuxt-link to="/AUB/publications">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <nuxt-link to="/AUB/publications" class="ml-2 font-semibold"
                >Publications</nuxt-link
              >
            </div>
          </nuxt-link>

          <nuxt-link to="/AUB/initiatives">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <div class="ml-2 font-semibold">Initiatives</div>
            </div>
          </nuxt-link>

          <div
            @click="coursesS"
            class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
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
                  class="flex flex-col text-xl"
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
    const aubp1 = await $content('AUB/people/001').fetch()
    const aubp2 = await $content('AUB/people/002').fetch()

    const aubp = await $content('AUB/people').sortBy('slug').fetch()

    const aubCourses = await $content('AUB/courses').sortBy('slug').fetch()
    return { aubp, aubp1, aubp2, aubCourses }
  },

  data() {
    return {
      people: false,
      events: false,
      courses: false,
      activeItem: null,
      aubp1Acitve: false,
      aubp2Acitve: false,
    }
  },
  components: {},

  created() {
    this.$nextTick(() => {
      this.$forceUpdate()
    })
  },
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

    toggle() {
      this.isOpen = !this.isOpen
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

.slide-enter-active {
  transition: all 0.7s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
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

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
