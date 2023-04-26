<template>
    <div class="update-user m-2">
        <div class="form-group">
            <label class="form-label" for="username">{{ $t('title') }}:</label>
            <pv-input-text class="form-control" v-model="title" id="username"></pv-input-text>
        </div>
        <div class="form-group">
            <label class="form-label" for="email2">{{ $t('body') }}:</label>
            <pv-textarea class="form-control" v-model="body" id="email2"></pv-textarea>
        </div>
        <div class="form-group">
            <pv-button class="btn-save" :label="$t('save')" @click="update()"></pv-button>
        </div>
        <router-link class="btn-back" to="/post">
            <i class="fas fa-arrow-left"></i> {{ $t('backToPosts') }}
        </router-link>
    </div>
</template>

<script>
    import { PostsApiService } from '@/services/posts-api.service';

    export default {
        name: 'UpdateUser',
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
                        alert('Post updated');
                        this.$router.push('/post');
                    } else {
                        alert('Error updating post');
                    }
                });
            },
        },
        beforeMount() {
            this.id = this.$route.params.id;

            this.usersApiService.getUserById(this.id).then(response => {
                console.log('response', response.data);
                this.title = response.data.title;
                this.body = response.data.body;
            });
        },
    };
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
    .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    .form-control {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .btn-save {
        background-color: #007bff;
        color: #fff;
        border-color: #007bff;
    }
    .btn-save:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
    .btn-back {
        display: inline-flex;
        align-items: center;
        margin-left: 0.5rem;
        color: #007bff;
        text-decoration: none;
    }
    .btn-back:hover {
        color: #0056b3;
        text-decoration: underline;
    }
    .fa-arrow-left {
        margin-right: 0.5rem;
    }
    .m-2 {
        margin: 2rem;
    }
</style>
