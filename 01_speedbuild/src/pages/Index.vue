<template>
  <Layout>

    <h1>Rapid prototyping with code</h1>

    <p>How fast can I replicate the frontend part of other websites with my own tools?</p>

    <div class="mt-4 -mx-4 flex flex-wrap">
      <Card v-for="edge in $static.allSitePost.edges" :key="edge.node.id" :cardData="edge.node"/>
    </div>

  </Layout>
</template>

<static-query>
query AllSites {
  allSitePost (sortBy: "date", order: ASC) {
    edges {
      node {
        id
        title
        path
        duration
        preview
        image (width: 550)
      }
    }
  }
}
</static-query>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>

</style>
