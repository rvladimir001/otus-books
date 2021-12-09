import { mount } from "@vue/test-utils";
import createStore from "../../src/store/index.js";
import router from "../../src/router/index.js";
import App from "../../src/App.vue";
import Authors from "../../src/components/Authors.vue";
import AuthorsForm from "../../src/components/AuthorsForm.vue";
import Books from "../../src/components/Books.vue";
import BooksForm from "../../src/components/BooksForm.vue";

it("Монтируем корневой компонент App", async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createStore, router],
    },
  });
  expect(wrapper.html()).toContain("OTUS-BOOKS-APP");
});

it("Монтируем компонент Authors", async () => {
  const wrapper = mount(Authors, {
    global: {
      plugins: [createStore],
    },
  });
  expect(wrapper.html()).toContain("Список авторов");
});

it("Получение данных для Authors и отрисовка таблицы авторов", async () => {
  const wrapper = mount(Authors, {
    global: {
      plugins: [createStore],
    },
  });
  await setTimeout(() => {
    expect(wrapper.html()).toContain("Frankenstein");
  }, 500);
});

it("Монтируем компонент AuthorsForm", async () => {
  const wrapper = mount(AuthorsForm, {
    global: {
      plugins: [createStore],
    },
  });
  await expect(wrapper.html()).toContain("Форма добавления авторов");
});

it("Проверка валидации AuthorsForm", async () => {
  const wrapper = mount(AuthorsForm, {
    global: {
      plugins: [createStore],
    },
  });
  await wrapper.find(".save").trigger("click");
  expect(wrapper.html()).toContain("Необходимо заполнить все поля!");
});

it("Очистка формы AuthorsForm", async () => {
  const wrapper = mount(AuthorsForm, {
    global: {
      plugins: [createStore],
    },
  });
  const input = wrapper.find("input");
  input.element.value = "text for test";
  await input.trigger("input");
  await wrapper.find(".clear").trigger("click");
  expect(input.element.value).toBe("");
});

it("Монтируем компонент Books", async () => {
  const wrapper = mount(Books, {
    global: {
      plugins: [createStore],
    },
  });
  expect(wrapper.html()).toContain("Список книг");
});

it("Получение данных для компонента Books и отрисовка таблицы", async () => {
  const wrapper = mount(Books, {
    global: {
      plugins: [createStore],
    },
  });
  await setTimeout(() => {
    expect(wrapper.html()).toContain("Shelley, Mary Wollstonecraft");
  }, 500);
});

it("Поиск книг в компоненте Books", async () => {
  const wrapper = mount(Books, {
    global: {
      plugins: [createStore],
    },
  });
  const input = wrapper.find("input");
  input.element.value = "Frankenstein";
  await input.trigger("input");
  await setTimeout(
    () => expect(wrapper.html()).toContain("The Modern Prometheus"),
    500
  );
});

it("Удаление книги в компоненте Books", async () => {
  mount(Books, {
    global: {
      plugins: [createStore],
    },
  });
  await setTimeout(() => {
    const countBooks = createStore.state.basicData.length;
    createStore.dispatch("deleteBook", 84);
    expect(countBooks).toBe(countBooks - 1);
  }, 500);
});

it("Монтируем компонент BooksForm", async () => {
  const wrapper = mount(BooksForm, {
    global: {
      plugins: [createStore],
    },
  });
  expect(wrapper.html()).toContain("Форма добавления книг");
});

it("Проверка валидации BooksForm", async () => {
  const wrapper = mount(BooksForm, {
    global: {
      plugins: [createStore],
    },
  });
  await wrapper.find(".save").trigger("click");
  expect(wrapper.html()).toContain("Необходимо заполнить все поля!");
});

it("Очистка формы BooksForm", async () => {
  const wrapper = mount(BooksForm, {
    global: {
      plugins: [createStore],
    },
  });
  const input = wrapper.find("input");
  input.element.value = "text for test";
  await input.trigger("input");
  await wrapper.find(".clear").trigger("click");
  expect(input.element.value).toBe("");
});
