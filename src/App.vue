<template>
    <div>
        <Header />
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from "./components/Header.vue"; // Import the header component
    import FooterComponent from "@/components/Footer.vue";
    import "@fortawesome/fontawesome-free/css/all.css";

    export default {
        name: "App",
        data() {
            return {
                message: "Hello, world!",
            };
        },
        components: {
            FooterComponent,
            Header,

            // Register the header component in your Vue instance
        },
    };
</script>

<style>
    /* CSS goes here */
</style>
