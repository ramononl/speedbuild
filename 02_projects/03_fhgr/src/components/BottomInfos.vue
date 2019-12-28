<template>
  <div class="mt-48">
    <div class="relative negative-margin">
      <div class="triangle-wrapper">
        <div class="triangle"></div>
      </div>
      <div class="bg-fhgr-500 px-10 py-12">
        <div class="text-white font-light md:flex">
          <div class="md:w-8/12 mb-10 md:mb-0">
            <h3 class="text-2xl">Fachhochschule Graubünden</h3>
            <div class="lg:flex mt-6">
              <div class="flex-1 pr-6">
                <p>Die FH Graubünden ist eine innovative und unternehmerische Fachhochschule mit über 2000 Studierenden. Sie bildet verantwortungsvolle Fach- und Führungskräfte aus. Als regional verankerte Fachhochschule überzeugt sie mit ihrer persönlichen Atmosphäre über die Kantons- und Landesgrenze hinaus. Die FH Graubünden bietet Bachelor-, Master- und Weiterbildungsangebote in Architektur, Bauingenieurwesen, Digital Science, Management, Mobile Robotics, Multimedia Production, Photonics, Service Design sowie Tourismus an.</p>
              </div>
              <div class="flex-1 pr-6">
                <p>In diesen Disziplinen betreibt sie auch angewandte Forschung und trägt mit dieser zu Innovationen, Wissen und Lösungen für die Gesellschaft bei. Die FH Graubünden ist seit dem Jahr 2000 Teil der FHO Fachhochschule Ostschweiz. Mit der vom Bundesrat gesprochenen Beitragsberechtigung wird sie per 1. Januar 2020 die achte öffentlich-rechtliche Fachhochschule der Schweiz sein. Bereits 1963 begann ihre Geschichte mit der Gründung des Abendtechnikums Chur. fhgr.ch</p>
              </div>
            </div>
          </div>
          <div class="md:w-4/12 flex md:justify-end pr-10">
            <div>
              <h3 class="text-2xl">Service Links</h3>
              <ul class="mt-6">
                <li class="pb-4">Kontakt, Öffnungszeiten, Lageplan</li>
                <li class="pb-4">Newsletter anmelden</li>
                <li class="pb-4">Adressänderung durchführen</li>
                <li class="pb-4">Unterlagen bestellen</li>
                <li class="pb-4">Publikationen</li>
                <li class="pb-4">Blog FH Graubünden</li>
                <li class="pb-4">Offene Stellen</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <img src="../assets/icons-social.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="postcss">
  .negative-margin {
    margin-top: -50px;
    padding-top: 50px;
  }
  .triangle-wrapper {
    position: absolute;
    top: calc(-5vw + 50px);
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  .triangle {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 5vw solid #7A7760;
    border-left: 100vw solid transparent;
  }
</style>