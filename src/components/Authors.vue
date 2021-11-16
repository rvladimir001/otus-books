<template>
  <div>
    <h2>Авторы</h2>
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
          <td v-if="author.authors.length > 1">
            {{ author.authors[0].name }}
          </td>
          <td v-if="author.authors.length > 0">
            {{ author.authors[0].birth_year }}
          </td>
          <td v-if="author.authors.length > 0">
            {{ author.authors[0].gender }}
          </td>
          <td v-if="author.authors.length > 0">
            {{ author.authors[0].country }}
          </td>
          <td v-if="author.authors.length > 0">
            {{ author.title }}
          </td>
        </template>
      </tr>
    </table>
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
