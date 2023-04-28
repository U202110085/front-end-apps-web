<template>
    <div class="user">
        <h1>{{ $t("user") }}</h1>
    </div>
    <div v-for="user in users" :key="user.id">
        user {{ user.id }} {{ user.username }}
        <router-link :to="{ name: 'user', params: { id: user.id } }"> edit</router-link>
        <pv-button label="delete" @click="deleteUSer(user.id)"></pv-button>
    </div>
</template>

<script>
    import { UsersApiService } from "@/services/users-api.service";
    export default {
        name: "UserComponent",
        data() {
            return {
                users: [],
                userService: new UsersApiService(),
            };
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.nameUser = "";
            this.getAll();
        },
        methods: {
            getAll() {
                this.userService.getAll().then(response => {
                    this.users = response.data;
                });
            },
        },
    };
</script>

<style scoped></style>
