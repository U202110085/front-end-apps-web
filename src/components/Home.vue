<template>
    <div class="home-container">
        <h1 class="home-title">{{ $t("welcome") }}</h1>
        <div class="home-links">
            <router-link to="/user" class="home-link">{{ $t("user") }}</router-link>
            <router-link to="/post" class="home-link">{{ $t("post") }}</router-link>
        </div>
    </div>
    <div class="home-container">
        <label for="username" class="margin">Username</label>
        <pv-input-text v-model="username" class="margin"></pv-input-text><br/>
        <label for="password" class="margin">Password</label>
        <pv-input-text v-model="password" class="margin" type="password"></pv-input-text><br/>
        <pv-button label="Login" @click="login" class="margin"></pv-button>
        <pv-button label="Logout" @click="logout" class="margin"></pv-button>
    </div>
    <div>
        <p>Username: user@upc.com<pv-button @click="useUser" class="small">Use</pv-button></p>
        <p>Password: 1234<pv-button @click="usePassword" class="small">Use</pv-button></p>
        <p><i>El resto de usuario (en el DB) tienen contraseña "upc1234"</i></p>
    </div>
</template>

<script>
import { UsersApiService } from '@/services/users-api.service';
import { PostsApiService } from '@/services/posts-api.service';

    export default {
        name: "HomeComponent",
        data(){
            return{
                username:'',
                password:'',
                userApiService: new UsersApiService(),
                postApiService: new PostsApiService()
            }
        },
        methods:{
            login(){
                const body ={
                    email:this.username,
                    password:this.password
                }
                this.userApiService.login(body).then(response=>{
                   window.localStorage.setItem('jwt', response.data.accessToken);
                   window.location.reload();
                   alert('You have been logged in');
                })
                this.username='';
                this.password='';
            },
            logout(){
                window.localStorage.removeItem('jwt');
                window.location.reload();
                alert('You have been logged out');
            },
            useUser(){
                this.username='user@upc.com';
            },
            usePassword(){
                this.password='1234';
            }
        }
    };
</script>

<style scoped>
    .small{
        width: 50px;
        height: 20px;
        font-size: 12px;
        justify-content: center;
        margin-left: 10px;
    }
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
    .margin{
        margin: 10px;
    }
</style>
