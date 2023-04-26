<template>
    <p />
    <label for="username"></label>
    <pv-input-text v-model="title" id="username"></pv-input-text>
    <p />
    <label for="email2"></label>
    <pv-textarea v-model="body" id="email2"></pv-textarea>
    <p />
    <pv-button label="save" @click="update()"></pv-button>
    <p />
    <router-link to="/post">Posts</router-link>
</template>

<script>
    import { PostsApiService } from '@/services/posts-api.service';

    export default {
        name: 'update-user',
        data() {
            return {
                id: 0,
                usersApiService: new PostsApiService(),
                title: '',
                body: '',
            };
        },
        methods: {
            update() {
                const body = { title: this.title, body: this.body };

                this.usersApiService.udapte(this.id, body).then(response => {
                    if (response.status === 200) {
                        alert('post updated');
                        this.$router.push('/post');
                    } else {
                        alert('error updating post');
                    }
                });
            },
        },
        beforeMount() {
            this.id = this.$route.params.id;
            // invocar API User
            //promesa

            this.usersApiService.getUserById(this.id).then(response => {
                console.log('response', response.data);
                this.title = response.data.title;
                this.body = response.data.body;
            });
        },
    };
</script>

<style scoped></style>
