<template>
  <div class="sm:w-1/2 lg:w-1/3 px-4 py-6">
    <g-link :to="cardData.path" class="group">
      <div class="rounded-lg border-gray-300 border shadow-md group-hover:shadow-lg transition-all">
        <g-image class="rounded-t-lg overflow-hidden opacity-75 group-hover:opacity-100 transition-all" :src="cardData.image" alt=""/>
        <div class="relative rounded-b-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
          <div class="flex px-6 py-4 border-t border-b border-gray-300">
            <h2 class="text-xl font-bold text-green-600">{{ cardData.title }}</h2>
            <div class="flex items-center ml-3 bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
                <circle cx="12" cy="12" r="10" class="text-gray-500 fill-current"></circle>
                <path class="text-gray-700 fill-current" d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"></path>
              </svg>
              <span class="inline-block ml-1">{{ cardData.duration }}</span>
            </div>
          </div>
          <p class="px-6 pt-6 pb-8 text-gray-800">{{ cardData.preview }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-0 bottom-0 mr-6 -mb-6 w-12 h-12">
            <circle cx="12" cy="12" r="10" class="text-green-500 group-hover:text-green-700 fill-current transition-all"></circle>
            <path class="text-white fill-current" d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z"></path>
          </svg>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cardData']
}
</script>

<style>

</style>