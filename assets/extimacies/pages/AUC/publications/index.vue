<template>
  <div class="h-screen overflow-y-auto boddIndexY">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-3xl"
      >
        <div class="w-8/12 mt-2">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/AUC"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              AUC
            </nuxt-link>
            <p class="ml-2 text-lg font-bold cursor-default">/Publications</p>
          </div>
          <p class="mt-5 text-sm sm:text-base">
            Aliquip et mollit commodo non. Consequat veniam non excepteur
            nostrud. Incididunt est irure ad Lorem incididunt excepteur
            cupidatat occaecat. Adipisicing deserunt dolor reprehenderit non
            cillum cillum quis. Laborum aliquip adipisicing consectetur velit
            eiusmod commodo nulla. Excepteur culpa ad irure proident eu
            voluptate qui. Excepteur fugiat ex est quis cillum nisi cillum
            incididunt ad enim qui consectetur ad. Dolore ad sit do consectetur
            in eiusmod aute aliqua ipsum tempor officia minim officia. In
            officia laboris eu eu nostrud. Dolor id sint dolore reprehenderit
            officia consectetur do anim. Dolore anim anim est occaecat ex
            excepteur tempor exercitation id Lorem in ullamco eiusmod. Sunt ut
            ex cillum elit. Dolor est Lorem duis ea laborum pariatur ea est quis
            adipisicing amet tempor fugiat nisi. Exercitation velit nulla fugiat
            incididunt aliqua aliquip ad et commodo cillum cupidatat veniam.
            Nulla fugiat commodo magna consequat ullamco voluptate quis pariatur
            aliquip. In enim qui ut amet sint. Fugiat exercitation anim
            cupidatat sit qui est deserunt anim. Ea proident eiusmod et et
            exercitation et pariatur occaecat amet nisi esse. Duis exercitation
            tempor eiusmod veniam velit cillum excepteur quis nisi exercitation
            fugiat cillum dolore non. Est anim esse eiusmod elit esse
            exercitation laborum mollit. Minim aliquip mollit est nostrud
            ullamco.
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
