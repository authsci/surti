<template>
  <div class="w-full max-h-screen boddIndex">
    <div>
      <div style="height: 95%" class="w-full mt-10 font-mono main">
        <div
          id="intro"
          class="absolute top-0 left-0 right-0 flex flex-col items-center justify-start mt-40 xl:mt-56 lg:mt-56 md:mt-56"
        >
          <div class="flex flex-wrap items-center justify-center md:flex-row">
            <nuxt-link to="/AUB">
              <div
                id="AUB"
                :class="aubHover ? '' : 'disabled'"
                @mouseover="aubPosition"
                @mouseleave="aub = false"
                class="relative flex items-center justify-center w-24 h-24 m-8 text-black align-middle transition duration-500 ease-in-out transform rounded-none cursor-pointer sm:w-32 sm:h-32 md:m-8 lg:m-12 xl:m-12 bg-grey sm:hover:scale-y-200 hover:bg-aub hover:text-white hover:opacity-100"
              >
                <div
                  @mouseover="aubPosition"
                  :class="aub ? 'sm:scale-y-60' : ''"
                  class="transition duration-500 ease-in-out transform"
                >
                  AUB
                </div>
              </div>
            </nuxt-link>

            <nuxt-link to="/AUC">
              <div
                id="AUC"
                @mouseover="aucPosition"
                @mouseleave="auc = false"
                :class="aucHover ? '' : 'disabled'"
                class="relative flex items-center justify-center w-24 h-24 m-8 text-black align-middle transition duration-500 ease-in-out transform rounded-none cursor-pointer sm:w-32 sm:h-32 md:m-8 lg:m-12 xl:m-12 bg-grey sm:hover:scale-y-200 hover:bg-auc hover:text-white hover:opacity-100"
              >
                <div
                  @mouseover="aucPosition"
                  :class="auc ? 'sm:scale-y-60' : ''"
                  class="transition duration-500 ease-in-out transform opacity-100"
                >
                  AUC
                </div>
              </div>
            </nuxt-link>

            <nuxt-link to="/FUABC">
              <div
                id="FUABC"
                :class="fubacHover ? '' : 'disabled'"
                @mouseover="fubacPosition"
                @mouseleave="fubac = false"
                class="relative flex items-center justify-center w-24 h-24 m-8 text-black align-middle transition duration-500 ease-in-out transform rounded-none cursor-pointer sm:w-32 sm:h-32 md:m-8 lg:m-12 xl:m-12 bg-grey sm:hover:scale-y-200 hover:bg-fuabc hover:text-white hover:opacity-100"
              >
                <div
                  @mouseover="fubacPosition"
                  :class="fubac ? 'sm:scale-y-60' : ''"
                  class="transition duration-500 ease-in-out transform"
                >
                  FUABC
                </div>
              </div>
            </nuxt-link>

            <nuxt-link to="/IUA">
              <div
                id="ULA"
                :class="ulaHover ? '' : 'disabled'"
                @mouseover="ulaPosition"
                @mouseleave="ula = false"
                class="relative flex items-center justify-center w-24 h-24 m-8 text-black align-middle transition duration-500 ease-in-out transform rounded-none cursor-pointer sm:w-32 sm:h-32 md:m-8 lg:m-12 xl:m-12 bg-grey sm:hover:scale-y-200 hover:bg-iua hover:text-white hover:opacity-100"
              >
                <div
                  @mouseover="ulaPosition"
                  :class="ula ? 'sm:scale-y-60' : ''"
                  class="transition duration-500 ease-in-out transform"
                >
                  IUA
                </div>
              </div>
            </nuxt-link>
          </div>

          <div class="flex items-center content-center justify-center">
            <div
              @mouseover="about = true"
              class="flex md:w-10/12 lg:w-9/12 xl:w-7/12 sm:w-7/12 lg:mt-16 sm:mt-24"
            >
              <transition name="slide">
                <div class="hidden sm:block" v-if="auc">
                  <p
                    class="font-mono text-base font-bold text-left text-copy-primary"
                  >
                    The American University in Cairo
                    <span class="font-normal">/AUC</span>
                  </p>
                  <p class="mt-3 font-mono text-sm text-left text-copy-primary">
                    The Cairo team is led by Surti Singh, Assistant Professor of
                    Philosophy and Principal Investigator. In September 2019,
                    AUC hosted a two-day international workshop on Critical
                    Theory and Psychoanalysis. The scholars and psychoanalysts
                    based around the world who participated in the workshop
                    presented papers to be engaged by the conference
                    participants. In an effort to make the scholarship more
                    accessible and contribute to the global nature of the
                    Extimacies project, a selection of these papers will be
                    translated to Arabic by the translation team based at the
                    American University in Cairo.
                  </p>
                </div>

                <div class="hidden sm:block" v-else-if="aub">
                  <p
                    class="font-mono text-base font-bold text-left text-copy-primary"
                  >
                    The American University in Beirut
                    <span class="font-normal">/AUB</span>
                  </p>
                  <p class="mt-3 font-mono text-sm text-left text-copy-primary">
                    The Beirut team is led by Nadia Bou Ali, Assistant Professor
                    in the Department of Civilization Studies. In September
                    2019, AUC hosted a two-day international workshop on
                    Critical Theory and Psychoanalysis. The scholars and
                    psychoanalysts based around the world who participated in
                    the workshop presented papers to be engaged by the
                    conference participants. In an effort to make the
                    scholarship more accessible and contribute to the global
                    nature of the Extimacies project, a selection of these
                    papers will be translated to Arabic by the translation team
                    based at the American University in Cairo.
                  </p>
                </div>

                <div class="hidden sm:block" v-else-if="fubac">
                  <p
                    class="font-mono text-base font-bold text-left text-copy-primary"
                  >
                    The Federal University of ABC
                    <span class="font-normal">/FUABC</span>
                  </p>
                  <p class="mt-3 font-mono text-sm text-left text-copy-primary">
                    The Brazil team is led by Silvio Gomes Carneiro, Assistant
                    Professor of Philosophy and Principal Investigator. In
                    September 2019, AUC hosted a two-day international workshop
                    on Critical Theory and Psychoanalysis. The scholars and
                    psychoanalysts based around the world who participated in
                    the workshop presented papers to be engaged by the
                    conference participants. In an effort to make the
                    scholarship more accessible and contribute to the global
                    nature of the Extimacies project, a selection of these
                    papers will be translated to Arabic by the translation team
                    based at the American University in Cairo.
                  </p>
                </div>

                <div class="hidden sm:block" v-else-if="ula">
                  <p
                    class="font-mono text-base font-bold text-left text-copy-primary"
                  >
                    The Ibero-American University
                    <span class="font-normal">/IUA</span>
                  </p>
                  <p class="mt-3 font-mono text-sm text-left text-copy-primary">
                    The Mexico team is led by Carlos Gómez Camarena, Assistant
                    Professor in the Department of Civilization Studies. In
                    September 2019, AUC hosted a two-day international workshop
                    on Critical Theory and Psychoanalysis. The scholars and
                    psychoanalysts based around the world who participated in
                    the workshop presented papers to be engaged by the
                    conference participants. In an effort to make the
                    scholarship more accessible and contribute to the global
                    nature of the Extimacies project, a selection of these
                    papers will be translated to Arabic by the translation team
                    based at the American University in Cairo.
                  </p>
                </div>
              </transition>
            </div>
          </div>
          <div
            id="about"
            class="flex flex-col items-center content-center justify-center mt-48 mb-10 font-mono"
          >
            <div
              v-if="rotate"
              @click="rotateM()"
              v-scroll-to="{
                el: '#about',
                duration: 1000,
                easing: 'in',
                offset: -100,
                force: true,
                cancelable: true,
                onStart: false,
                x: false,
                y: true,
              }"
              class="w-16 h-16 transition duration-500 ease-in-out transform"
            >
              <svg
                :class="rotate ? ' rotate-180' : 'rotate-0'"
                class="transition duration-1000 ease-in transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46.4 23.2"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: none;
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                  </style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M.5,0A22.7,22.7,0,0,0,23.2,22.7,22.7,22.7,0,0,0,45.9,0"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              v-else
              @click="rotateM()"
              v-scroll-to="{
                el: '#intro',
                duration: 1000,
                easing: 'linear',
                offset: -230,
                force: true,
                cancelable: true,
                onStart: false,
                x: false,
                y: true,
              }"
              class="z-50 w-16 h-16 transition duration-500 ease-in-out transform"
            >
              <svg
                :class="rotate ? ' rotate-180' : 'rotate-0'"
                class="transition duration-1000 ease-in transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46.4 23.2"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: none;
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                  </style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M.5,0A22.7,22.7,0,0,0,23.2,22.7,22.7,22.7,0,0,0,45.9,0"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="flex flex-col md:w-10/12 lg:w-9/12 xl:w-7/12 sm:w-7/12">
              <div>
                <div class="m-5 text-base text-left">
                  <span id="pro" class="font-bold">Extimacies:</span>
                  Critical Theory from the Global South is a collaborative
                  research project based at the American University in Cairo
                  (Egypt), with partners at the American University of Beirut
                  (Lebanon), the Federal University of ABC (Brazil), and the
                  Ibero-American University (Mexico). The project is supported
                  by a three-year, $500,000 grant awarded by the Andrew W.
                  Mellon Foundation [2018-2021].
                </div>
                <div class="flex flex-col m-5 base">
                  The project seeks to think anew the north/south binary,
                  rejecting the move to either “provincialize” Critical Theory
                  or to “globalize” a southern perspective. Rather, the project
                  proposes the notion of extimacy, a neologism coined by Jacques
                  Lacan, which implies the topological space of an intimate
                  exteriority or an internal externality, as a strategy to
                  address the irreducibility of Critical Theory to either pole.
                  From this point of view, the geopolitical and economic
                  distinction between north and south, between what is proper to
                  and inside the north and what is outside or external and
                  other, begins to turn and twist into the edge of the möbius
                  strip, where in this zone of indiscernibility, the inside
                  becomes outside, the outside becomes inside, and the
                  non-identical attains to identity. There, then, emerges the
                  possibility of taking a position that is simultaneously inside
                  and outside, identical and non-identical, in agreement and
                  critical, within Critical Theory and outside it, of taking a
                  position that is estimates, that is, of reconceiving Critical
                  Theory beyond its liberal defense from the (imagined and real)
                  standpoints of the north and its decolonial critique from the
                  (imagined and real) standpoints of the south. As such, the
                  project is centered on a series of colloquia, workshops, and
                  publications that focus on rethinking the dichotomies of
                  history and capitalist/non-capitalist modernity, progress and
                  prolepsis, philosophies of consciousness and the unconscious,
                  civilization and barbarism, nature and culture, metaphysics
                  and materialism, the sensuous and the supra-sensuous, the
                  universal and the particular, historical time and abstract
                  time, theory and praxis, the center and the periphery.
                </div>
              </div>

              <div class="flex flex-col m-5">
                <p class="mt-5">
                  <span class="mr-1 font-bold">Surti Singh</span> (AUC)
                  Principle Investigator
                </p>
                <p class="mt-3">
                  <span class="mr-1 font-bold">Nadia Bou Ali </span> (AUB)
                  Co-Investigator
                </p>
                <p class="mt-3">
                  <span class="mr-1 font-bold">Carlos Gómez Camarena</span>
                  (UIA) Co-Investigator
                </p>
                <p class="mt-3">
                  <span class="mr-1 font-bold">Silvio Gomes Carneiro</span>
                  (UFABC) Co-Investigator
                </p>
                <p class="mt-3">
                  <span class="mr-1 font-bold">Sami Khatib</span> (AUC)
                  Collaborator
                </p>
                <p class="mt-3">
                  <span class="mr-1 font-bold">Alejandro Cerda Rueda</span>
                  (UIA) Collaborator
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
  data() {
    return {
      active: false,
      aucHover: true,
      aubHover: true,
      fubacHover: true,
      ulaHover: true,
      auc: false,
      aub: false,
      fubac: false,
      ula: false,
      rotate: false,
    }
  },
  components: {},
  computed: {},
  methods: {
    aubPosition() {
      this.aub = true
    },
    aucPosition() {
      this.auc = true
    },
    fubacPosition() {
      this.fubac = true
    },
    ulaPosition() {
      this.ula = true
    },

    rotateM() {
      this.rotate = !this.rotate
    },
  },
}
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 470px) {
  .boddIndex {
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/mobuis.png');
    z-index: 100;
  }

  .boddIndexX {
    background-repeat: no-repeat;
    width: 100%;
    height: 80%;
    margin-top: 25%;
    position: absolute;
    background-image: url('/twist.png');
  }

  .boddIndexY {
    background-repeat: no-repeat;
    width: 100%;
    height: 80%;
    margin-top: 25%;
    position: absolute;
    background-image: url('/shape.png');
  }

  .boddIndexZ {
    background-repeat: no-repeat;
    width: 100%;
    height: 80%;
    margin-top: 25%;
    position: absolute;
    background-image: url('/mobuisthree.png');
  }

  .boddIndexA {
    background-repeat: no-repeat;
    width: 100%;
    height: 80%;
    margin-top: 25%;
    position: absolute;
    background-image: url('/mobuistwo.png');
  }
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

.aboutSwitcher {
  position: fixed;
  bottom: 5px;
  left: 50%;
  padding: 0;
  opacity: 100;
  z-index: 100;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.disabled {
  pointer-events: none;
}

.slide-enter-active {
  transition: all 0.7s ease;
}
.slide-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>
