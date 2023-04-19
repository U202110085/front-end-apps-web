<template>
    <div class="user">
        <h1>User {{ id }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'UserComponent',
        data() {
            return {
                id: 0,
                nameUser: '',
            };
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.nameUser = '';
        },
    };
</script>

<style scoped></style>
