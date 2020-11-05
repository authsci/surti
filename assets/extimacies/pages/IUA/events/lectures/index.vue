<template>
  <div class="max-h-screen overflow-y-auto boddIndexY">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div
            class="flex flex-row items-center text-lg font-normal sm:text-lg"
          >
            <nuxt-link to="/IUA" class="">
              <span class="hover:font-bold">IUA</span>
            </nuxt-link>
            <p class="ml-2 cursor-default">/Events</p>
            <p class="ml-2 font-bold cursor-default">/Lectures</p>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div
        class="flex flex-col items-center mb-5 text-3xl text-left sm:text-lg"
      >
        <div class="w-8/12 mt-10">
          <div class="mb-6 text-3xl">Lectures</div>

          <p class="text-sm">
            Consectetur veniam nulla et aliqua laboris culpa anim laboris
            cupidatat do est sit aliqua. Irure nulla id cupidatat irure ullamco
            sunt pariatur ea. Ipsum laboris mollit et incididunt anim anim ex ex
            culpa tempor commodo incididunt enim Lorem. Non voluptate in
            occaecat sint enim ipsum ullamco. Occaecat labore voluptate
            adipisicing enim minim culpa occaecat occaecat magna deserunt eu
            enim nostrud. Ea anim reprehenderit sit commodo ullamco esse eiusmod
            ut consequat proident. <br />
            <br />
            Esse ipsum sunt velit laborum nulla ad officia cillum sint. Sit
            irure laborum ipsum nisi irure ad Lorem occaecat ullamco. In quis
            ipsum nulla ullamco aliquip consequat nisi magna ea sunt sint dolor.
            Sunt sit et fugiat velit veniam excepteur. Fugiat aliquip qui
            reprehenderit est id consequat laboris cillum commodo proident
            nostrud esse. Esse reprehenderit proident dolore minim adipisicing
            nisi exercitation minim ipsum duis.
          </p>

          <div
            class="flex flex-wrap items-start content-center justify-start mt-5"
          >
            <div
              v-for="event in events"
              :key="event.slug"
              class="w-full mb-10 mr-5 sm:w-4/12"
            >
              <nuxt-link :to="event.path">
                <div class="people-iua">
                  <img
                    :data-src="`/Content/IUA/events/lectures/${event.thumbnail}`"
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
    const events = await $content('IUA/events/lectures').sortBy('slug').fetch()

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
</style>
