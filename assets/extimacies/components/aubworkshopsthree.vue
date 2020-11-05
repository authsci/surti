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
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/001.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/002.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/003.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/004.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/005.png',
        'https://extimacies.vercel.app/Content/AUB/events/workshops/003/006.png',
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
