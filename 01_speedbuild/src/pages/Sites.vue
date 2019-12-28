<template>
  <Layout>
    <h1>Sites</h1>
    <p>This is a list of all my speedbuilds sorted by date.</p>
    <div class="mt-10">
      <div v-for="edge in $static.allSitePost.edges" :key="edge.node.id" class="mt-5 group">
        <g-link :to="edge.node.path">
          <article class="flex justify-between items-center px-4 py-3 rounded border-gray-300 border hover:bg-gray-100 shadow hover:shadow-md transition-all">
            <div class="sm:flex sm:items-center">
              <div class="flex items-baseline sm:block">
                <h2>{{ edge.node.title }}</h2>
                <span class="text-sm sm:text-base ml-2 sm:ml-0">{{ edge.node.date }}</span>
              </div>
              <div class="-ml-1 sm:ml-8 sm:flex">
                <div class="inline-block">
                  <div class="flex items-center mx-1 mt-3 sm:mt-0 bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
                      <circle cx="12" cy="12" r="10" class="text-gray-500 fill-current"></circle>
                      <path class="text-gray-700 fill-current" d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"></path>
                    </svg>
                    <span class="inline-block ml-1">{{ edge.node.duration }}</span>
                  </div>
                </div>
                <div>
                  <div v-for="tag in edge.node.tags" :key="tag.id" class="inline-block">
                    <div class="mx-1 mt-3 sm:mt-0 bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10">
              <circle cx="12" cy="12" r="10" class="text-green-500 group-hover:text-green-700 fill-current transition-all"></circle>
              <path class="text-white fill-current" d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z"></path>
            </svg>
          </article>
        </g-link>
      </div>
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
        date (format: "MMM Do YYYY")
        path
        tags
        duration
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Sites'
  }
}
</script>
