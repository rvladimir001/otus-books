<template>
  <div>
    <div>
      <div>
        <ul>
          <li><label>ФИО<input type="text"></label></li>
          <li><label>Год рождения<input type="text"></label></li>
          <li><label>Пол<input type="text"></label></li>
          <li><label>Страна<input type="text"></label></li>
          <li><label>Книги<input type="text"></label></li>
        </ul>
      </div>
      <div>
        <button>
          Сохранить
        </button>
      </div>
    </div>
    <LoaderSpinner></LoaderSpinner>
  </div>
</template>

<script>
import Vue from "vue";
import LoaderSpinner from "./LoaderSpinner.vue";
Vue.component('LoaderSpinner', LoaderSpinner);
export default {
  name: "AuthorsForm",
    comments: {
    LoaderSpinner
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {}
}
</script>

<style scoped>


</style>

