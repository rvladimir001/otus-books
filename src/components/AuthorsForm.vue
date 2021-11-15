<template>
  <div>
    <div>
      <ul>
        <li>
          <label>ФИО<input type="text" /></label>
        </li>
        <li>
          <label>Год рождения<input type="text" /></label>
        </li>
        <li>
          <label>Пол<input type="text" /></label>
        </li>
        <li>
          <label>Страна<input type="text" /></label>
        </li>
        <li>
          <label>Книги<input type="text" /></label>
        </li>
      </ul>
    </div>
    <div>
      <button>Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorsForm",
};
</script>

<style scoped></style>
