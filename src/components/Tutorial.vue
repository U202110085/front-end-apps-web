<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <img class="card-img" :src="imageUrl" alt="Tutorial Image">
    <div class="card-body">
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialComponent',
  props: {
    title: String,
    description: String,
    imageUrl: String,
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  margin-bottom: 1rem;
  background-color: #fff;
}

.card-img {
  height: 10rem;
  object-fit: cover;
  display: block;
  margin: auto auto;
}

.card-body {
  padding: 1rem;
}

.card-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 1rem;
  text-align: center;
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
