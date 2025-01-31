<script setup>
import herobg1 from '@/assets/Image/clg-inside.jpg'
import hero from '@/assets/Image/hero-bg.png'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Pagination, Navigation]
</script>
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"

    class="mySwiper"
  >
    <swiper-slide
      class="relative bg-cover bg-center flex items-center z-10 w-full min-h-[724px] font-poppins py-4"
      :style="{ backgroundImage: `url(${herobg1})` }"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat"
        :style="{ backgroundImage: `url(${hero})` }"
      ></div>

      <div
        class="relative z-10 container mx-auto justify-center items-center  top-[140px] text-white px-4 w-10/12"
      >
        <!-- Title & Description -->
        <div class="mb-6 w-9/12">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-20">
            শিক্ষার ডিজিটাল রূপান্তর, দক্ষতা উন্নয়নের নতুন দিগন্ত
          </h1>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="relative bg-cover bg-center flex items-center z-10 w-full min-h-[724px] font-poppins py-4"
      :style="{ backgroundImage: `url(${herobg1})` }"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat"
        :style="{ backgroundImage: `url(${hero})` }"
      ></div>

      <div
        class="relative z-10 container mx-auto justify-center items-center top-[140px] text-white px-4 w-10/12"
      >
        <!-- Title & Description -->
        <div class="mb-6 w-9/12">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-20">
            শিক্ষার ডিজিটাল রূপান্তর, দক্ষতা উন্নয়নের নতুন দিগন্ত
          </h1>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
