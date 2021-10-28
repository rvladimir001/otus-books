<template>
  <div>
    <div>
        <div>
          <ul>
            <li><label>ФИО<input type="text"></label></li>
            <li><label>Год рождения<input type="text"></label></li>
            <li><label>Язык<input type="text"></label></li>
            <li><label>Книги<input type="text"></label></li>
          </ul>
        </div>
        <div>
          <button>
            Сохранить
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorsForm",
  data: function () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

