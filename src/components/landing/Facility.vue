<script setup>
const facilities = [
  {
    title: "Modern Laboratories",
    description: "Well-equipped labs for hands-on learning in engineering and technology.",
    image: "/lab.jpg",
  },
  {
    title: "Library & E-Resources",
    description: "A vast collection of books, journals, and digital learning materials.",
    image: "/library.jpg",
  },
  {
    title: "Hostel & Accommodation",
    description: "Safe and comfortable hostel facilities for students from different regions.",
    image: "/hostel.jpg",
  },
  {
    title: "Sports & Recreation",
    description: "Well-maintained sports grounds, gym facilities, and recreational activities.",
    image: "/sports-facility.jpg",
  },
];
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Our Facilities</h2>
        <p class="text-gray-600 mt-2">Providing the best infrastructure for an enhanced learning experience.</p>
      </div>

      <!-- Facilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(facility, index) in facilities"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img :src="facility.image" :alt="facility.title" class="w-full h-48 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold text-gray-800">{{ facility.title }}</h3>
            <p class="text-gray-600 mt-2">{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
