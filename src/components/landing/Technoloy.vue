<script setup>
import Architecture from '@/assets/Image/Architecture-logo.png';
import Civil from '@/assets/Image/Civil-logo.jpg';
import Computer from '@/assets/Image/Computer-logo1.png';
import Electronic from '@/assets/Image/Electronic-logo2.png';

const technologies = [
  {
    name: 'Computer',
    image: Computer,
  },
  {
    name: 'Civil',
    image: Civil,
  },
  {
    name: 'Electronic',
    image: Electronic,
  },
  {
    name: 'Architecture',
    image: Architecture,
  },
]
</script>
<template>
  <div class="w-10/12 mx-auto my-8">
    <div
          class="max-w-screen mb-4 lg:mb-12 flex flex-col"
        >
          <h2 class="mb-4 mx-auto text-4xl tracking-tight font-extrabold text-red-500  ">
            Technology
            <hr class="w-20 h-1 mx-auto bg-red-600 border-0 rounded mt-4 "></hr>
          </h2>
          </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
    <!-- Loop through the technologies array -->
    <div
      v-for="tech in technologies"
      :key="tech.name"
      class="relative bg-white rounded-lg shadow-lg overflow-hidden group transition ease-linear duration-200 hover:scale-105"
    >
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-red-200 z-0 transform origin-top transition-transform duration-300 scale-y-0 group-hover:scale-y-100"></div>

      <!-- Technology Image -->
      <div class="p-4 flex justify-center items-center h-48 relative z-10">
        <img :src="tech.image" :alt="tech.name" class="max-h-28 w-full bg-cover bg-center" />
      </div>

      <!-- Technology Name -->
      <div class="p-4 bg-gray-100 relative z-10">
        <h3 class="text-xl font-semibold text-center text-gray-800">
          {{ tech.name }}
        </h3>
      </div>
    </div>
  </div>
</div>
</template>
