<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexY">
    <div
      style="height: 95%"
      class="absolute w-full -mt-12 overflow-y-auto font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 overflow-auto text-lg"
      >
        <div class="w-10/12 mt-10 sm:w-8/12">
          <h1 class="mt-5 mb-10 text-xl font-bold sm:text-3xl">Initiatives</h1>
          <div class="flex flex-wrap items-start content-center justify-center">
            <div
              class="flex flex-wrap items-start content-start justify-start m-5 mb-10 font-mono"
            >
              <div class="mt-10">
                <p class="text-lg sm:text-4xl">AUC</p>
                <p class="mt-5 text-sm sm:text-base">
                  In September 2019, AUC hosted a two-day international workshop
                  on Critical Theory and Psychoanalysis. The scholars and
                  psychoanalysts based around the world who participated in the
                  workshop presented papers to be engaged by the conference
                  participants. In an effort to make the scholarship more
                  accessible and contribute to the global nature of the
                  Extimacies project, a selection of these papers will be
                  translated to Arabic by the translation team based at the
                  American University in Cairo. Mae Safaan and Sherif Magdy,
                  both graduate students in the Philosophy Department at AUC,
                  are spearheading the Critical Theory & Psychoanalysis
                  Translation Project and are working to present five of the
                  conference papers in Arabic by summer 2020.
                </p>
              </div>

              <div class="mt-10">
                <p class="text-lg sm:text-4xl">AUB</p>
                <p class="mt-5 mb-10 text-2xl font-bold sm:text-3xl">
                  Launching “Naqḍ” Research Project
                </p>
                <p class="mt-5 text-sm sm:text-base">
                  Under the Early Career Grant from the Andrew Mellon Foundation
                  “Extimacies: Critical Theory from the Global South” headed by
                  Dr. Nadia Bou Ali at the American University of Beirut, we are
                  launching “Naqḍ” research project coordinated by Abdallah El
                  Ayache. Naqḍ in Arabic means at once critique, negation, and
                  caesura. Naqḍ as a research project seeks to establish a field
                  of discourse that addresses the contradictions at the heart of
                  social structures and history.
                </p>
                <p class="mt-5 text-sm sm:text-base">
                  The project aims at compiling a database of texts dealing with
                  Critical Theory in the Arabic language. This database, which
                  will be made available online, will focus primarily on works
                  covering Critical Theory, Historical Materialism, and
                  Psychoanalysis. The database will comprise translations of
                  works from the critical theoretical corpus and original
                  contributions by Arabic speaking scholars and thinkers in the
                  twentieth and twenty-first centuries. This research project
                  aims to create at a preliminary stage a source for researchers
                  and scholars interested in Critical Theory in the Arabic
                  speaking world. At a later stage, the project will evolve into
                  a mapping of concept formations which will allow for an
                  understanding of the scope and range of critical theoretical
                  interests at different historical moments of the past century
                  in Arabic.
                </p>
              </div>

              <div class="mt-10">
                <p class="text-lg sm:text-4xl">FUABC</p>
                <p class="mt-5 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  natus doloremque repellat dolore modi quod sed, rerum
                  repellendus doloribus laborum, unde, cum itaque! Nam iusto
                  cumque qui totam, ducimus blanditiis. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Facilis non illum quaerat
                  velit sed quas, dolore blanditiis laboriosam eos consequatur
                  assumenda reiciendis aut vero iure veritatis, maxime neque
                  quidem quam? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur officia, impedit esse quae
                  nesciunt veniam, dignissimos dolorum maxime est odio commodi.
                  Obcaecati nemo possimus laudantium qui, odio optio ut amet?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus magni alias possimus at dolor qui necessitatibus,
                  quam, ullam ipsam consequatur facilis nostrum sint quod sit
                  quisquam doloribus aut expedita cumque.
                </p>
              </div>

              <div class="mt-10">
                <p class="text-lg sm:text-4xl">IUA</p>

                <p class="mt-5 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  natus doloremque repellat dolore modi quod sed, rerum
                  repellendus doloribus laborum, unde, cum itaque! Nam iusto
                  cumque qui totam, ducimus blanditiis. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Facilis non illum quaerat
                  velit sed quas, dolore blanditiis laboriosam eos consequatur
                  assumenda reiciendis aut vero iure veritatis, maxime neque
                  quidem quam? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur officia, impedit esse quae
                  nesciunt veniam, dignissimos dolorum maxime est odio commodi.
                  Obcaecati nemo possimus laudantium qui, odio optio ut amet?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus magni alias possimus at dolor qui necessitatibus,
                  quam, ullam ipsam consequatur facilis nostrum sint quod sit
                  quisquam doloribus aut expedita cumque.
                </p>
              </div>
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
    const aucp1 = await $content('All/people/001').fetch()
    const aucp2 = await $content('All/people/002').fetch()
    const aucp3 = await $content('All/people/003').fetch()
    const aucp4 = await $content('All/people/004').fetch()
    const aucp5 = await $content('All/people/005').fetch()

    return {
      aucp1,
      aucp2,
      aucp3,
      aucp4,
      aucp5,
    }
  },

  data() {
    return {}
  },
  components: {},
  methods: {},
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
