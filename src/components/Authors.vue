<template>
  <div>
    <div v-if="dataList.length > 0">
      <table>
        <tr>
          <th>Автор</th>
          <th>Год рожения</th>
          <th>Пол</th>
          <th>Страна</th>
          <th>Книги</th>
        </tr>
        <tr v-for="author in dataList" :key="author.id">
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
export default {
  name: "Authors",
  props: ["dataList"],
  setup(props) {
    const statusAuthor = (author) => {
      return author.authors.length > 0 && author.authors[0].birth_year !== "";
    };
    return { props, statusAuthor };
  },
};
</script>

<style scoped></style>
