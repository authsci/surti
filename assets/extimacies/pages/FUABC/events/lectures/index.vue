<template>
  <div class="max-h-screen overflow-y-auto boddIndexA">
    <div id="main" class="absolute w-full font-mono">
      <div class="flex flex-row items-end font-mono">
        <div class="flex flex-col items-end content-center w-2/12 mb-5"></div>
        <div class="w-9/12">
          <div
            class="flex flex-row items-center text-lg font-normal sm:text-lg"
          >
            <nuxt-link to="/FUABC" class="">
              <span class="hover:font-bold">FUABC</span>
            </nuxt-link>
            <p class="ml-2 cursor-default">/Events</p>
            <p class="ml-2 font-bold cursor-default">/Lectures</p>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="flex flex-col items-center mb-5 text-3xl text-left">
        <div class="w-8/12 mt-10">
          <div class="cursor-pointer people-fuabc">
            <img
              data-src="~/static/Content/FUABC/events/lectures/001.jpg"
              style="-webkit-filter: grayscale(100%); filter: grayscale(100%)"
              v-lazy-load
            />
          </div>

          <p class="mt-10 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde
            quia quisquam corporis sed voluptate aspernatur, ab saepe provident.
            Illum provident, vero dolore autem maiores voluptatem! Nobis ducimus
            aspernatur quaerat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: false,
      events: false,
    }
  },
  components: {},
  methods: {},
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
</style>
