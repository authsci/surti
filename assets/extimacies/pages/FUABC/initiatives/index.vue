<template>
  <div class="h-screen overflow-y-auto boddIndexX">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-3xl"
      >
        <div class="w-8/12 mt-2">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/FUABC"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              FUABC
            </nuxt-link>
            <p class="ml-2 text-lg font-bold cursor-default">/Initiatives</p>
          </div>
          <p class="mt-5 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex natus
            doloremque repellat dolore modi quod sed, rerum repellendus
            doloribus laborum, unde, cum itaque! Nam iusto cumque qui totam,
            ducimus blanditiis. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Facilis non illum quaerat velit sed quas, dolore
            blanditiis laboriosam eos consequatur assumenda reiciendis aut vero
            iure veritatis, maxime neque quidem quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur officia, impedit esse quae
            nesciunt veniam, dignissimos dolorum maxime est odio commodi.
            Obcaecati nemo possimus laudantium qui, odio optio ut amet? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni
            alias possimus at dolor qui necessitatibus, quam, ullam ipsam
            consequatur facilis nostrum sint quod sit quisquam doloribus aut
            expedita cumque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
