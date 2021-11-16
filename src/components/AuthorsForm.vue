<template>
  <div>
    <div>
      <ul>
        <li>
          <label>ФИО<input type="text" v-model="authors" /></label>
        </li>
        <li>
          <label>Год рождения<input type="text" v-model="birth_year" /></label>
        </li>
        <li>
          <label>Пол<input type="text" v-model="gender" /></label>
        </li>
        <li>
          <label>Страна<input type="text" v-model="country" /></label>
        </li>
        <li>
          <label>Книги<input type="text" v-model="title" /></label>
        </li>
      </ul>
    </div>
    <div>
      <button @click="save">Сохранить</button>
    </div>
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
      emit("addAuthors", newAuthor);
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
    };
  },
};
</script>

<style scoped></style>
