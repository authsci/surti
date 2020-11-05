<template>
  <div
    class="flex flex-row justify-between font-mono bg-white sm:bg-transparent sm:mr-5 lg:mr-10 lg:ml-10 sm:ml-5 lg:static sm:my-3"
  >
    <div
      class="relative flex items-center justify-between w-full max-w-screen-xl px-6"
    >
      <div class="z-50 flex items-center text-copy-primary">
        <nuxt-link to="/">
          <img
            class="block w-16 h-auto mt-2 md:hidden lg:hidden xl:hidden"
            src="~/assets/mobile.svg"
          />
          <img
            class="hidden h-16 md:block lg:block xl:block"
            src="~/assets/logo.svg"
          />
        </nuxt-link>
      </div>
    </div>
    <div
      class="z-50 flex flex-row items-center px-2 pt-3 pb-5 m-1 mt-3 sm:mt-0 text-copy-primary sm:flex"
    >
      <div
        class="flex items-center justify-center w-12 h-12 bg-transparent cursor-pointer sm:w-16 sm:h-16"
      >
        <burger />
      </div>
    </div>
  </div>
</template>
