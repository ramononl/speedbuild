<template>
  <div id="app">
    <div class="container mx-auto">
      <div class="mt-3 flex flex-wrap justify-between items-center">
        <h1 class="text-6xl font-bold">Die Jazz</h1>
        <div class="flex items-center">
          <img src="./assets/search.png" alt="">
          <input class="h-8 border-2 border-gray-900" type="search">
        </div>
      </div>
      <div class="mt-3 flex items-center">
        <div class="flex-shrink">
          <img src="./assets/divider.png" alt="">
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12" src="./assets/studium.png" alt="">
          <span class="text-xs font-bold font-serif">Studium</span>
        </div>
        <div class="ml-6 flex flex-col items-center">
          <img class="h-12" src="./assets/bachelor.png" alt="">
          <span class="text-xs font-bold font-serif">Bachelor</span>
        </div>
        <div class="flex-shrink">
          <img src="./assets/divider.png" alt="">
        </div>
      </div>
      <div class="mt-5">
        <div class="flex">
          <div class="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1562886832-b9ee449ae865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=395&q=80" alt="">
          </div>
          <div class="hidden md:block md:w-1/2">
            <img src="https://images.unsplash.com/photo-1573689275802-a98c0ec0391d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=395&q=80" alt="">
          </div>
        </div>
        <div class="mt-3 flex justify-center">
          <img src="./assets/controls.png" alt="">
        </div>
      </div>
      <div class="px-4">
        <div class="mt-4 flex">
          <div class="w-24 py-1 text-xs font-serif text-center font-bold border border-r-0 border-black text-white bg-black">Beste</div>
          <div class="w-24 py-1 text-xs font-serif text-center font-bold border border-r-0 border-black">Aktuellste</div>
          <div class="w-24 py-1 text-xs font-serif text-center font-bold border border-black">Beliebteste</div>
        </div>
        <div class="mt-6 flex">
          <main class="flex flex-wrap flex-col sm:flex-row">
            <div class="flex-shrink sm:w-1/2 xl:w-1/3" v-for="(image, index) in images" :key="index">
              <img :src="image" alt="">
            </div>
            <div class="flex-shrink self-center sm:w-1/2 xl:w-1/3 py-4 flex items-center justify-center">
              <div class="flex flex-col items-center">
                <div class="text-lg font-serif font-bold">348 Artikel</div>
                <div class="flex items-center mt-3 text-lg font-serif font-bold">
                  <img src="./assets/back.png" alt="">
                  <span class="mx-2 inline-block">1 von 16</span>
                  <img src="./assets/next.png" alt="">
                </div>
              </div>
            </div>
          </main>
          <aside class="hidden lg:block w-80 pl-4 flex-shrink-0">
            <div>
              <h3 class="text-lg font-serif font-bold border-b border-gray-900">Beste</h3>
              <div class="mt-3">
                <p class="text-sm text-gray-600 font-serif">Die unter «Beste» erscheinenden Beiträge sind eine Auswahl der Dozierenden des Moduls «Konvergent Produzieren», Studiengangsleiterin Ulrike Mothes und Thomas Weibel.</p>
                <p class="mt-3 text-sm text-gray-600 font-serif">Die zusätzlich mit der «Top»-Plakette gekennzeichneten Beiträge wurden anlässlich des jedes Jahr vom Institut für Multimedia Production (IMP) der Fachhochschule Graubünden veranstalteten <a href="#">Multimediafestivals</a> von einer Fachjury mit einem Digezz-Award ausgezeichnet.</p>
              </div>
            </div>
            <div>
              <h3 class="mt-8 text-lg font-serif font-bold border-b border-gray-900">Tags</h3>
              <div class="mt-3">
                <p class="text-sm text-gray-600 font-serif">After Effects Animation Audio bachelorarbeit Bern Bild Chur Design Digezz Event Film Foto Fotografie Geschichte Gesellschaft Graubünden Humor Illustrator Interview Kreativität Kunst MMP Multimedia Multimedia Production Musik Musikvideo Natur Photoshop Portrait Reisen Schweiz Social Media Sport Storytelling Tipps Tutorial Video Webseite website Zeichnen</p>
              </div>
            </div>
            <div>
              <h3 class="mt-8 text-lg font-serif font-bold border-b border-gray-900">Tweets</h3>
              <div class="mt-3">
                <div>
                  <p class="text-sm text-gray-600 font-serif">
                    <a href="#">@digezz_mmp</a>: Aiwasowski war ein russischer Maler aus dem heutigen Armenien. Gian-Berno Fark stolperte über eines seiner Werke un… https://t.co/oaoBvbmKFi
                  </p>
                  <p class="text-sm text-gray-600 font-serif"><a href="#">(about 5 hours ago)</a></p>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600 font-serif">
                    <a href="#">@digezz_mmp</a>: Aiwasowski war ein russischer Maler aus dem heutigen Armenien. Gian-Berno Fark stolperte über eines seiner Werke un… https://t.co/oaoBvbmKFi
                  </p>
                  <p class="text-sm text-gray-600 font-serif"><a href="#">(about 5 hours ago)</a></p>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600 font-serif">
                    <a href="#">@digezz_mmp</a>: Aiwasowski war ein russischer Maler aus dem heutigen Armenien. Gian-Berno Fark stolperte über eines seiner Werke un… https://t.co/oaoBvbmKFi
                  </p>
                  <p class="text-sm text-gray-600 font-serif"><a href="#">(about 5 hours ago)</a></p>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600 font-serif">
                    <a href="#">@digezz_mmp</a>: Aiwasowski war ein russischer Maler aus dem heutigen Armenien. Gian-Berno Fark stolperte über eines seiner Werke un… https://t.co/oaoBvbmKFi
                  </p>
                  <p class="text-sm text-gray-600 font-serif"><a href="#">(about 5 hours ago)</a></p>
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600 font-serif">
                    <a href="#">@digezz_mmp</a>: Aiwasowski war ein russischer Maler aus dem heutigen Armenien. Gian-Berno Fark stolperte über eines seiner Werke un… https://t.co/oaoBvbmKFi
                  </p>
                  <p class="text-sm text-gray-600 font-serif"><a href="#">(about 5 hours ago)</a></p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="mt-8 text-lg font-serif font-bold border-b border-gray-900">Links</h3>
              <div class="mt-3">
                <a href="#" class="block text-sm font-serif">Institut für Multimedia Production</a>
                <a href="#" class="mt-1 block text-sm font-serif">Multimediafestival</a>
                <a href="#" class="mt-1 block text-sm font-serif">Cassian: Krimiserie</a>
                <a href="#" class="mt-1 block text-sm font-serif">Tippicletta</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div class="mt-12">
        <img src="./assets/divider-full.png" alt="">
      </div>
      <footer class="mt-12 mb-24 sm:flex sm:flex-wrap">
        <div class="mt-8 lg:mt-0 sm:w-1/2 lg:w-1/4 px-6">
          <div class="text-xs uppercase font-bold font-serif text-gray-600">Kontakt</div>
          <div class="mt-4">
            <p class="text-xs font-serif text-gray-600">
              <a href="#">Fachhochschule Graubünden</a><br/>
              Institut für Multimedia Production<br/>
              Pulvermühlestrasse 57<br/>
              7000 Chur<br/>
              Schweiz
            </p>
            <p class="mt-3 text-xs font-serif text-gray-600">
              Tel. <a href="#">+41 (0)81 286 24 24</a><br/>
              <a href="#">imp@fhgr.ch</a>
            </p>
            <div class="mt-3">
              <img src="./assets/social.png" alt="">
            </div>
          </div>
        </div>
        <div class="mt-8 lg:mt-0 sm:w-1/2 lg:w-1/4 px-6">
          <div class="text-xs uppercase font-bold font-serif text-gray-600">Impressum</div>
          <div class="mt-4">
            <img src="https://via.placeholder.com/300x47?text=FHGR+Fachhochschule+Graubünden">
            <p class="mt-3 text-xs font-serif text-gray-600">
              Fachhochschule Graubünden<br/>
              Institut für Multimedia Production<br/>
              Pulvermühlestrasse 57<br/>
              CH-7000 Chur
            </p>
            <img class="mt-10 " src="https://via.placeholder.com/300x47?text=BFH+Berner+Fachhochschule">
            <p class="mt-3 text-xs font-serif text-gray-600">
              Berner Fachhochschule<br/>
              Hochschule der Künste Bern<br/>
              Fellerstrasse 11<br/>
              CH-3027 Bern
            </p>
          </div>
        </div>
        <div class="mt-8 lg:mt-0 sm:w-1/2 lg:w-1/4 px-6">
          <div class="text-xs uppercase font-bold font-serif text-gray-600">Über Digezz</div>
          <p class="mt-3 text-xs font-serif text-gray-600">
            «Digezz» ist die Produktionsplattform des Bachelor-Studiengangs «Multimedia Production» an der Fachhochschule Graubünden und der Berner Fachhochschule. Studierende produzieren auf dieser Plattform eigenständig multimediale Inhalte und erlangen so die nötige technische Kompetenz für ein multimediales Umfeld in Medien und Kommunikation.
          </p>
        </div>
        <div class="mt-8 lg:mt-0 sm:w-1/2 lg:w-1/4 px-6">
          <a href="#" class="text-xs font-bold font-serif uppercase">Nutzungsbedingungen</a><br/>
          <a href="#" class="text-xs font-bold font-serif uppercase">Login</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      images: [
        'https://images.unsplash.com/photo-1571909422584-585b9ee18b8f?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571824170220-1f6de1f5e300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571903427598-d008d16b46de?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571266882932-33f7c046a0c9?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572379641676-a0cdeb5a9506?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571614809518-b8f59e165300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571614809518-b8f59e165300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571899301133-e7ebf90ba591?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572830389282-a47600c8255a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571772555874-a24e310b63c1?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571909422584-585b9ee18b8f?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571824170220-1f6de1f5e300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571903427598-d008d16b46de?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571266882932-33f7c046a0c9?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572379641676-a0cdeb5a9506?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571614809518-b8f59e165300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571614809518-b8f59e165300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571899301133-e7ebf90ba591?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1572830389282-a47600c8255a?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571772555874-a24e310b63c1?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571614809518-b8f59e165300?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80',
        'https://images.unsplash.com/photo-1571899301133-e7ebf90ba591?ixlib=rb-1.2.1&q=80&fm=jpg&auto=format&fit=crop&w=700&h=395&q=80'
      ]
    }
  }
}
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  a {
    color: #1780a7;
  }
</style>
