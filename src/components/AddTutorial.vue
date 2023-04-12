<template>
  <pv-panel header="Add Tutorial">
    <div>
      <h2 class='inline'>Code: </h2>
      <pv-input-mask class='space' id="basic" v-model="value" mask="99-999999" placeholder="99-999999"></pv-input-mask>
      <pv-input-text></pv-input-text>
    </div>
    <div>
      <h2 class='inline'>Name:</h2>
      <pv-input-text></pv-input-text>
    </div>
    <div>
      <h2 class='inline'>Category:</h2>
      <pv-dropdown v-model='selectedCategories' :options='categories' optionLabel="name" placeholder='Category'></pv-dropdown>
    </div>
    <div>
      <h2 class='inline'>Date added:</h2>
      <pv-calendar v-model="date"></pv-calendar>
    </div>
    <div>
      <h2 class='inline'>Quantity:</h2>
      <pv-input-number v-model="value1" inputId="withoutgrouping" :useGrouping="true"></pv-input-number>
    </div>
    <div>
      <h2 class='inline'>Description:</h2>
      <pv-textarea v-model="value2" autoResize rows="3" cols="50"></pv-textarea>
    </div>
    <div>
      <pv-checkbox class='center' v-model="checked" :binary="true" value="Digital Version"></pv-checkbox>
    </div>
  </pv-panel>
</template>

<script setup>

import {ref} from 'vue';

const selectedCategories = ref();
const categories = ref([
  { name: 'Category 1', code: '1' },
  { name: 'Category 2', code: '2' },
  { name: 'Category 3', code: '3' }
])
const date = ref();
const value1 = ref();
const value2 = ref();
const checked = ref(false);

</script>

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

* {
  margin: 20px;
}

.inline {
  display: inline-block;
}

.space {
  margin-right: 20px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
