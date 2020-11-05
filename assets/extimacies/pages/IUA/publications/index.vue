<template>
  <div class="h-screen overflow-y-auto boddIndexY">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-3xl"
      >
        <div class="w-8/12 mt-2">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/IUA"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              IUA
            </nuxt-link>
            <p class="ml-2 text-lg font-bold cursor-default">/Publications</p>
          </div>
          <p class="mt-5 text-sm sm:text-base">
            1) Carlos Gómez-Camarena "Acontecimiento" in Ricardo Espinoza Lolas
            and Félix Angulo (Eds.), Conceptos para demoler la educación
            capitalista. Tierra Ignota, Barcelona, 2020. ISBN:
            978-84-122245-8-0.
          </p>
          <p class="mt-5 text-sm sm:text-base">
            2) Sergio Agular-Alcalá and Carlos Gómez-Camarena "Café sin leche,
            Escuela sin concepto: rasgos, operaciones y lecturas de la Escuela
            Eslovena" in Res Publica. Revista de Historia de las Ideas
            Políticas, vol. 23 Núm. 1 (2021), Universidad Complutense de Madrid,
            ISNN 1576-4184.
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
