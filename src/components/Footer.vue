<template>
  <footer>
    <nav>
      <div class="left-section">
        <a href="mailto:venta@library.com">venta@library.com</a>
      </div>
      <div class="middle-section">
        <p>981622558</p>
      </div>
      <div class="right-section">
        <p>Los Manzanos 398</p>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
footer {
    background-color: #fcb8e8;
    color: #fff;
    padding: 20px;
    text-align: center;
}

nav {
    display: flex;
    justify-content: space-between;
}

nav > div {
    display: flex;
    align-items: center;
}

.left-section a {
    margin-right: 20px;
    color: #000;
}

.middle-section {
    margin: 0 20px;
    color: #000;
}

.right-section {
    text-align: right;
    color: #000;
}

footer p {
    margin: 0;
    font-size: 14px;
}
</style>
