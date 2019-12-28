<template>
  <header class="flex justify-between items-center px-10 py-6">
    <div class="flex items-center">
      <div class="w-12 h-12 bg-fhgr-500 flex flex-col justify-center items-center">
        <span class="text-white text-2xl leading-none block">FH</span>
        <span class="text-white text-2xl leading-none block -mt-1">BR</span>
      </div>
      <div>
        <h1 class="ml-2 text-xl leading-none font-semibold text-fhgr-500">Fachhochschule Braunbünden</h1>
        <span class="ml-2 text-xl leading-none font-thin text-fhgr-500">University of Applied Sciences</span>
      </div>
    </div>
    <div class="hidden xl:flex items-center text-gray-800">
      <ul>
        <li class="inline-block mr-10">Studium</li>
        <li class="inline-block mr-10">Weiterbildung</li>
        <li class="inline-block mr-10">Forschung und Dienstleistung</li>
        <li class="inline-block mr-10">Fachgebiete</li>
        <li class="inline-block mr-10">FHGR</li>
      </ul>
      <div class="mr-10 flex items-center">
        <span>DE</span>
        <img class="ml-1" src="../assets/arrow-down.png" alt="">
      </div>
      <div>
        <img src="../assets/icon-search.png" alt="">
      </div>
    </div>
    <div class="xl:hidden">
      <img src="../assets/icon-menu.png" alt="">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>