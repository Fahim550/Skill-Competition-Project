<script setup>
const achievements = [
  {
    title: 'সেরা পলিটেকনিক পুরস্কার',
    where: 'ন্যাশনাল টেকনিক্যাল এডুকেশন সামিট ২০২৪',
    description: 'বিশিষ্ট একাডেমিক উৎকর্ষতার জন্য সেরা পলিটেকনিক ইনস্টিটিউট হিসাবে স্বীকৃতি।',
    date: '১৫ মার্চ, ২০২৪',
    image: '/award1.jpg',
  },
  {
    title: 'শীর্ষ প্লেসমেন্ট রেকর্ড',
    where: 'ইন্ডাস্ট্রি পার্টনারশিপ প্রোগ্রাম',
    description: 'শীর্ষস্থানীয় শিল্প ও কোম্পানিতে ৯৫% শিক্ষার্থীর প্লেসমেন্ট অর্জন।',
    date: '১০ ডিসেম্বর, ২০২৩',
    image: '/placement.jpg',
  },
  {
    title: 'উদ্ভাবন ও গবেষণায় শ্রেষ্ঠত্ব',
    where: 'আন্তর্জাতিক টেক এক্সপো ২০২৩',
    description: 'নবায়নযোগ্য শক্তি সমাধানের ক্ষেত্রে উদ্ভাবনী গবেষণার জন্য পুরস্কৃত।',
    date: '৫ আগস্ট, ২০২৩',
    image: '/research.jpg',
  },
  {
    title: 'সেরা ক্রীড়া দল',
    where: 'ন্যাশনাল ইন্টার-পলিটেকনিক স্পোর্টস চ্যাম্পিয়নশিপ',
    description: 'জাতীয় পর্যায়ের পলিটেকনিক ফুটবল চ্যাম্পিয়নশিপে বিজয়ী।',
    date: '২০ জুন, ২০২৩',
    image: '/sports.jpg',
  },
]
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
          class="bg-gray-100 rounded-lg p-6 shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
        >
          <img
            :src="achievement.image"
            :alt="achievement.title"
            class="w-24 h-24 mb-4 rounded-lg object-cover shadow-md"
          />
          <h3 class="text-xl font-bold text-gray-800">{{ achievement.title }}</h3>
          <p class="text-gray-500 text-sm font-semibold mt-1">{{ achievement.where }}</p>
          <p class="text-gray-600 text-center mt-2">{{ achievement.description }}</p>
          <span class="mt-3 text-sm text-gray-500 italic">{{ achievement.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
