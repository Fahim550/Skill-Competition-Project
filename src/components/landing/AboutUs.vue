<script setup>
import clg from '@/assets/Image/clg-flag.jpg'
</script>
<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Left Side: Image -->
        <div class="w-full lg:w-1/2">
          <img :src="clg" class="rounded-lg shadow-lg w-full" />
        </div>

        <!-- Right Side: Content -->
        <div class="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
          <h2 class="text-3xl font-bold text-gray-800">আমাদের হবিগঞ্জ পলিটেকনিক ইনস্টিটিউট</h2>
          <p class="text-gray-600 mt-4">
            আমাদের ইনস্টিটিউট শিক্ষার্থীদের ক্যারিয়ারে সফলতার জন্য সর্বোচ্চ মানের প্রযুক্তিগত
            শিক্ষা এবং বাস্তব অভিজ্ঞতা প্রদান করে। অত্যাধুনিক ল্যাব, দক্ষ শিক্ষকমণ্ডলী এবং শিল্প
            প্রতিষ্ঠানের সঙ্গে পার্টনারশিপের মাধ্যমে আমরা শিক্ষার্থীদের বাস্তব জগতের চ্যালেঞ্জ
            মোকাবিলায় প্রস্তুত করি।
          </p>
          <ul class="mt-4 space-y-2 text-gray-700">
            <li class="flex items-center">✅ অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী</li>
            <li class="flex items-center">✅ আধুনিক ল্যাব ও ওয়ার্কশপ</li>
            <li class="flex items-center">✅ ১০০% প্লেসমেন্ট সহায়তা</li>
            <li class="flex items-center">✅ শিল্প প্রতিষ্ঠানের সঙ্গে শক্তিশালী সংযোগ</li>
          </ul>
          <button
            class="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
          >
            আরও জানুন
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
