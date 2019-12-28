<template>
  <div class="mt-20">
    <div class="w-9/12">
      <h2>{{text}}</h2>
    </div>
    <ViewAll text="Alle ansehen"/>
    <div class="flex -mx-6">
      <ProjectCard/>
      <ProjectCard class="hidden md:block"/>
      <ProjectCard class="hidden lg:block"/>
    </div>
  </div>
</template>

<script>
import ViewAll from "./secondary/ViewAll";
import ProjectCard from "./secondary/ProjectCard";

export default {
  props: ["text"],
  components: {
    ViewAll,
    ProjectCard
  }
}
</script>

<style>

</style>