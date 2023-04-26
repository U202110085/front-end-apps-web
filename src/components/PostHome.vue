<template>
    <div class="user">
        <h1>Post</h1>
    </div>
    <div v-for="post in posts" :key="post.id">
        Post {{ post.id }} {{ post.username }}
        <router-link :to="{ name: 'post', params: { id: post.id } }">Edit</router-link>
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

<style scoped></style>
