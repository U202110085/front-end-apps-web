<template>
    <div class="home-container">
        <h1 class="home-title">{{ $t("welcome") }}</h1>
        <div class="home-links">
            <router-link to="/user" class="home-link">{{ $t("user") }}</router-link>
            <router-link to="/post" class="home-link">{{ $t("post") }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeComponent",
    };
</script>

<style scoped>
    .home-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
        text-align: center;
    }
    .home-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    .home-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .home-link {
        background-color: #007bff;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        transition: background-color 0.2s ease-in-out;
    }
    .home-link:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
</style>
