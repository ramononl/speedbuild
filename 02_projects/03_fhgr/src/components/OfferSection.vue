<template>
  <div class="mt-24 lg:mt-32">
    <div class="xl:w-8/12">
      <h2>{{title}}</h2>
    </div>
    <ViewAll text="Alle ansehen"/>
    <div class="flex flex-wrap lg:flex-no-wrap -mx-6">
      <OfferCard v-for="n in 3" :key="n"/>
    </div>
  </div>
</template>

<script>
import ViewAll from "./secondary/ViewAll";
import OfferCard from "./secondary/OfferCard";

export default {
  props: ['title'],
  components: {
    ViewAll,
    OfferCard
  }
}
</script>

<style>

</style>