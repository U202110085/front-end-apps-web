<template>
  <pv-panel header="Add Tutorial">
    <div>

      <pv-input-text></pv-input-text>
    </div>
  </pv-panel>
  <button>Submit</button>
</template>

<script>
export default {
  name: "AddTutorial",
  data() {
    return {
      value: "",
    };
  },
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
