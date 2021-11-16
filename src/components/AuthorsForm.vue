<template>
  <div>
    <div>
      <ul>
        <li>
          <label><input type="text" v-model="authors" placeholder="ФИО"/></label>
        </li>
        <li>
          <label><input type="text" v-model="birth_year" placeholder="Год рождения"/></label>
        </li>
        <li>
          <label><input type="text" v-model="gender" placeholder="Пол"/></label>
        </li>
        <li>
          <label><input type="text" v-model="country" placeholder="Страна"/></label>
        </li>
        <li>
          <label><input type="text" v-model="title" placeholder="Книги"/></label>
        </li>
      </ul>
    </div>
    <div>
      <div class="btn" @click="save">Сохранить</div>
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

<style scoped>

</style>
