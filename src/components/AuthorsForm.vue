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
  <div v-if="!saveStatus" class="saved-process">
    <div>Сохранение данных об авторе...</div>
  </div>
</template>

<script>
import {onMounted, ref, reactive} from "vue";

export default {
  name: "AuthorsForm",
  emits: ["addAuthors"],
  setup(props, {emit}) {
    const authors = ref("");
    const birth_year = ref("");
    const gender = ref("");
    const country = ref("");
    const title = ref("");
    const author = reactive({});
    let newAuthor = reactive({});
    let saveStatus = ref(true);
    const clear = () => {
      authors.value = "";
      title.value = "";
      birth_year.value = "";
      gender.value = "";
      country.value = "";
      title.value = "";
    };
    const save = async () => {
      saveStatus.value = false;
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
      try {
        await emit("addAuthors", newAuthor);
        clear();
        setTimeout(() => (saveStatus.value = true), 500);
      } catch (e) {
        console.error("Ошибка сохранения новой книги:", e);
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

.snackbar {
  padding: 20px;
  width: 200px;
  background: #acbec2;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
