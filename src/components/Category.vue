<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
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
  border-radius: 3px;
  margin-bottom: 1rem;
  background-color: #fff;
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
</style>
