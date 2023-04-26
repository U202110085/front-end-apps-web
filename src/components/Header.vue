<template>
    <header class="header">
        <img
            class="icon"
            alt="Logo"
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        />
        <router-link to="/" class="title">{{ $t('library') }} UPC</router-link>
        <img
            class="icon"
            alt="Logo"
            src="https://i.pinimg.com/474x/cb/b6/1d/cbb61dc9f560a4e96c2c64f41a90ce3f.jpg"
        />
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                title: 'Library UPC',
            };
        },
    };
</script>

<style scoped>
    .header {
        background-color: #f0f0f0;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 26px;
        font-weight: bold;
        color: #000;
        text-decoration: none;
    }

    .title:hover {
        color: #ff0000;
    }

    .icon {
        width: 40px;
    }
</style>
