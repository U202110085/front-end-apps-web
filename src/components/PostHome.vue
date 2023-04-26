<template>
    <div class="post-container">
        <div class="user">
            <h1>Posts</h1>
        </div>
        <div class="post-list">
            <div v-for="post in posts" :key="post.id" class="post-item">
                <div class="post-header">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <router-link
                        :to="{ name: 'post', params: { id: post.id } }"
                        class="post-edit-link"
                    >
                        Edit
                    </router-link>
                </div>
                <div class="post-body">{{ post.body }}</div>
            </div>
        </div>
    <div class="user">
        <h1>Post</h1>
    </div>
    <div class="p-grid">
        <div v-for="post in posts" :key="post.id" class="p-col-12 p-md-6 p-lg-4">
            <div class="p-card">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
                <router-link :to="{ name: 'post', params: { id: post.id } }">Edit</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { PostsApiService } from '@/services/posts-api.service';

    export default {
        name: 'PostComponent',
        data() {
            return {
                posts: [],
                postService: new PostsApiService(),
            };
        },
        beforeMount() {
            this.getAll();
        },
        methods: {
            getAll() {
                this.postService.getAll().then(response => {
                    this.posts = response.data;
                });
            },
        },
    };
</script>

<style scoped>
    .post-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }
    .user {
        text-align: center;
        margin-bottom: 2rem;
    }
    .post-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .post-item {
        background-color: #f8f9fa;
        padding: 1rem;
        border-radius: 0.25rem;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    }
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-title {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .post-edit-link {
        background-color: #007bff;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
        font-weight: bold;
    }
    .post-edit-link:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
    .post-body {
        font-size: 1.2rem;
    }
</style>
<style scoped>
    .p-card {
        border-radius: 4px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: #fff;
    }

    .p-card h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .p-card p {
        font-size: 1rem;
        color: #555;
        line-height: 1.4;
    }
</style>
