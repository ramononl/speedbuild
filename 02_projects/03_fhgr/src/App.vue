<template>
  <div id="app">
    <HeaderMenu/>
    <div class="max-w-7xl mx-auto mt-12 md:mt-32 px-10 mb-16">
      <HeaderIntro/>
      <EventsSection/>
      <OfferSection title="Als Absolventin oder Absolvent unserer Studienangebote sind Sie gefragt."/>
      <OfferSection title="Unsere Weiterbildungsangebote werden laufend an die Bedürfnisse der Wirtschaft angepasst."/>
      <NewsSection/>
      <ProjectsSection text="Unsere Forschung findet für Sie massgeschneiderte Lösungen zu lokalen und globalen Themen."/>
      <ProjectsSection text="Ihre Projekte profitieren von unserem Fachwissen und unserer Infrastruktur."/>
    </div>
    <BottomInfos/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu";
import HeaderIntro from "./components/HeaderIntro";
import EventsSection from "./components/EventsSection";
import OfferSection from "./components/OfferSection";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";
import BottomInfos from "./components/BottomInfos";
import FooterSection from "./components/FooterSection";

export default {
  name: 'app',
  components: {
    HeaderMenu,
    HeaderIntro,
    EventsSection,
    OfferSection,
    NewsSection,
    ProjectsSection,
    BottomInfos,
    FooterSection
  }
}
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  h2 {
    @apply text-3xl font-thin text-gray-900 leading-tight;
  }

  @screen sm {
    h2 {
      @apply text-4xl
    }
  }
  
  @screen lg {
    h2 {
      @apply text-5xl
    }
  }
</style>
