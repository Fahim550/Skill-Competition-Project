<script setup>
// Array of teachers
const teachers = [
  {
    name: 'John Doe',
    subject: 'Mathematics',
    description: 'Expert in algebra and calculus with 10+ years of teaching experience.',
    image: 'https://via.placeholder.com/300',
    social: {
      email: 'john.doe@example.com',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    description: 'Passionate about teaching quantum mechanics and astrophysics.',
    image: 'https://via.placeholder.com/300',
    social: {
      email: 'jane.smith@example.com',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    name: 'Alice Johnson',
    subject: 'Computer Science',
    description: 'Specializes in programming, algorithms, and machine learning.',
    image: 'https://via.placeholder.com/300',
    social: {
      email: 'alice.johnson@example.com',
      twitter: 'https://twitter.com/alicejohnson',
    },
  },
  {
    name: 'Michael Brown',
    subject: 'Chemistry',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/194f0270_23b1_442c_a149_a5650eb42541/2023-12-19-15-06-48ded9d4b2536d850e233139e8464d3c.jpg',
    social: {
      email: 'michael.brown@example.com',
      linkedin: 'https://linkedin.com/in/michaelbrown',
    },
  },
]
</script>
<template>
  <div class="bg-gray-100 py-2">


  <div class="w-10/12 mx-auto ">
    <div
          class="max-w-screen mb-4 lg:mb-12 flex flex-col"
        >
          <h2 class="mb-4 mx-auto text-4xl tracking-tight font-extrabold text-red-500  ">
            Teachers
            <hr class="w-20 h-1 mx-auto bg-red-600 border-0 rounded mt-4 "></hr>
          </h2>
          </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
    <!-- Loop through the teachers array -->
    <div
      v-for="teacher in teachers"
      :key="teacher.name"
      class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <!-- Teacher Image -->
      <div class="relative h-52 overflow-hidden">
        <img :src="teacher.image" :alt="teacher.name" class="w-full h-full bg-cover bg-center object-cover" />
      </div>

      <!-- Teacher Details -->
      <div class="p-4">
        <!-- Name and Subject -->
        <h3 class="text-xl font-semibold text-gray-800">{{ teacher.name }}</h3>
        <p class="text-sm text-gray-600">{{ teacher.subject }}</p>

        <!-- Short Description -->
        <p class="mt-2 text-sm text-gray-600">
          {{ teacher.description }}
        </p>

        <!-- Social Links (Optional) -->
        <div class="mt-4 flex space-x-4">
          <a
            v-if="teacher.social?.email"
            :href="`mailto:${teacher.social.email}`"
            class="text-gray-500 hover:text-blue-500"
          >
            <i class="pi pi-envelope text-lg"></i>
          </a>
          <a
            v-if="teacher.social?.linkedin"
            :href="teacher.social.linkedin"
            target="_blank"
            class="text-gray-500 hover:text-blue-500"
          >
            <i class="pi pi-linkedin text-lg"></i>
          </a>
          <a
            v-if="teacher.social?.twitter"
            :href="teacher.social.twitter"
            target="_blank"
            class="text-gray-500 hover:text-blue-500"
          >
            <i class="pi pi-twitter text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
