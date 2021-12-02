import {mount} from "@vue/test-utils";
import App from "@/App.vue";
import {useStore} from "vuex";

// import Authors from "@/components/Authors.vue";

// eslint-disable-next-line no-undef


describe("App.vue", () => {
  let store;
  store = useStore();
  it("renders App", () => {
    const wrapper = mount(App, { store });
    expect(wrapper.text()).toMatch("OTUS-BOOKS-APP");
  });
});

// describe("Authors.vue", () => {
//   it("renders props.msg when passed", () => {
//     const wrapper = shallowMount(Authors);
//     expect(wrapper.text()).toMatch("Автор");
//   });
// });