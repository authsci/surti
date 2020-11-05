<template>
  <div style="overflow: hidden" class="max-h-screen boddIndexZ">
    <div
      style="height: 90%"
      class="absolute w-full -mt-12 overflow-y-auto font-mono scrolly"
    >
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 overflow-auto text-2xl"
      >
        <div class="w-10/12 mt-10 sm:w-8/12">
          <h1 class="mt-5 mb-10 text-xl font-bold sm:text-3xl">Events</h1>
          <div class="flex flex-wrap items-start content-center justify-center">
            <div
              class="flex flex-wrap items-start content-start justify-start m-5 mb-10 font-mono"
            >
              <div
                v-for="doc in docs"
                :key="doc.slug"
                class="w-full p-3 sm:w-4/12"
              >
                <nuxt-link :to="doc.location">
                  <div>
                    <div class="flex flex-col">
                      <p
                        v-if="doc.uni == 'AUC'"
                        class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-auc"
                      >
                        <span class="p-1">AUC</span>
                      </p>

                      <p
                        v-if="doc.uni == 'AUB'"
                        class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-aub"
                      >
                        <span class="p-1">AUB</span>
                      </p>

                      <p
                        v-if="doc.uni == 'FUABC'"
                        class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-fuabc"
                      >
                        <span class="p-1">FUABC</span>
                      </p>

                      <p
                        v-if="doc.uni == 'IUA'"
                        class="z-40 w-16 mt-5 -mb-32 text-base font-bold text-white bg-iua"
                      >
                        <span class="p-1">IUA</span>
                      </p>
                    </div>
                    <div class="flex flex-row items-end mt-2">
                      <img
                        :data-src="doc.cover"
                        class="object-cover"
                        style="
                          -webkit-filter: grayscale(100%);
                          filter: grayscale(100%);
                        "
                        v-lazy-load
                      />
                    </div>
                    <p class="mt-2 font-mono text-lg font-bold text-black">
                      {{ doc.semester }}
                    </p>

                    <p class="font-mono text-base text-black">{{ doc.name }}</p>
                  </div>
                </nuxt-link>
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
    const docs = await $content('All/events').sortBy('slug').fetch()
    return { docs }
  },
}
</script>

<style></style>
