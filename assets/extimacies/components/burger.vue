<template>
  <nav class="z-50 flex h-16 text-black bg-transparent zind">
    <div class="flex items-center">
      <button class="z-40 mr-2" aria-label="Open Menu" @click="drawer">
        <img v-if="isOpen" class="w-10 h-10" src="~/assets/Close.svg" alt="" />
        <img v-else class="w-10 h-10" src="~/assets/burger.svg" alt="" />
      </button>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="fixed top-0 right-0 z-30 h-full overflow-auto transition-all duration-700 ease-in-out transform w-80 bg-menu"
      :class="isOpen ? '-translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col content-start justify-end w-full mb-5">
        <div class="mt-32 ml-8 border-b-2 border-black">
          <p class="mb-3 text-xs">Extimacies Program</p>
        </div>
      </div>

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link :to="{ path: '/', hash: 'about' }">
          <span>About</span>
        </nuxt-link>
      </span>

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/people"> <span>People</span> </nuxt-link>
      </span>

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/events">
          <span>Events</span>
        </nuxt-link>
      </span>

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/publications">
          <span>Publications</span>
        </nuxt-link></span
      >

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/initiatives">
          <span>Initiatives</span>
        </nuxt-link></span
      >

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/courses">
          <span>Courses</span>
        </nuxt-link>
      </span>

      <div class="flex flex-col content-start justify-end w-full mb-5">
        <div class="mt-16 ml-8 border-b-2 border-black">
          <p class="mb-3 text-xs">Extimacies Institutions</p>
        </div>
      </div>
      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/AUB">The American University of Beirut</nuxt-link></span
      >

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/AUC">The American University in Cairo </nuxt-link></span
      >

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/FUABC">Federal University of ABC </nuxt-link></span
      >

      <span
        @click="isOpen = false"
        class="flex items-center mb-3 ml-8 text-xs hover:text-white"
      >
        <nuxt-link to="/IUA">The Ibero-American University</nuxt-link></span
      >
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>

<style scoped>
.zind {
  z-index: 100;
}
</style>
