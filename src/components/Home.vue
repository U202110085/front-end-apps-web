<template>
    <div>
        <LibraryComponent />
    </div>
</template>

<script>
    import LibraryComponent from "@/components/Library.vue";

    export default {
        name: "App",
        data() {
            return {
                message: "Hello, world!",
            };
        },
        components: {
            LibraryComponent,
        },
    };
</script>

<style>
    /* CSS goes here */
</style>
