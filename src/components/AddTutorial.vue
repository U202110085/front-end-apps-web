<template>
  <pv-panel class="half-screen" :header="$t('addTutorial')">
    <div class="validate">
      <label class="inline" for="code">{{ $t("code") }}:</label>
      <pv-input-mask
        class="space"
        id="basic"
        v-model="value"
        mask="99-999999"
        placeholder="99-999999"
      ></pv-input-mask>
      <div class="button-container">
        <pv-button class="center" :label="$t('validate')" severity="validate" />
      </div>
    </div>	

    <div>
      <label class="inline" for="name">{{ $t("name") }}:</label>
        <pv-input-text id="name"></pv-input-text>
    </div>

    <div>
      <label class="inline" for="category">{{ $t("category") }}:</label>
      <pv-dropdown
        v-model="selectedCategories"
        :options="categories"
        optionLabel="name"
        :placeholder="$t('category')"
      ></pv-dropdown>
    </div>
    <div>
      <label class="inline" for="dateAdded">{{ $t("dateAdded") }}:</label>
      <pv-calendar v-model="date"></pv-calendar>
    </div>
    <div>
      <label class="inline" for="quantity">{{ $t("quantity") }}:</label>
      <pv-input-number
        v-model="value1"
        inputId="withoutgrouping"
        :useGrouping="true"
      ></pv-input-number>
    </div>
    <div>
      <label class="inline" for="description">{{ $t("description") }}:</label>
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
        <label for="checkbox">{{ $t("digitalVersion") }}</label>
      </div>
    </div>
    <div class="radio-container">
      <label class="inline" for="status">{{ $t("status") }}:</label>
      <div class="">
        <label class="radio-inline">
          <pv-radio-button
            v-model="ingredient"
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
          />
          {{ $t("active") }}
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
          {{ $t("suspended") }}
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
          {{ $t("inactive") }}
        </label>
      </div>
    </div>
    <div class="button-container">
      <pv-button class="center" :label="$t('save')" severity="success" />
      <pv-button class="center" :label="$t('cancel')" severity="danger" />
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

.radio-container label:hover {
  cursor: pointer;
  font-weight: bold;
}

.radio-container input[type="radio"]:checked + label {
  font-weight: bold;
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
