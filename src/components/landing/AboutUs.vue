<script setup>
import clg from '@/assets/Image/clg-flag.jpg'
</script>
<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Left Side: Image -->
        <div class="w-full lg:w-1/2">
          <img
            :src="clg"
            class="rounded-lg shadow-lg w-full"
          />
        </div>

        <!-- Right Side: Content -->
        <div class="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
          <h2 class="text-3xl font-bold text-gray-800">
            About Our Polytechnic Institute
          </h2>
          <p class="text-gray-600 mt-4">
            Our institute is committed to providing top-quality technical education
            and hands-on experience to help students excel in their careers.
            With state-of-the-art laboratories, expert faculty, and industry partnerships,
            we prepare students for real-world challenges.
          </p>
          <ul class="mt-4 space-y-2 text-gray-700">
            <li class="flex items-center">
              ✅ Experienced & Skilled Faculty
            </li>
            <li class="flex items-center">
              ✅ Modern Labs & Workshops
            </li>
            <li class="flex items-center">
              ✅ 100% Placement Assistance
            </li>
            <li class="flex items-center">
              ✅ Strong Industry Collaborations
            </li>
          </ul>
          <button class="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
