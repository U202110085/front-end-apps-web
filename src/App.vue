<template>
    <div>
        <Header />
        <LibraryComponent />
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import FooterComponent from "@/components/Footer.vue";
    import LibraryComponent from "@/components/Library.vue";

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
            LibraryComponent,
        },
    };
</script>

<style>
    /* CSS goes here */
</style>
