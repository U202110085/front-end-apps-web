<template>
  <pv-panel class="half-screen" header="Add Tutorial">
    <div class="validate">
      <h2 class="inline">Code:</h2>
      <pv-input-mask
        class="space"
        id="basic"
        v-model="value"
        mask="99-999999"
        placeholder="99-999999"
      ></pv-input-mask>
      <div class="button-container">
        <pv-button class="center" label="Validate" severity="validate" />
      </div>
    </div>

    <div>
      <h2 class="inline">Name:</h2>
      <pv-input-text></pv-input-text>
    </div>
    <div>
      <h2 class="inline">Category:</h2>
      <pv-dropdown
        v-model="selectedCategories"
        :options="categories"
        optionLabel="name"
        placeholder="Category"
      ></pv-dropdown>
    </div>
    <div>
      <h2 class="inline">Date added:</h2>
      <pv-calendar v-model="date"></pv-calendar>
    </div>
    <div>
      <h2 class="inline">Quantity:</h2>
      <pv-input-number
        v-model="value1"
        inputId="withoutgrouping"
        :useGrouping="true"
      ></pv-input-number>
    </div>
    <div>
      <h2 class="inline">Description:</h2>
      <pv-textarea v-model="value2" autoResize rows="3" cols="50"></pv-textarea>
    </div>
    <div>
      <div class="checkbox-label">
        <pv-checkbox
          v-model="checked"
          :binary="true"
          value="Digital Version"
          inputId="checkbox"
        ></pv-checkbox>
        <label for="checkbox">Digital Version</label>
      </div>
    </div>
    <div class="radio-container">
      <h2 class="inline">Status:</h2>
      <div class="">
        <label class="radio-inline">
          <pv-radio-button
            v-model="ingredient"
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
          />
          Active
        </label>
      </div>
      <div class="">
        <label class="radio-inline">
          <pv-radio-button
            v-model="ingredient"
            inputId="ingredient2"
            name="pizza"
            value="Mushroom"
          />
          Suspended
        </label>
      </div>
      <div class="">
        <label class="radio-inline">
          <pv-radio-button
            v-model="ingredient"
            inputId="ingredient3"
            name="pizza"
            value="Pepper"
          />
          Inactive
        </label>
      </div>
    </div>
    <div class="button-container">
      <pv-button class="center" label="Save" severity="success" />
      <pv-button class="center" label="Cancel" severity="danger" />
      <pv-button class="center" label="Ok" severity="ok" />
    </div>
  </pv-panel>
</template>

<script setup>
import { ref } from "vue";

const selectedCategories = ref();
const categories = ref([
  { name: "Category 1", code: "1" },
  { name: "Category 2", code: "2" },
  { name: "Category 3", code: "3" },
]);
const date = ref();
const value1 = ref();
const value2 = ref();
const checked = ref(false);
const ingredient = ref("");
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
  margin-right: 10px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.validate {
  display: flex;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
}

.radio-inline {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
}

.radio-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.half-screen {
  width: 60%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
