<template>
  <div class="h-screen overflow-y-auto boddIndex">
    <div id="main" class="absolute w-full font-mono sm:-mt-12">
      <div
        class="flex flex-col items-center content-center justify-center mb-5 mr-2"
      >
        <div class="w-8/12 mt-32 sm:mt-10">
          <div class="flex flex-row items-center">
            <nuxt-link
              to="/AUB"
              class="text-lg font-normal hover:font-bold sm:text-lg"
            >
              AUB
            </nuxt-link>
            <p class="ml-2 font-bold cursor-default">/Publications</p>
          </div>

          <h1 class="mt-5 mb-10 text-xl font-bold sm:text-3xl">Books</h1>
          <div class="flex flex-wrap">
            <div
              v-for="book in books"
              :key="book.slug"
              class="w-7/12 mr-5 sm:w-3/12"
            >
              <img
                :data-src="`/Content/AUB/publications/${book.cover}`"
                class="object-cover"
                style="-webkit-filter: grayscale(100%); filter: grayscale(100%)"
                v-lazy-load
              />
              <p class="font-mono text-lg font-bold text-black">
                {{ book.name }}
                <span class="text-base font-light">- {{ book.year }}</span>
              </p>

              <p class="font-mono text-base text-black">{{ book.writer }}</p>
            </div>
          </div>

          <h1 class="mt-16 mb-5 text-xl font-bold sm:text-3xl">Edited Books</h1>
          <div class="flex">
            <div
              v-for="editedBook in editedBooks"
              :key="editedBook.slug"
              class="w-7/12 mr-5 sm:w-3/12"
            >
              <img
                :data-src="`/Content/AUB/publications/${editedBook.cover}`"
                class="object-cover"
                style="-webkit-filter: grayscale(100%); filter: grayscale(100%)"
                v-lazy-load
              />
              <p class="font-mono text-lg font-bold text-black">
                {{ editedBook.name }}
                <span class="text-base font-light"
                  >- {{ editedBook.year }}</span
                >
              </p>

              <p class="font-mono text-base text-black">
                {{ editedBook.writer }}
              </p>
            </div>
          </div>

          <h1 class="mt-16 mb-5 text-xl font-bold sm:text-3xl">
            Refereed Journal Articles
          </h1>

          <nuxt-content class="mt-3 leading-relaxed" :document="publications" />

          <h1 class="mt-16 mb-5 text-xl font-bold sm:text-3xl">
            Chapters in Books
          </h1>

          <nuxt-content class="mt-3 leading-relaxed" :document="chapters" />

          <h1 class="mt-16 mb-5 text-xl font-bold sm:text-3xl">
            Refereed Book Reviews
          </h1>

          <nuxt-content class="mt-3 leading-relaxed" :document="bkReviews" />

          <h1 class="mt-16 mb-5 text-xl font-bold sm:text-3xl">
            Other Publications
          </h1>

          <nuxt-content class="mt-3" :document="otherPublications" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const publications = await $content('AUB/publications/publications').fetch()
    const chapters = await $content('AUB/publications/chapters').fetch()
    const bkReviews = await $content('AUB/publications/bookReviews').fetch()
    const otherPublications = await $content(
      'AUB/publications/otherPublications'
    ).fetch()

    const books = await $content('AUB/publications/bookp')
      .sortBy('slug')
      .fetch()

    const editedBooks = await $content('AUB/publications/bookp')
      .skip(1)
      .limit(1)
      .sortBy('slug')
      .fetch()

    return {
      publications,
      books,
      editedBooks,
      chapters,
      bkReviews,
      otherPublications,
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
</style>
