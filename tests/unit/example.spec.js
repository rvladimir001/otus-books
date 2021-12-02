import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { useStore } from "vuex";

describe("App.vue", () => {
  const store = useStore();
  it("renders App", () => {
    //пытаюсь в shallowMount передать store
    const wrapper = shallowMount(App, { store });
    expect(wrapper.text()).toMatch("OTUS-BOOKS-APP");
  });
});

// describe("Authors.vue", () => {
//   it("renders props.msg when passed", () => {
//     const wrapper = shallowMount(Authors);
//     expect(wrapper.text()).toMatch("Автор");
//   });
// });