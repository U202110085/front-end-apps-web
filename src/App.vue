<template>
  <div>
    <Header /> <!-- Use the header component in your template -->
    <!-- Your app content goes here -->

    <div class="container">
      <div class="left-div">
        <Category/>
        <Category/>
        <Category/>
      </div>
      <div class="right-div">
        <Tutorial/>
        <Tutorial/>
        <Tutorial/>
      </div>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './components/Header.vue' // Import the header component
import Tutorial from './components/Tutorial.vue'
import Category from './components/Category.vue'
import FooterComponent from '@/components/Footer.vue';

export default {
  components: {
    FooterComponent,
    Header,
    Tutorial,
    Category // Register the header component in your Vue instance
  },
  // Your app logic goes here
}
</script>

<style scoped>
/* Your app styles go here */

.container {
    display: grid;
    grid-template-columns: 25% 75%;
}

.left-div {
    background-color: green; /* change as needed */
}

.right-div {
    background-color: red; /* change as needed */
}

div {
    padding: 10px;
    margin: 10px;
}

</style>
