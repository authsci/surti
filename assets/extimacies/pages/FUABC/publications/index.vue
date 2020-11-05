<template>
  <div class="h-screen overflow-y-auto boddIndexZ">
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
            <p class="ml-2 text-lg font-bold cursor-default">/Publications</p>
          </div>
          <p class="mt-5 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloremque labore commodi architecto alias id iure, nemo animi
            ratione reprehenderit consequuntur? Voluptatibus maiores nesciunt
            dignissimos quos alias ullam amet nemo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus quia quo natus incidunt,
            quibusdam quidem eveniet placeat iusto. Nulla commodi amet
            accusantium nostrum culpa iusto, dolores minus. Assumenda, sunt
            placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, odit tenetur? Ipsam accusantium et placeat earum,
            facilis, rerum optio a commodi quaerat dolores maxime molestias
            voluptas. Amet impedit aut omnis? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Optio temporibus alias sequi
            consequatur aspernatur quae, suscipit libero cumque ipsam ad
            corrupti sed asperiores harum et eligendi maiores praesentium vel
            ducimus?
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
