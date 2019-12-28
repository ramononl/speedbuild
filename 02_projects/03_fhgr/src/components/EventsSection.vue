<template>
  <div class="mt-20">
    <div class="xl:w-3/5">
      <h2>Nachwuchsförderung, Fachveranstaltungen, Ausstellungen und Vorträge – nehmen Sie teil.</h2>
    </div>
    <ViewAll text="Alle Veranstaltungen ansehen"/>
    <div class="flex -mx-6">
      <EventCard/>
      <EventCard class="hidden md:block"/>
      <EventCard class="hidden lg:block"/>
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
import EventCard from "./secondary/EventCard";

export default {
  components: {
    ViewAll,
    EventCard
  }
}
</script>

<style>

</style>