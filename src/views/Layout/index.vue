<script setup>
import LayoutNav from '@/views/Layout/component/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/component/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/component/LayoutFooter.vue'


import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
 
const categoryStore = useCategoryStore()
onMounted(()=> categoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
