<template>
  <div>
    <div class="flex items-center content-center justify-center ml-32">
      <div class="flex flex-wrap w-9/12 mb-10">
        <div
          v-for="(src, index) in imgs"
          :key="index"
          class="w-3/12 m-3 pic"
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
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/001.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/002.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/003.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/004.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/005.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/006.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/007.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/008.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/009.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/010.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/011.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/012.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/013.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/014.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/015.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/016.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/017.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/018.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/019.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/020.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/021.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/022.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/023.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/024.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/025.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/026.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/027.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/028.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/029.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/030.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/031.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/032.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/033.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/034.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/035.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/036.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/037.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/038.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/039.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/040.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/041.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/042.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/043.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/044.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/045.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/046.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/047.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/048.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/049.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/050.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/051.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/052.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/053.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/054.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/055.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/056.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/057.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/058.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/059.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/060.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/061.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/062.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/063.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/064.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/065.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/066.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/067.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/068.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/069.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/070.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/071.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/072.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/073.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/074.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/075.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/076.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/077.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/078.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/001/079.png',
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
