<script setup>
const achievements = [
  {
    title: "Best Polytechnic Award",
    description: "Recognized as the top institute in technical education.",
    image: "/award-icon.png",
  },
  {
    title: "10,000+ Graduates",
    description: "Empowering students with technical skills for the future.",
    image: "/graduates-icon.png",
  },
  {
    title: "95% Placement Rate",
    description: "Top recruiters hire our skilled students every year.",
    image: "/placement-icon.png",
  },
  {
    title: "50+ Research Projects",
    description: "Innovative projects making an impact in the industry.",
    image: "/innovation-icon.png",
  },
];
</script>

<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Our Achievements</h2>
        <p class="text-gray-600 mt-2">Proud moments of excellence and success.</p>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="bg-gray-100 rounded-lg p-6 shadow-lg flex flex-col items-center"
        >
          <img :src="achievement.image" :alt="achievement.title" class="w-16 h-16 mb-4" />
          <h3 class="text-xl font-bold text-gray-800">{{ achievement.title }}</h3>
          <p class="text-gray-600 text-center mt-2">{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
