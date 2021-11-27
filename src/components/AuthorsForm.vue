<template>
  <div>
    <div>
      <ul>
        <li>
          <label
            ><input type="text" v-model="authors" placeholder="ФИО"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="birth_year" placeholder="Год рождения"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="gender" placeholder="Пол"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="country" placeholder="Страна"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="title" placeholder="Книги"
          /></label>
        </li>
      </ul>
      <div class="control-panel">
        <div class="save-block">
          <div class="btn" @click="save">Сохранить</div>
          <div>
            <span class="alert" v-if="alertStatus"
              >Необходимо заполнить все поля!</span
            >
          </div>
        </div>
        <div class="btn" @click="clear">Очистить</div>
      </div>
    </div>
  </div>
  <div></div>
  <div v-if="!saveStatus" class="saved-process">
    <div>Сохранение данных об авторе...</div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

export default {
  name: "AuthorsForm",
  emits: ["addAuthors"],
  setup(props, { emit }) {
    const authors = ref("");
    const birth_year = ref("");
    const gender = ref("");
    const country = ref("");
    const title = ref("");
    const author = reactive({});
    let newAuthor = reactive({});
    let saveStatus = ref(true);
    let alertStatus = ref(false);
    const clear = () => {
      authors.value = "";
      title.value = "";
      birth_year.value = "";
      gender.value = "";
      country.value = "";
    };
    const validator = () => {
      if (
        authors.value === "" ||
        title.value === "" ||
        birth_year.value === "" ||
        gender.value === "" ||
        country.value === ""
      ) {
        alertStatus.value = true;
        setTimeout(() => (alertStatus.value = false), 1500);
        return false;
      }
      return true;
    };
    const save = () => {
      newAuthor.value = {
        title: title,
        authors: [
          {
            name: authors,
            birth_year: birth_year,
            gender: gender,
            country: country,
          },
        ],
      };
      if (validator()) {
        saveStatus.value = false;
        emit("addAuthors", newAuthor);
        setTimeout(() => (saveStatus.value = true), 500);
      }
    };
    onMounted(() => {
      newAuthor = Object.assign({}, author);
    });
    return {
      save,
      authors,
      gender,
      birth_year,
      country,
      title,
      newAuthor,
      saveStatus,
      alertStatus,
      clear,
    };
  },
};
</script>

<style scoped>
.saved-process {
  z-index: 999;
  opacity: 0.4;
  background: #000;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
}

.saved-process div {
  margin-top: 20%;
}

.alert {
  color: red;
  font-size: 11px;
}
</style>
