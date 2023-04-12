<template>

  <pv-panel header='Add Tutorial'>
    <div>
      <pv-input-mask id='basic' v-model='value' mask='99-999999' placeholder='99-999999'></pv-input-mask>

      <pv-input-text></pv-input-text>
    </div>
  </pv-panel>


  <button @click="addTutorial">Add Tutorial</button>

</template>

<script>
export default {
  name: 'AddTutorial',
};
</script>

<style scoped>

  pv-panel {
    width: 50%;
    margin: 20px;
  }

  pv-input-text {
    width: 100%;
  }

</style>