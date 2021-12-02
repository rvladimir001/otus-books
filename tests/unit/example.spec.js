import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex)

describe("App.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getBooks: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it("renders App", () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.text()).toMatch("OTUS-BOOKS-APP");
  });
});

// describe("Authors.vue", () => {
//   it("renders props.msg when passed", () => {
//     const wrapper = shallowMount(Authors);
//     expect(wrapper.text()).toMatch("Автор");
//   });
// });
