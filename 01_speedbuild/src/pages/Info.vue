<template>
  <Layout>
    <h1>Info</h1>
    <h2>Tools</h2>
    <p>
      <a href="https://tailwindcss.com/" target="_blank">Tailwind</a> – utility-first CSS framework<br>
      <a href="https://vuejs.org/" target="_blank">Vue.js</a> – progressive JavaScript framework<br>
      <a href="https://gridsome.org/" target="_blank">Gridsome</a> – Vue.js framework<br>
      <a href="https://unsplash.com/" target="_blank">Unsplash</a> – Beautiful Free Images & Pictures<br>
      <a href="https://picsum.photos/" target="_blank">Lorem Picsum</a> – Lorem Ipsum for photos<br>
      <a href="https://placeholder.com/" target="_blank">Placeholder.com</a> – Free Image Placeholder Service<br>
      <a href="https://www.netlify.com/" target="_blank">Netlify</a> – Platform for modern web projects<br>
    </p>
    <h2>Project</h2>
    <p>A project by Ramon Kratzer. Multimedia Production, Fachhochschule Graubünden, Digezz.</p>
    <g-image class="rounded-lg mt-6" src="~/assets/background.png" width="1120" quality="100"/>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Info'
  }
}
</script>

<style lang="postcss" scoped>
  h2 {
    @apply pt-6;
  }

  p {
    @apply pt-2;
  }

  a {
    @apply font-bold;
  }
</style>
