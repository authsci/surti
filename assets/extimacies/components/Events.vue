<template>
  <div class="flex flex-col text-2xl">
    <transition name="fade-slide">
      <nuxt-link
        to="/events/Colloquium"
        class="pr-5 border-b border-black cursor-pointer hover:bg-black hover:text-white hover:font-bold"
      >
        <span class="ml-16">Colloquium</span>
      </nuxt-link>
    </transition>
    <transition name="fade-slide">
      <div
        class="pr-5 border-b border-black cursor-pointer cursor-not-allowed hover:bg-black hover:text-white hover:font-bold"
      >
        <span class="ml-16">Film Series</span>
      </div>
    </transition>
    <transition name="fade-slide">
      <div
        class="pr-5 border-b border-black cursor-pointer cursor-not-allowed hover:bg-black hover:text-white hover:font-bold"
      >
        <span class="ml-16">Workshop</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>