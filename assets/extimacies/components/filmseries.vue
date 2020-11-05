<template>
  <div>
    <div class="flex items-center content-center justify-center ml-10 sm:ml-32">
      <div class="flex flex-wrap w-full mb-10 sm:w-9/12">
        <div
          v-for="(src, index) in imgs"
          :key="index"
          class="w-8/12 p-3 sm:w-4/12 pic"
          @click="() => showImg(index)"
        >
          <img :src="src" />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/001.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/003.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/005.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/006.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/007.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/008.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/009.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/010.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/011.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/012.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/013.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/014.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/015.png',
        'https://extimacies.vercel.app/Content/AUC/events/filmseries/photos/016.png',
      ],
    }
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>

<style></style>
