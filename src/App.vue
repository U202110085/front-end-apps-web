<template>
    <Header />
     <AddTutorial />
  <FooterComponent />
</template>

<script>
import Header from './components/Header.vue'
//import Tutorial from './components/Tutorial.vue'
//import Category from './components/Category.vue'
import FooterComponent from '@/components/Footer.vue';
import AddTutorial from '@/components/AddTutorial.vue';

export default {
  components: {
      FooterComponent,
      Header,
      AddTutorial
  },
}
</script>

<style scoped>


</style>
