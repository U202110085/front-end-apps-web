<template>
  <div class="card">
    <img class="card-img" :src="imageUrl" alt="Category Image">
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
      <router-link :to="link" class="btn btn-primary">Explore</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: String,
    description: String,
    imageUrl: String,
    link: String,
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 1rem;
}

.card-img {
  height: 10rem;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
