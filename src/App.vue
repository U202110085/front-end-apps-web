<template>
  <div>
    <Header /> <!-- Use the header component in your template -->
    <!-- Your app content goes here -->
    <Tutorial/>
    <Tutorial/>
    <Tutorial/>
    <Tutorial/>
    <Category/>
  </div>
</template>

<script>
import Header from './components/Header.vue' // Import the header component
import Tutorial from './components/Tutorial.vue'
import Category from './components/Category.vue'

export default {
  components: {
    Header,
    Tutorial,
    Category // Register the header component in your Vue instance
  },
  // Your app logic goes here
}
</script>

<style scoped>
/* Your app styles go here */
</style>
