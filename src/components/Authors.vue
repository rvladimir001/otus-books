<template>
  <div>
    <div v-if="data.length > 0">
      <table>
        <tr>
          <th>Автор</th>
          <th>Год рожения</th>
          <th>Пол</th>
          <th>Страна</th>
          <th>Книги</th>
        </tr>
        <tr v-for="author in data" :key="author">
          <template v-if="statusAuthor(author)">
            <td>
              {{ author.authors[0].name }}
            </td>
            <td>
              {{ author.authors[0].birth_year }}
            </td>
            <td>
              {{ author.authors[0].gender }}
            </td>
            <td>
              {{ author.authors[0].country }}
            </td>
            <td>
              {{ author.title }}
            </td>
          </template>
        </tr>
      </table>
    </div>
    <div class="no-data" v-else>Нет списка авторов.</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Authors",
  setup() {
    const store = useStore();
    const data = computed(() => store.state.basicData);
    const statusAuthor = (author) => {
      return author.authors.length > 0 && author.authors[0].birth_year !== "";
    };
    return { data, statusAuthor };
  },
};
</script>

<style scoped></style>
