<script setup>
const activities = [
  {
    title: "Technical Workshops",
    description: "Hands-on training sessions with industry experts to enhance technical skills.",
    image: "/workshop.jpg",
  },
  {
    title: "Sports & Fitness",
    description: "Annual sports events, gym facilities, and inter-college competitions.",
    image: "/sports.jpg",
  },
  {
    title: "Innovation & Research",
    description: "Encouraging students to work on innovative projects and research initiatives.",
    image: "/research.jpg",
  },
  {
    title: "Cultural Events",
    description: "Engaging cultural programs, music, dance, and drama performances.",
    image: "/cultural.jpg",
  },
];
</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Student Activities</h2>
        <p class="text-gray-600 mt-2">Explore various student engagement programs and events.</p>
      </div>

      <!-- Activities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img :src="activity.image" :alt="activity.title" class="w-full h-48 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold text-gray-800">{{ activity.title }}</h3>
            <p class="text-gray-600 mt-2">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
