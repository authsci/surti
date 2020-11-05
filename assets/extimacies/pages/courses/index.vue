<template>
  <div class="h-screen overflow-y-auto boddIndex">
    <div id="main" class="absolute w-full font-mono">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2 text-2xl"
      >
        <div class="w-10/12 mt-10 sm:w-8/12">
          <h1 class="mt-5 mb-10 text-xl font-bold sm:text-3xl">Courses</h1>
          <div v-show="courses">
            <div
              v-for="course in courses"
              :key="course.slug"
              class="flex flex-col text-base transition duration-700 ease-out sm:text-2xl"
            >
              <nuxt-link
                :to="course.location"
                class="flex flex-row items-end justify-between pl-0 font-mono text-black uppercase border-b border-black cursor-pointer sm:pl-16 hover:bg-black hover:text-white hover:font-bold"
                >{{ course.name }}
                <div class="h-full">
                  <div
                    v-if="course.uni == 'AUC'"
                    class="flex items-center justify-center pt-1 pb-1 pl-10 text-xl font-bold text-white bg-auc br-2"
                  >
                    AUC
                  </div>
                  <div
                    v-if="course.uni == 'AUB'"
                    class="flex items-center justify-center pt-1 pb-1 pl-10 text-xl font-bold text-white bg-aub br-2"
                  >
                    AUB
                  </div>
                  <div
                    v-if="course.uni == 'FUABC'"
                    class="flex items-center justify-center pt-1 pb-1 pl-4 text-xl font-bold text-white bg-fuabc br-2"
                  >
                    FUABC
                  </div>
                  <div
                    v-if="course.uni == 'IUA'"
                    class="flex items-center justify-center h-20 pt-1 pb-1 pl-10 text-xl font-bold text-white bg-iua br-2"
                  >
                    IUA
                  </div>
                </div>
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
    const courses = await $content('All/courses').sortBy('slug').fetch()
    return { courses }
  },
}
</script>

<style></style>
