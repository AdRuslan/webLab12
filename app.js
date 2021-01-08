const App = {
  data() {
    return {
      placeholderSurname: "Введите фамилию",
      placeholderName: "Введите имя",
      inputValueSurname: "",
      inputValueName: "",
    };
  },

  methodds: {},
};

Vue.createApp(App).mount("#app");
