<script setup>
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
const modules = [EffectFade, Autoplay, Pagination, Navigation]
// Array of teachers
const teachers = [
  {
    name: 'Engr. Ajm Masudur Rahman',
    subject: 'Principle',
    description: 'Expert in algebra and calculus with 10+ years of teaching experience.',
    image: 'https://i.ibb.co.com/Cps5HWzR/Principal-Sir.jpg',
    social: {
      email: 'john.doe@example.com',
      phone: '01749-434851',
    },
  },
  {
    name: 'Mustafijur Rahman',
    subject: 'Vice-Principle',
    description: 'Passionate about teaching quantum mechanics and astrophysics.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/officer_list/72fd571f_32aa_4186_b433_5496f5cac099/2024-05-15-06-18-9199d3b524838c6680a62f69c0ed3f90.jpg',
    social: {
      email: 'mustafijar@gmail.com',
      phone: '01721900735',
    },
  },
  {
    name: 'Homayun Kabir',
    subject: 'Vice-Principle',
    description: 'Specializes in programming, algorithms, and machine learning.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/officer_list/c6de6b03_1cc2_4b70_8e17_01ea1ac13fbe/2024-05-15-06-23-b312f3e8f0af8decd7445a0334400fa9.jpg',
    social: {
      email: 'homayunkabir172@gmail.com',
      phone: '01818696945',
    },
  },
  {
    name: 'Mohammad Selim',
    subject: 'Chif Instructor Computer',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/194f0270_23b1_442c_a149_a5650eb42541/2023-12-19-15-06-48ded9d4b2536d850e233139e8464d3c.jpg',
    social: {
      email: 'engrcseselim@gmail.com',
      phone: '01636569498',
    },
  },
  {
    name: 'Mohammad Meherul karim',
    subject: 'Chif Instructor Computer',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/ae6e7b91_9adf_4a2e_8c15_aebb57de553d/2023-12-19-18-08-2f5cd3957778ec7318155e96eab5955a.jpg',
    social: {
      email: 'cpimeher@gmail.com',
      phone: '01819-945267',
    },
  },
  {
    name: 'Sakil Ahmed Chowdhury',
    subject: 'Chif Instructor Electronics',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/16d638d6_2af2_4504_aab5_3d6906ea36bd/2024-01-02-06-38-1eeca1c0d1f1655f4062ca34cf6ae1fc.jpg',
    social: {
      email: 'shakil05517@gmail.com',
      phone: '01716-440759',
    },
  },
  {
    name: 'Md. Ahsan Kabir',
    subject: 'Chif Instructor Civil',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/0029418b_5bbe_4f73_ad51_d35902643a50/2023-12-19-18-40-32e788d834039498af61b3d233643e96.jpg',
    social: {
      email: 'kabirahsan736@gmail.com',
      phone: '01552423313',
    },
  },
  {
    name: 'Jannatun Nahar Deepti',
    subject: 'Chif Instructor Architecture',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/a8856751_f3e4_4763_a3c1_97d8c61ea28d/2023-12-19-18-45-c9f0e454c2834750669ece37318dab40.jpg',
    social: {
      email: 'jndipti@gmail.com',
      phone: '01913-522732',
    },
  },
  {
    name: 'A S M Farhadul Alam',
    subject: 'Chif Instructor Non-Tech',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/4ad5c36a_1db3_46f5_be12_d23e6e4562d6/2024-09-27-09-46-5c95b60e2775a2be7082cee482a68825.jpg',
    social: {
      email: 'asmforhadulalam@gmail.com',
      phone: '01714783096',
    },
  },
  {
    name: 'Mohammad Saifuzzaman',
    subject: 'Instructor Computer',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/8e26dcc9_7172_4e3b_8543_81a3a2a4c202/2023-12-19-18-49-62a13073229e1151b5b8238e24f3f4d6.jpg',
    social: {
      email: 'saifuzzmn@gmail.com',
      phone: '01721449923',
    },
  },
  {
    name: 'Md. Mahmudul Hasan Naeem',
    subject: 'Instructor Computer',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/25fd7135_f8a6_428d_8c44_27071c298ada/2024-01-30-04-21-38f8bceeced20f960962ad2d0fe7d0e8.jpeg',
    social: {
      email: 'nayemndc@gmail.com',
      phone: '01924169479',
    },
  },
  {
    name: 'Sheikh Jasim Uddin',
    subject: 'Instructor Non-Tech',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/cb491f31_8f50_4679_9c37_29b2f040b218/2023-12-19-19-26-720edb6a2ca0c864c5918fc1e63ba1f8.jpg',
    social: {
      email: 'jasim38instructor@gmail.com',
      phone: '01718400466',
    },
  },
  {
    name: 'Md. Ashanur Rahman',
    subject: 'Instructor Electronic',
    description: 'Dedicated to making chemistry fun and easy to understand.',
    image: 'https://habiganj.polytech.gov.bd/sites/default/files/files/habiganj.polytech.gov.bd/teacher_list/2738118b_6b2d_4cef_be29_27db2159d651/2024-01-30-04-35-3bd62dabc6b7781a36347eb6e5d6666f.jpeg',
    social: {
      email: 'ahsan.eee10@gmail.com',
      phone: '01750649664',
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

  <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }"
        class="mySwiper">
    <!-- Loop through the teachers array -->
    <swiper-slide
      v-for="teacher in teachers"
      :key="teacher.name"
      class="bg-white min-h-[400px] px-2 rounded-lg shadow-lg  overflow-hidden  transform transition-transform duration-300 hover:scale-105"
    >
      <!-- Teacher Image -->
      <div class="relative h-60 overflow-hidden">
        <img :src="teacher.image" :alt="teacher.name" class="w-full h-full bg-cover bg-center object-cover" />
      </div>

      <!-- Teacher Details -->
      <div class="p-2">

        <!-- Name and Subject -->
         <div class="h-18">
           <h3 class="text-xl font-semibold text-gray-800">{{ teacher.name }}</h3>
           <p class="text-sm text-gray-600">{{ teacher.subject }}</p>
         </div>



        <!-- Social Links (Optional) -->
        <div class="mt-2 flex flex-col space-x-4">
          <div class="flex gap-2">
            <i class="pi pi-envelope mt-1"></i> <a :href="`mailto:${teacher.social.email}`" class="hover:text-blue-500">{{ teacher.social?.email }}</a>
          </div>
          <div class="flex gap-2">
            <i class="pi pi-phone text-lg gap-2 mt-1"></i> <a :href="`tel:${teacher.social.phone}`" class="hover:text-blue-500">{{ teacher.social?.phone }}</a>
          </div>
          <!-- <a
            v-if="teacher.social?.email"
            :href="`mailto:${teacher.social.email}`"
            class="text-gray-500 hover:text-blue-500 flex gap-2"
          >
            <i class="pi pi-envelope text-lg gap-2"> {{ teacher.social.email }}</i>
          </a> -->
          <!-- <a
            v-if="teacher.social?.linkedin"
            :href="teacher.social.linkedin"
            target="_blank"
            class="text-gray-500 hover:text-blue-500"
          >
            <i class="pi pi-linkedin text-lg"></i>
          </a> -->
          <!-- <a
            v-if="teacher.social?.twitter"
            :href="teacher.social.twitter"
            target="_blank"
            class="text-gray-500 hover:text-blue-500"
          >
            <i class="pi pi-twitter text-lg"></i>
          </a> -->
        </div>
      </div>
    </swiper-slide>
  </swiper>
</div>
</div>
</template>
