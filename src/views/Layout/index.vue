<script setup>
import LayoutNav from '@/views/Layout/component/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/component/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/component/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>