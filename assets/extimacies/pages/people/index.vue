<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexY">
    <div
      style="height: 80%"
      class="absolute w-full -mt-12 overflow-y-auto font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 overflow-auto text-2xl"
      >
        <div class="w-10/12 mt-10 sm:w-8/12">
          <h1 class="mt-5 mb-10 text-xl font-bold sm:text-3xl">People</h1>
          <div class="flex flex-wrap items-start content-center justify-center">
            <div
              class="flex flex-wrap items-start content-start justify-start m-5 mb-10 font-mono"
            >
              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp1Acitve = !aucp1Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
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
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <!-- <p
                    v-if="docs.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="docs.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="docs.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p> -->
                </div>
                <div
                  @click="aucp2Acitve = !aucp2Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
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
                <div class="flex flex-col">
                  <p
                    v-if="aucp3.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp3.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp3.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp3.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp3Acitve = !aucp3Acitve"
                  class="cursor-pointer people-aub"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp3.photo}`"
                    class="object-covr"
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
                <div class="flex flex-col">
                  <p
                    v-if="aucp4.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp4.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp4.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp4.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp4Acitve = !aucp4Acitve"
                  class="cursor-pointer people-fuabc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp4.photo}`"
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
                <div class="flex flex-col">
                  <p
                    v-if="aucp5.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp5.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp5.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp5.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp5Acitve = !aucp5Acitve"
                  class="cursor-pointer people-iua"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp5.photo}`"
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
                <div class="flex flex-col">
                  <p
                    v-if="aucp6.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp6.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp6.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp6.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp6Acitve = !aucp6Acitve"
                  class="cursor-pointer people-iua"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp6.photo}`"
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
                <div class="flex flex-col">
                  <p
                    v-if="aucp7.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp7.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp7.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp7.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp7Acitve = !aucp7Acitve"
                  class="cursor-pointer people-iua"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp7.photo}`"
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
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp8Acitve = !aucp8Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
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

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp9Acitve = !aucp9Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/AUC/people/${aucp9.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp9.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp9.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp9.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp9.email }}
                </p>
                <div :class="aucp9Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp9Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp9"
                    />
                  </transition>
                </div>
              </div>

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp10Acitve = !aucp10Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/AUC/people/${aucp10.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp10.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp10.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp10.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp10.email }}
                </p>
                <div :class="aucp10Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp10Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp10"
                    />
                  </transition>
                </div>
              </div>

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp11Acitve = !aucp11Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/AUC/people/${aucp11.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp11.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp11.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp11.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp11.email }}
                </p>
                <div :class="aucp11Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp11Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp11"
                    />
                  </transition>
                </div>
              </div>

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col">
                  <p
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>
                </div>
                <div
                  @click="aucp12Acitve = !aucp12Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/AUC/people/${aucp12.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp12.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp12.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp12.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp12.email }}
                </p>
                <div :class="aucp12Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp12Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp12"
                    />
                  </transition>
                </div>
              </div>

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col"></div>
                <div class="flex flex-col">
                  <p
                    v-if="aucp13.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp13.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp13.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp13.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp13Acitve = !aucp13Acitve"
                  class="cursor-pointer people-aub"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp13.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp13.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp13.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp13.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp13.email }}
                </p>
                <div :class="aucp13Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp13Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp13"
                    />
                  </transition>
                </div>
              </div>

              <div class="w-8/12 p-3 sm:w-4/12">
                <div class="flex flex-col"></div>
                <div class="flex flex-col">
                  <p
                    v-if="aucp14.uni == 'AUC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                  >
                    <span class="p-1">AUC</span>
                  </p>

                  <p
                    v-if="aucp14.uni == 'AUB'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                  >
                    <span class="p-1">AUB</span>
                  </p>

                  <p
                    v-if="aucp14.uni == 'FUABC'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                  >
                    <span class="p-1">FUABC</span>
                  </p>

                  <p
                    v-if="aucp14.uni == 'IUA'"
                    class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                  >
                    <span class="p-1">IUA</span>
                  </p>
                </div>
                <div
                  @click="aucp14Acitve = !aucp14Acitve"
                  class="cursor-pointer people-auc"
                >
                  <img
                    :class="isLoaded ? 'animate-pulse' : ''"
                    :data-src="`/Content/All/people/${aucp14.photo}`"
                    class="object-covr"
                    style="
                      -webkit-filter: grayscale(100%);
                      filter: grayscale(100%);
                    "
                    v-lazy-load
                  />
                </div>

                <p class="font-mono text-xl font-bold text-black">
                  {{ aucp14.name }}
                </p>
                <p class="font-mono text-base text-black">
                  {{ aucp14.role }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp14.office }}
                </p>
                <p class="font-mono text-sm text-black">
                  {{ aucp14.email }}
                </p>
                <div :class="aucp14Acitve ? 'block' : 'hidden'">
                  <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                  >
                    <nuxt-content
                      v-if="aucp14Acitve"
                      class="mt-5 font-mono text-sm text-left transition duration-300 ease-linear"
                      :document="aucp14"
                    />
                  </transition>
                </div>
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
    const aucp6 = await $content('All/people/006').fetch()
    const aucp7 = await $content('All/people/007').fetch()
    const aucp8 = await $content('All/people/008').fetch()
    const aucp9 = await $content('All/people/009').fetch()
    const aucp10 = await $content('All/people/010').fetch()
    const aucp11 = await $content('All/people/011').fetch()
    const aucp12 = await $content('All/people/012').fetch()
    const aucp13 = await $content('All/people/013').fetch()
    const aucp14 = await $content('All/people/014').fetch()

    return {
      aucp1,
      aucp2,
      aucp3,
      aucp4,
      aucp5,
      aucp6,
      aucp7,
      aucp8,
      aucp9,
      aucp10,
      aucp11,
      aucp12,
      aucp13,
      aucp14,
    }
  },

  data() {
    return {
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

.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
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

.people-fuabc {
  background: rgba(209, 19, 15, 0);
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-fuabc > img {
  position: relative;
  width: 100%;
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-fuabc:hover {
  background: rgba(5, 59, 113, 0.5);
}
.people-fuabc:hover > img {
  z-index: -1;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
}

.people-iua {
  background: rgba(209, 19, 15, 0);
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-iua > img {
  position: relative;
  width: 100%;
  transition: ease 0.1s;
  -webkit-transition: ease 0.1s;
  -moz-transition: ease 0.1s;
  -ms-transition: ease 0.1s;
  -o-transition: ease 0.1s;
}
.people-iua:hover {
  background: rgba(252, 39, 46, 0.5);
}
.people-iua:hover > img {
  z-index: -1;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
}
</style>
