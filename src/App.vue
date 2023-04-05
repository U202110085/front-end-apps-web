<template>
  <div>
    <Header /> <!-- Use the header component in your template -->
    <!-- Your app content goes here -->
      <div class="container">
          <div class="left-div">
              <Category title="Category 1" description="Alumnos Pregrado"/>
              <Category title="Category 2" description="Alumnos PostGrado"/>
              <Category title="Category 3" description="Matricula"/>
              <Category title="Category 4" description="Politica de pensiones"/>
          </div>
          <div class="right-div">
              <Tutorial title="Tutoriales Chidos" imageUrl="https://elcomercio.pe/resizer/wtXe3Cbf-Mzeb2pfn2XQiskyL7k=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LVRUHV5RPZBWLIZD7Y2VLRNI3A.jpg" description="Como preparar almuerzo"/>
              <Tutorial title="Reacciones" imageUrl="https://s.yimg.com/ny/api/res/1.2/WfAIcTxGIhQZIMOSjLPohw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f4130c376e8c1633b900e6006fea8d89" description="Como preparar almuerzo"/>
              <Tutorial title="Peticiones" imageUrl="https://cdn.memegenerator.es/imagenes/memes/full/0/27/277525.jpg" description="Como preparar almuerzo"/>
              <Tutorial title="Lamentos" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1x8GAt38EPz0EXctHyXoGp6iT9gV96nZWQ&usqp=CAU" description="Como preparar almuerzo"/>
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
    background-color: #ffcfcf; /* change as needed */
}

.right-div {
    background-color: #ebebeb; /* change as needed */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.left-div, .right-div {
    padding: 10px;
    margin: 10px;
}
</style>
