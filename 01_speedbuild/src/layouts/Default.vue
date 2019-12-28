<template>
  <div class="layout">
    <header class="md:h-96">
      <div class="py-6 md:py-8 px-8 md:px-20 container mx-auto md:flex md:justify-between">
        <div class="flex justify-between items-center">
          <g-link to="/">
            <LogoComp/>
          </g-link>
          <button @click="isOpen = !isOpen" type="button" class="md:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current">
              <path v-if="!isOpen" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              <path v-if="isOpen" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"></path>
            </svg>
          </button>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="md:flex md:items-center pt-4 md:p-0">
          <g-link class="block mt-2 md:mt-0 py-2 rounded border border-transparent px-2 md:py-1 text-lg text-white hover:text-gray-500" to="/">Home</g-link>
          <g-link class="block mt-2 md:mt-0 py-2 rounded border border-transparent px-2 md:py-1 md:ml-6 text-lg text-white hover:text-gray-500" to="/sites/">Sites</g-link>
          <g-link class="block mt-2 md:mt-0 py-2 rounded border border-transparent px-2 md:py-1 md:ml-6 text-lg text-white hover:text-gray-500" to="/info/">Info</g-link>
        </nav>
      </div>
    </header>
    <div class="container md:-mt-64 mx-auto">
      <div class="md:mx-4 px-8 md:px-16 py-12 md:py-20 bg-white md:rounded-lg md:shadow-lg">
        <transition name="fade" appear>
          <main>
            <slot/>
          </main>
        </transition>
      </div>
    </div>
    <footer class="flex justify-center items-center my-10">
      <span class="text-sm text-gray-600">Ramon Kratzer, 2019</span>
      <a href="https://ramon.onl" title="Portfolio" target="_blank" rel="noopener" class="ml-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="group w-6 h-6">
          <circle cx="12" cy="12" r="10" class="text-gray-500 transition-all group-hover:text-gray-800 fill-current"></circle>
          <path class="text-gray-400 transition-all group-hover:text-gray-600 fill-current" d="M2.05 11A10 10 0 0 1 15 2.46V6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-1 1.73V12h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2.14A9.97 9.97 0 0 1 12 22v-4h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1-2-2v-1H2.05z"></path>
        </svg>
      </a>
      <a href="https://twitter.com/ramononl" title="Twitter" target="_blank" rel="noopener" class="ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 hover:text-gray-700 transition-all">
          <path class="fill-current" d="M8.25 20.21A11.71 11.71 0 0020 8.42v-.54a8.42 8.42 0 002.1-2.14 8.22 8.22 0 01-2.38.65 4.19 4.19 0 001.82-2.29 8.29 8.29 0 01-2.63 1 4.14 4.14 0 00-7.06 3.78 11.72 11.72 0 01-8.54-4.33 4.15 4.15 0 001.28 5.53 4.12 4.12 0 01-1.88-.51A4.15 4.15 0 006 13.68a4 4 0 01-1.1.15 3.94 3.94 0 01-.77-.08A4.13 4.13 0 008 16.63a8.34 8.34 0 01-5.11 1.77h-1a11.79 11.79 0 006.35 1.86" />
        </svg>
      </a>
      <a href="https://github.com/ramononl/speedbuild" title="GitHub Repo" target="_blank" rel="noopener" class="ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 text-gray-500 hover:text-gray-700 transition-all">
          <path class="fill-current" d="M12,2A10,10,0,0,0,8.84,21.48c.5.09.69-.21.69-.47s0-1,0-1.87C7,19.61,6.35,18.53,6.15,18a3.57,3.57,0,0,0-1-1.41c-.35-.19-.85-.65,0-.66a2,2,0,0,1,1.54,1,2.13,2.13,0,0,0,2.91.82,2.08,2.08,0,0,1,.64-1.33C8,16.16,5.65,15.3,5.65,11.47a3.84,3.84,0,0,1,1-2.68,3.6,3.6,0,0,1,.1-2.65s.83-.27,2.75,1a9.32,9.32,0,0,1,5,0c1.92-1.3,2.75-1,2.75-1a3.6,3.6,0,0,1,.1,2.65,3.82,3.82,0,0,1,1,2.68c0,3.84-2.34,4.69-4.56,4.94a2.37,2.37,0,0,1,.67,1.85c0,1.33,0,2.41,0,2.75s.19.57.69.47A10,10,0,0,0,12,2Z" />
        </svg>
      </a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import LogoComp from "~/components/LogoComp.vue";

  export default {
    components: {
      LogoComp
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
</script>

<style lang="postcss">
  header {
    @apply bg-gray-800;
  }
  @screen md {
    header {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234a5568' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }
  h1 {
    @apply w-4/5 text-3xl leading-tight font-bold text-gray-800;
  }
  h2 {
    @apply text-xl font-bold text-gray-800;
  }
  p {
    @apply text-gray-700 pt-6;
  }
  p:first-child {
    @apply pt-0;
  }
  a {
    @apply text-gray-500 transition-all;
  }
  a:hover {
    @apply text-gray-900;
  }
  span {
    @apply text-gray-700;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }

  .active--exact {
    @apply border-gray-500 text-gray-500;
  }

  ul {
    @apply list-disc list-inside text-gray-700;
  }
</style>
