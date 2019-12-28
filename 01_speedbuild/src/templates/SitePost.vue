<template>
  <Layout>
    <h1>{{ $page.sitePost.title }}</h1>
    <div class="mt-6 flex flex-col lg:flex-row">
      <div class="w-full lg:w-2/3">
        <div v-html="$page.sitePost.content"/>
        <div class="mt-8 relative rounded-lg overflow-hidden shadow-md" style="padding-top: 56.25%;">
            <iframe class="absolute top-0 left-0 w-full h-full border-0" :src="`${$page.sitePost.youtube}?rel=0`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-8 lg:mt-0 lg:ml-4 flex-shrink-0 self-stretch">
        <div class="rounded-lg border-gray-300 border shadow-md">
          <div class="px-4 py-6">
            <a :href="$page.sitePost.speedbuildUrl" target="_blank" rel="noopener" class="block relative group">
              <g-image :src="$page.sitePost.image" :alt="`${$page.sitePost.title} Homepage`" class="rounded-lg border border-gray-300"/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="group mr-3 mb-3 absolute right-0 bottom-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all">
                <circle cx="12" cy="12" r="10" class="text-green-500 fill-current"></circle>
                <path class="text-white fill-current" d="M12,9.62a.6.6,0,0,1-.59.6H7.84v5.94h5.94V12.59a.6.6,0,0,1,.6-.59.59.59,0,0,1,.59.59v3.57a1.19,1.19,0,0,1-1.19,1.19H7.84a1.19,1.19,0,0,1-1.19-1.19V10.22A1.19,1.19,0,0,1,7.84,9h3.57A.59.59,0,0,1,12,9.62Z" />
                <path class="text-white fill-current" d="M16.16,8.68,10,14.8a.6.6,0,1,1-.9-.78s0,0,.07-.06l6.11-6.12H13.19a.6.6,0,1,1,0-1.19h3.56a.6.6,0,0,1,.6.6v3.56a.6.6,0,1,1-1.19,0Z" />
              </svg>
            </a>
          </div>
          <div class="px-4 py-6 border-t border-b border-gray-300">
            <div class="inline-block align-top">
              <a :href="$page.sitePost.url" target="_blank" rel="noopener" class="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                  <path class="text-gray-300 group-hover:text-gray-500 fill-current" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"></path>
                  <path class="text-gray-500 group-hover:text-gray-700 fill-current" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"></path>
                </svg>
                <span class="ml-1 text-gray-600 transition-all group-hover:text-gray-900">Original site</span>
              </a>
              <a :href="$page.sitePost.speedbuildUrl" target="_blank" rel="noopener" class="mt-3 flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                  <path class="text-gray-300 group-hover:text-gray-500 fill-current" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"></path>
                  <path class="text-gray-500 group-hover:text-gray-700 fill-current" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"></path>
                </svg>
                <span class="ml-1 text-gray-600 transition-all group-hover:text-gray-900">Speedbuild site</span>
              </a>
            </div>
          </div>
          <div class="px-4 py-6">
            <div class="flex">
              <div class="flex items-center bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
                  <path class="text-gray-500 fill-current" d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"></path>
                  <path class="text-gray-700 fill-current" d="M13 13h3v3h-3v-3zM7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"></path>
                </svg>
                <span class="inline-block ml-1">{{ $page.sitePost.date }}</span>
              </div>
              <div class="ml-2 flex items-center bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
                  <circle cx="12" cy="12" r="10" class="text-gray-500 fill-current"></circle>
                  <path class="text-gray-700 fill-current" d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"></path>
                </svg>
                <span class="inline-block ml-1">{{ $page.sitePost.duration }}</span>
              </div>
            </div>
            <div class="-ml-1 mt-3">
              <div v-for="tag in $page.sitePost.tags" :key="tag.id" class="inline-block mx-1 bg-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold rounded-full px-3 py-1">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block">
      <g-link to="/sites/" class="mt-8 flex items-center group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10">
          <circle cx="12" cy="12" r="10" class="text-green-500 group-hover:text-green-700 fill-current transition-all"></circle>
          <path class="text-white fill-current" d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"></path>
        </svg>
        <span class="ml-1 text-lg font-bold text-gray-500 transition-all group-hover:text-gray-900">All sites</span>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Site ($path: String!) {
	sitePost (path: $path) {
    title
    content
    date (format: "MMM Do YYYY")
    tags
    image (width: 700)
    duration
    url
    youtube
    speedbuildUrl
  }
}
</page-query>