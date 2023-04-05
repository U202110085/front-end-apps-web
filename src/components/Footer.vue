<template>
  <footer>
    <nav>
    <a href="mailto:venta@library.com">venta@library.com</a>
    <p>981622558</p> 
    <p>Los Manzanos 398</p>
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
    background-color: #333;
    color: #fff;
    padding: 20px;
    justify-content: space-between;
    text-align: center;
}

footer p {
    margin: 0;
    font-size: 14px;
}
</style>
