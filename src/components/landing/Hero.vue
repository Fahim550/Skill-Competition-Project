<script setup>
import herobg3 from '@/assets/Image/clg-flag.jpg'
import herobg2 from '@/assets/Image/clg-front.jpg'
import herobg1 from '@/assets/Image/clg-inside.jpg'
import hero from '@/assets/Image/hero-bg.png'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';
import {EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [EffectFade, Autoplay, Pagination, Navigation]
</script>
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :effect="'fade'"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      class="relative bg-cover bg-center flex items-center z-10 w-full min-h-[624px] font-poppins py-4"
      :style="{ backgroundImage: `url(${herobg2})` }"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat"
        :style="{ backgroundImage: `url(${hero})` }"
      ></div>

      <div
        class="relative z-10 container mx-auto justify-center items-center top-[180px] text-white px-4 w-10/12"
      >
        <!-- Title & Description -->
        <div class="mb-6 w-8/12">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 px-4 shadow-2xl leading-20">
            কারিগরি শিক্ষা নিলে, বিশ্ব জুড়ে কর্ম মিলে
          </h1>
        </div>
      </div>
    </swiper-slide>
    <!-- slider 2 -->
    <swiper-slide
      class="relative bg-cover bg-center flex items-center z-10 w-full min-h-[624px] font-poppins py-4"
      :style="{ backgroundImage: `url(${herobg1})` }"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat"
        :style="{ backgroundImage: `url(${hero})` }"
      ></div>

      <div
        class="relative z-10 container mx-auto justify-center items-center top-[150px] text-white px-4 w-10/12"
      >
        <!-- Title & Description -->
        <div class="mb-6 w-9/12">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 shadow-2xl leading-20">
            একটি জানালা একটি দৃশ্য, একটি কম্পিউটার পুরো বিশ্ব
          </h1>
        </div>
      </div>
    </swiper-slide>
    <!-- slider 3 -->
    <swiper-slide
      class="relative bg-cover bg-center flex items-center z-10 w-full min-h-[624px] font-poppins py-4"
      :style="{ backgroundImage: `url(${herobg3})` }"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 z-0 bg-cover w-full bg-no-repeat"
        :style="{ backgroundImage: `url(${hero})` }"
      ></div>

      <div
        class="relative z-10 container mx-auto justify-center items-center top-[150px] text-white px-4 w-10/12"
      >
        <!-- Title & Description -->
        <div class="mb-6 w-9/12">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 shadow-2xl leading-20">
            কারিগরি শিক্ষা নিন, বদলে যাবে আপনার দিন
          </h1>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
