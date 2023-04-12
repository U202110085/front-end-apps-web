<template>
  <div>
    <Header />
     <AddTutorial />
  <FooterComponent />
  </div>
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


.container {
    display: grid;
    grid-template-columns: 25% 75%;
}

.left-div {
    background-color: #ffcfcf;
}

.right-div {
    background-color: #ebebeb;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.left-div, .right-div {
    padding: 10px;
    margin: 10px;
}
</style>
