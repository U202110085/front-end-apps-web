<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">Home</li>
        <li class="nav-item">About</li>
        <li class="nav-item">Contact</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: 'Library UPC'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 24px;
}

.nav-list {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.nav-item {
  margin-right: 10px;
}
</style>


