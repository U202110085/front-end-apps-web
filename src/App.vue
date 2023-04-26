<template>
    <div>
        <Header />
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from './components/Header.vue'; // Import the header component
    import FooterComponent from '@/components/Footer.vue';

    // OT1707
    export default {
        components: {
            FooterComponent,
            Header,

            // Register the header component in your Vue instance
        },
        data() {
            return {
                categories: [],
            };
        },
        beforeMount() {
            this.categories = [
                { title: 'titulo1', description: 'descripcion1' },
                { title: 'titulo2', description: 'descripcion2' },
            ];
        },

        // Your app logic goes here
    };
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

    .left-div,
    .right-div {
        padding: 10px;
        margin: 10px;
    }
</style>
