<template>
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
