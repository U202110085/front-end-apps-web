<template>
  <div>
    <Header /> <!-- Use the header component in your template -->
    <!-- Your app content goes here -->
    <footer-component />
  </div>
</template>

<script>
import Header from './components/Header.vue' // Import the header component
import FooterComponent from '@/components/Footer.vue';

export default {
  components: {
    FooterComponent,
    Header
     // Register the header component in your Vue instance
  },
  // Your app logic goes here
}
</script>

<style scoped>
/* Your app styles go here */
</style>