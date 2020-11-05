<template>
  <div class="h-screen overflow-y-auto boddIndex">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-3xl"
      >
        <div class="w-8/12 mt-32 sm:mt-10">
          <div class="flex items-center flex-row">
            <nuxt-link
              to="/AUB"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              AUB
            </nuxt-link>
            <p class="ml-2 text-lg cursor-default font-bold">/Courses</p>
          </div>
          <p class="mt-12 text-lg font-bold sm:text-2xl">
            {{ aubCourse.name }}
          </p>
          <p class="mt-5 text-lg font-bold">{{ aubCourse.lecturer }}</p>
          <nuxt-content class="mt-5 text-base" :document="aubCourse" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const aubCourse = await $content(`AUB/courses/${params.slug}`).fetch()
    const [prev, next] = await $content('AUC/courses')
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .surround(params.slug, { after: 1, before: 1 })
      .fetch()
    return { aubCourse }
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
