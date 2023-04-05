<template>
  <header class="header">
    <img class="icon" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"/>
    <h1 class="title">{{ title }}</h1>
    <img class="icon" src="https://i.pinimg.com/474x/cb/b6/1d/cbb61dc9f560a4e96c2c64f41a90ce3f.jpg"/>
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

.icon {
  width: 40px;
}
</style>


