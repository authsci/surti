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
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/001.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/002.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/003.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/004.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/005.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/006.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/007.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/008.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/009.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/010.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/011.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/012.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/013.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/014.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/015.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/016.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/017.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/018.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/019.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/020.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/021.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/022.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/023.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/024.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/025.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/026.png',
        'https://extimacies.vercel.app/Content/IUA/events/colloquium/002/027.png',
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
