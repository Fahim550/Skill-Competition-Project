<script setup>
import Menu from 'primevue/menu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted, ref } from 'vue'
const menu = ref()
const mobileMenuOpen = ref(false)
// State for navbar visibility
const show = ref(true)

// State for last scroll position
const lastScrollY = ref(0)


const Technology = ref([
  {
    label: 'Computer',
  },
  {
    label: 'Civil',
  },
  {
    label: 'Electronic',
  },
  {
    label: 'Architecture',
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}


// Function to control navbar visibility based on scroll direction
const controlNavbar = () => {
  if (window.scrollY > lastScrollY.value) {
    show.value = false // Hide navbar on scroll down
  } else {
    show.value = true // Show navbar on scroll up
  }
  lastScrollY.value = window.scrollY // Update last scroll position
}

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Add scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', controlNavbar)
})

// Remove scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', controlNavbar)
})
</script>
<template>
  <div
  class="flex justify-between items-center w-full fixed top-0 left-0 bg-white shadow-lg px-4 py-2 transition-transform duration-300 ease-in-out z-100"
  :class="{ '-translate-y-full': !show }"
  >
    <!-- Logo Section -->
    <div class="flex items-center justify-between lg:justify-around px-4 py-3 w-full">
      <div class="flex gap-2 items-center">
        <img src="../../assets/Image/hpi-logo.png" alt="logo" class="w-[150px] h-[60px]" />
      </div>

      <!-- Navbar Links -->
      <ul class="items-center gap-5 text-[16px] font-semibold text-2xl lg:flex hidden">
        <li>
          <router-link
            to="/"
            class="before:w-0 hover:before:w-full before:bg-red-800 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-800 leading-4 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/visa"
            class="before:w-0 hover:before:w-full before:bg-red-800 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-800 transition-all duration-300 before:left-0 cursor-pointer capitalize flex items-center gap-2"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="before:w-0 hover:before:w-full before:bg-red-800 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-800 transition-all duration-300 before:left-0 cursor-pointer capitalize"
            @mouseover="toggle"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          >
            Technology <i class="pi pi-angle-down"></i>
            <Menu ref="menu" id="overlay_menu" :model="Technology" :popup="true" />
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="before:w-0 hover:before:w-full before:bg-red-800 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-800 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Teachers
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="before:w-0 hover:before:w-full before:bg-red-800 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-800 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            Contact Us
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Mobile Hamburger Menu -->
    <div
      class="lg:hidden flex cursor-pointer w-[24px] h-[24px] top-[20px] left-[20px]"
      @click="toggleMobileMenu"
    >
      <font-awesome-icon :icon="['fas', 'bars-staggered']" />
    </div>

    <!-- Mobile Sidebar -->
    <aside
      :class="{
        'translate-x-0 opacity-100 z-20': mobileMenuOpen,
        'translate-x-[200px] opacity-0 z-[-1]': !mobileMenuOpen,
      }"
      class="lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300"
    >
      <ul class="flex flex-col items-center gap-4 text-lg font-semibold bg-red-100 text-gray-600">
        <li>
          <router-link
            to="/"
            class="hover:border-red-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/visa"
            class="hover:border-b-red-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="hover:border-red-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Technology
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="hover:border-red-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Teachers
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="hover:border-red-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
          >
            Contact Us
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
