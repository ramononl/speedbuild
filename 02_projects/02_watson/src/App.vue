<template>
  <div id="app">
    <header class="bg-gray-900">
      <div class="border-b border-gray-700">
        <div class="flex justify-between items-center max-w-5xl mx-auto py-2 px-4 lg:px-0">
          <div class="flex items-center">
            <h1 class="text-4xl font-semibold text-white leading-none">watson</h1>
            <div class="ml-4 flex items-center">
              <div class="w-8">
                <img src="./assets/weather.svg" alt="">
              </div>
              <div class="ml-2 text-white text-xs">6°</div>
            </div>
          </div>
          <div>
            <div class="w-8">
              <img src="./assets/icon_navi.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-5xl mx-auto py-2 hidden lg:block shadow-md lg:shadow-none">
        <ul class="flex list-none text-lg text-green-500">
          <li class="mr-4">Schweiz</li>
          <li class="mr-4">International</li>
          <li class="mr-4">Wirtschaft</li>
          <li class="mr-4">Sport</li>
          <li class="mr-4">Leben</li>
          <li class="mr-4">Spass</li>
          <li class="mr-4">Digital</li>
          <li class="mr-4">Wissen</li>
          <li class="mr-4">Blogs</li>
          <li class="mr-4">Videos</li>
          <li class="">Wettbewerbe</li>
        </ul>
      </div>
    </header>
    <main class="max-w-5xl mx-auto my-5 px-4 lg:px-0">
      <div class="flex flex-wrap justify-center sm:justify-start sm:flex-no-wrap -mx-2">
        <div class="mx-2 sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575013685446-86c46920b064?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <span class="uppercase font-bold bg-pink-600 text-white inline-block leading-none p-1 text-sm">Interview</span>
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1576982149175-aa2bb9d12507?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap justify-around sm:justify-start sm:flex-no-wrap -mx-2">
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575302136415-907c5c4e6777?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575545060320-1650ef4aab87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575931391284-a1b0a8198b2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center sm:justify-start sm:flex-no-wrap -mx-2 mt-8">
        <div class="mx-2 sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1576124035632-085fc6cea839?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1576172871722-e5ab078f3ce2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <span class="uppercase font-bold bg-purple-600 text-white inline-block leading-none p-1 text-sm">Interview</span>
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
      <div class="flex flex-wrap sm:flex-no-wrap mt-6">
        <div class="w-full sm: w-auto sm:flex-1 flex items-center shadow-md lg:shadow-none">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1577037357208-3cfdb4ca751c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
        <div class="w-full sm: w-auto sm:flex-1 flex items-center shadow-md lg:shadow-none">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1575327297321-dc6ad09a7318?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
        <div class="flex-1 hidden lg:flex items-center shadow-md lg:shadow-none">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1576169899988-06de74b76e70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
      </div>
      <div class="flex flex-wrap sm:flex-no-wrap mt-3">
        <div class="w-full sm: w-auto sm:flex-1 flex items-center shadow-md lg:shadow-none">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1575898311302-0d04de38c259?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
        <div class="w-full sm: w-auto sm:flex-1 flex items-center shadow-md lg:shadow-none">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1575794887398-82cf950e43d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
        <div class="flex-1 hidden lg:flex it shadow-md lg:shadow-noneems-center">
          <img class="shadow-md w-24 lg:w-auto" src="https://images.unsplash.com/photo-1577055723931-68faa56cc99a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=165&h=165&fit=crop" alt="">
          <h3 class="mx-2 font-bold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ab.</h3>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap justify-around sm:justify-start sm:flex-no-wrap -mx-2">
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575302136415-907c5c4e6777?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575545060320-1650ef4aab87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575931391284-a1b0a8198b2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-blue-500 text-3xl font-bold uppercase border-b border-gray-400">Im Bild</h2>
        <div class="bg-gray-900 flex justify-center mt-4 relative">
          <img class="max-w-3xl h-64 sm:h-auto" src="https://images.unsplash.com/photo-1576085670092-1c86036e7a47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1224&h=900&fit=crop" alt="">
          <h2 class="absolute bottom-0 left-0 pl-5 pb-5 leading-tight text-white text-3xl lg:text-5xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-blue-500 text-3xl font-bold uppercase border-b border-gray-400">Videos</h2>
        <div class="bg-gray-300 sm:flex mt-4">
          <div class="sm:w-2/3 border-b-4 sm:border-b-0 sm:border-r-4 border-pink-600 relative flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1576699204553-e716091b031c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=873&h=491&fit=crop" alt="">
            <div class="absolute inset-0">
              <div class="h-full flex justify-center items-center">
                <img class="rounded-full w-16" src="./assets/arrow_video_play.png" alt="">
              </div>
            </div>
          </div>
          <div class="sm:w-1/3 p-4">
            <h2 class="leading-tight text-lg lg:text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae ducimus sit accusantium qui, dolorem tempora explicabo.</p>
            <span class="mt-2 block text-gray-700 text-xs">20.12.19, 15:17</span>
            <span class="mt-2 block text-gray-700 text-xs italic">video: watson</span>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap sm:flex-no-wrap justify-around sm:justify-start -mx-2">
        <div class="mx-2 sm:flex-1 w-5/12 sm:w-auto">
          <div class="relative">
            <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575302136415-907c5c4e6777?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
            <span class="text-shadow-md absolute bottom-0 left-0 mb-2 ml-2 leading-none inline-block text-white font-bold text-xs">Video</span>
          </div>
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
        </div>
        <div class="mx-2 sm:flex-1 w-5/12 sm:w-auto">
          <div class="relative">
            <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575545060320-1650ef4aab87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
            <span class="text-shadow-md absolute bottom-0 left-0 mb-2 ml-2 leading-none inline-block text-white font-bold text-xs">Video</span>
          </div>
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde?</h2>
        </div>
        <div class="mx-2 sm:flex-1 w-5/12 sm:w-auto">
          <div class="relative">
            <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575931391284-a1b0a8198b2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
            <span class="text-shadow-md absolute bottom-0 left-0 mb-2 ml-2 leading-none inline-block text-white font-bold text-xs">Video</span>
          </div>
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde?</h2>
        </div>
        <div class="mx-2 sm:flex-1 w-5/12 sm:w-auto">
          <div class="relative">
            <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1576092760739-f0c1ee8c9a59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
            <span class="text-shadow-md absolute bottom-0 left-0 mb-2 ml-2 leading-none inline-block text-white font-bold text-xs">Video</span>
          </div>
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde?</h2>
        </div>
      </div>
      <div class="flex flex-wrap justify-around lg:justify-start lg:flex-no-wrap -mx-2">
        <div class="mt-8 flex-shrink w-full sm:px-0 sm:w-5/12 lg:w-auto lg:flex-1 mx-2">
          <h3 class="font-bold uppercase text-pink-600">Meistgelesen</h3>
          <div class="mt-1 shadow-lg">
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>1</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>2</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>3</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>4</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>5</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
          </div>
        </div>
        <div class="mt-8 flex-shrink w-full sm:px-0 sm:w-5/12 lg:w-auto lg:flex-1 mx-2">
          <h3 class="font-bold uppercase text-pink-600">Meistkommentiert</h3>
          <div class="mt-1 shadow-lg">
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>1</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>2</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>3</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>4</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>5</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
          </div>
        </div>
        <div class="mt-8 flex-shrink w-full sm:px-0 sm:w-5/12 lg:w-auto lg:flex-1 mx-2">
          <h3 class="font-bold uppercase text-pink-600">Meistgeteilt</h3>
          <div class="mt-1 shadow-lg">
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>1</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>2</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>3</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center border-b border-gray-400">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>4</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
            <div class="h-12 flex items-center">
              <div class="flex-none flex items-center justify-center h-full bg-gray-300 w-12 text-3xl font-bold leading-none">
                <span>5</span>
              </div>
              <p class="p-2 text-sm font-bold leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap justify-center sm:justify-start sm:flex-no-wrap -mx-2">
        <div class="mx-2 sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575013685446-86c46920b064?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <span class="uppercase font-bold bg-pink-600 text-white inline-block leading-none p-1 text-sm">Interview</span>
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1576982149175-aa2bb9d12507?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=660&fit=crop" alt="">
          <h2 class="font-bold text-2xl leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap justify-around sm:justify-start sm:flex-no-wrap -mx-2">
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575302136415-907c5c4e6777?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero?</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575545060320-1650ef4aab87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
        <div class="mx-2 w-5/12 sm:w-auto sm:flex-1 mt-4 sm:mt-0">
          <img class="shadow-md mb-2" src="https://images.unsplash.com/photo-1575931391284-a1b0a8198b2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=330&h=165&fit=crop" alt="">
          <h2 class="font-bold text-lg leading-tight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde? Eum, recusandae ducimus!</h2>
          <div class="mt-1 font-bold text-sm text-gray-500">von Lorem ipsum</div>
        </div>
      </div>
    </main>
    <footer class="mt-12 max-w-5xl mx-auto border-t border-gray-400 pt-5 pb-8 text-sm text-gray-500">
      <div class="flex flex-wrap justify-center">
        <div class="border-r mt-3 leading-none border-gray-400 px-2">Hol dir die App!</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">watson auf Facebook</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">Newsletter</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">Werbung</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">Über uns</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">Impressum</div>
        <div class="border-r mt-3 leading-none border-gray-400 px-2">AGB</div>
        <div class="mt-3 leading-none px-2">Datenschutz</div>
      </div>
    </footer>
    <div class="hidden lg:block w-12 h-12 fixed bottom-0 left-0 mb-4 ml-4 bg-pink-600 rounded-full shadow-md overflow-hidden">
      <img src="./assets/icon_profile.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.10);
  }

  .text-shadow-md {
    text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
  }

  .text-shadow-lg {
    text-shadow: 0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08);
  }

  .text-shadow-none {
    text-shadow: none;
  }
</style>
