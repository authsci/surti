<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexX">
    <div
      style="height: 95%"
      class="absolute w-full -mt-12 overflow-y-scroll font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-lg sm:text-2xl"
      >
        <div class="w-11/12 mt-10 ml-10 sm:ml-16 sm:w-8/12">
          <h1 class="mt-5 mb-5 text-xl font-bold leading-tight sm:text-4xl">
            The American University
            <br />in Cairo
          </h1>

          <div class="block sm:hidden">
            <p class="mb-5 mr-10 font-mono text-sm text-left text-copy-primary">
              The Cairo team is led by Surti Singh, Assistant Professor of
              Philosophy and Principal Investigator. In September 2019, AUC
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
            id="peoplea"
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
                class="flex flex-wrap items-start content-start justify-start"
              >
                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp1Acitve = !aucp1Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp1.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp1.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp1.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp1.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp1.email }}
                  </p>
                  <div :class="aucp1Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp1Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp1"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp2Acitve = !aucp2Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp2.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp2.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp2.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp2.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp2.email }}
                  </p>
                  <div :class="aucp2Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp2Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp2"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp3Acitve = !aucp3Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp3.photo}`"
                      class="object-cover"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp3.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp3.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp3.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp3.email }}
                  </p>
                  <div :class="aucp3Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp3Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp3"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp4Acitve = !aucp4Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp4.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp4.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp4.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp4.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp4.email }}
                  </p>
                  <div :class="aucp4Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp4Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp4"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp5Acitve = !aucp5Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp5.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp5.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp5.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp5.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp5.email }}
                  </p>
                  <div :class="aucp5Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp5Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp5"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp6Acitve = !aucp6Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp6.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp6.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp6.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp6.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp6.email }}
                  </p>
                  <div :class="aucp6Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp6Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp6"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp7Acitve = !aucp7Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp7.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp7.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp7.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp7.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp7.email }}
                  </p>
                  <div :class="aucp7Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp7Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp7"
                      />
                    </transition>
                  </div>
                </div>

                <div class="w-8/12 p-3 sm:w-4/12">
                  <div
                    @click="aucp8Acitve = !aucp8Acitve"
                    class="cursor-pointer people-auc"
                  >
                    <img
                      :data-src="`/Content/AUC/people/${aucp8.photo}`"
                      class="object-covr"
                      style="
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);
                      "
                      v-lazy-load
                    />
                  </div>

                  <p class="font-mono text-xl font-bold text-black">
                    {{ aucp8.name }}
                  </p>
                  <p class="font-mono text-base text-black">
                    {{ aucp8.role }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp8.office }}
                  </p>
                  <p class="font-mono text-sm text-black">
                    {{ aucp8.email }}
                  </p>
                  <div :class="aucp8Acitve ? 'block' : 'hidden'">
                    <transition
                      name="expand"
                      @enter="enter"
                      @after-enter="afterEnter"
                      @leave="leave"
                    >
                      <nuxt-content
                        v-if="aucp8Acitve"
                        class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                        :document="aucp8"
                      />
                    </transition>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div
            id="eventsa"
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
            <div v-show="events" class="flex flex-col text-lg sm:text-2xl">
              <nuxt-link
                to="/AUC/events/colloquium"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Colloquium</span>
              </nuxt-link>

              <nuxt-link
                to="/AUC/events/filmseries"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Film Series</span>
              </nuxt-link>

              <nuxt-link
                to="/AUC/events/workshops"
                class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
              >
                <span class="ml-16">Workshop</span>
              </nuxt-link>
            </div>
          </transition>

          <nuxt-link to="/AUC/publications">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <nuxt-link to="/AUC/publications" class="ml-2 font-semibold"
                >Publications</nuxt-link
              >
            </div>
          </nuxt-link>

          <nuxt-link to="/AUC/initiatives">
            <div
              id="publicationa"
              class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
            >
              <div class="ml-2 font-semibold">Initiatives</div>
            </div>
          </nuxt-link>

          <div
            id="coursesa"
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
                  class="flex flex-col transition duration-700 ease-out ext-lg sm:text-2xl"
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
    const aucp1 = await $content('AUC/people/001').fetch()
    const aucp2 = await $content('AUC/people/002').fetch()
    const aucp3 = await $content('AUC/people/003').fetch()
    const aucp4 = await $content('AUC/people/004').fetch()
    const aucp5 = await $content('AUC/people/005').fetch()
    const aucp6 = await $content('AUC/people/006').fetch()
    const aucp7 = await $content('AUC/people/007').fetch()
    const aucp8 = await $content('AUC/people/008').fetch()

    const aubCourses = await $content('AUC/courses').sortBy('slug').fetch()
    return {
      aucp1,
      aucp2,
      aucp3,
      aucp4,
      aucp5,
      aucp6,
      aucp7,
      aucp8,
      aubCourses,
    }
  },
  data() {
    return {
      people: false,
      events: false,
      courses: false,
      aucp1Acitve: false,
      aucp2Acitve: false,
      aucp3Acitve: false,
      aucp4Acitve: false,
      aucp5Acitve: false,
      aucp6Acitve: false,
      aucp7Acitve: false,
      aucp8Acitve: false,
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

.margo-enter {
  padding: 10px;
}

.margo-leave-to {
  padding: 0px;
}

#myDIV {
  animation: mymove 0.5s;
}

@keyframes mymove {
  50% {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.margo-enter-active {
  transition: padding 0.5s;
}

.margo-leave-active {
  transition: padding 0.5s;
}

.expand-enter-active,
expand-leave-active {
  transition: height 0.5s ease-out;
  overflow: hidden;
}
</style>
