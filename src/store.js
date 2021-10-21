import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  getters: {
    books: state => {
      return state.books
    },
  },
  mutations: {
    setBooks(state, booksList) {
        state.books = booksList;
    }
  },
  actions: {
        async getBooks(context, n) {
            try {
                const booksList = await axios.get(`https://gutendex.com/books/?page=${n}`);
                await context.commit("setBooks", booksList.data.results);
            } catch (error) {
                console.error("Получить список книг не удалось!")
            }
        },

  }
})