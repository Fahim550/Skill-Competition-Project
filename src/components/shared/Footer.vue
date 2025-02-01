<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">About Us</h3>
          <p class="text-gray-400">
            Our Polytechnic Institute is dedicated to providing high-quality technical education,
            modern facilities, and hands-on training.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="text-gray-400 space-y-2">
            <li><a href="#" class="hover:text-blue-400">Home</a></li>
            <li><a href="#" class="hover:text-blue-400">About Us</a></li>
            <li><a href="#" class="hover:text-blue-400">Courses</a></li>
            <li><a href="#" class="hover:text-blue-400">Admissions</a></li>
            <li><a href="#" class="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <p class="text-gray-400">123 Polytechnic Road, City, Country</p>
          <p class="text-gray-400 mt-2">Email: contact@polytechnic.edu</p>
          <p class="text-gray-400 mt-2">Phone: +123 456 7890</p>

          <!-- Social Media Icons -->
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-400 hover:text-blue-400"
              ><i class="fab fa-facebook text-2xl"></i
            ></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"
              ><i class="fab fa-twitter text-2xl"></i
            ></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"
              ><i class="fab fa-instagram text-2xl"></i
            ></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"
              ><i class="fab fa-linkedin text-2xl"></i
            ></a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Polytechnic Institute. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style>
/* Include FontAwesome for social media icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
