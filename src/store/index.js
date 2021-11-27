import { createStore } from "vuex";
import axios from "axios";
import { addMockData, addMockPoster } from "../mock";

export default createStore({
  state: {
    basicData: [],
    test: "testing test",
  },
  getters: {
    basicData: (state) => state.basicData,
  },
  mutations: {
    setBasicData: (state, data) => (state.basicData = data),
    addBook: (state, book) =>
      state.basicData.unshift(addMockPoster(book.value)),
    addAuthor: (state, author) => state.basicData.unshift(author.value),
  },
  actions: {
    getBooks(context) {
      axios.get("https://gutendex.com/books/?page=1").then((response) => {
        const result = response.data.results;
        const fullResult = addMockData(result).map((book) =>
          Object.assign({}, book)
        );
        context.commit("setBasicData", fullResult);
      });
    },
    deleteBook(context, id) {
      const idx = this.getters.basicData.indexOf(
        this.getters.basicData.find((book) => book.id === id)
      );
      this.getters.basicData.splice(idx, 1);
    },
  },
  modules: {},
});
