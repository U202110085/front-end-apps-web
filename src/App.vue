<template>
    <div>
        <Header />
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import FooterComponent from "@/components/Footer.vue";

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
        },
    };
</script>

<style>
    /* CSS goes here */
</style>
