<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import Loader from './components/Loader.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import favicon from '@/assets/img/favicon.ico'

onMounted(() => {
  const link = document.querySelector("link[rel~='icon']")
  if (!link) {
    const newLink = document.createElement('link')
    newLink.rel = 'icon'
    newLink.href = favicon
    document.head.appendChild(newLink)
  } else {
    link.href = favicon
  }
})
</script>

<template>
  <body class="min-h-screen flex flex-col bg-mainpurple text-gray-800 font-sans">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </body>
</template>

<script>
export default {
  name: 'App',
  components: {
    Loader
  },
  setup() {
    const loaderStore = useLoaderStore()
    const { isLoading } = storeToRefs(loaderStore)

    return {
      isLoading
    }
  }
}
</script>
