<template>
  <div class="mt-24 lg:mt-32">
    <div class="xl:w-8/12">
      <h2>Bleiben Sie auf dem Laufenden mit den News aus unseren Bereichen.</h2>
    </div>
    <ViewAll text="Alle News ansehen"/>
    <div class="flex -mx-6">
      <NewsCard/>
      <NewsCard class="hidden md:block"/>
      <NewsCard class="hidden lg:block"/>
    </div>
    <div class="mt-6 flex items-center justify-center font-thin leading-none">
      <span class="text-4xl">1</span>
      <span class="ml-3 text-2xl">/</span>
      <span class="ml-3 text-3xl">10</span>
    </div>
  </div>
</template>

<script>
import ViewAll from "./secondary/ViewAll";
import NewsCard from "./secondary/NewsCard";

export default {
  components: {
    ViewAll,
    NewsCard
  }
}
</script>

<style>

</style>