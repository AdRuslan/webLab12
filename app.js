const App = {
  data() {
    return {
      placeholderSurname: "Введите фамилию",
      placeholderName: "Введите имя",
      inputValueSurname: "",
      inputValueName: "",
      counter: 0,
      isButtonDisabled: true,
      notes: [],
    };
  },

  methods: {
    addNewNote() {
      if (this.inputValueName !== "" && this.inputValueSurname !== "") {
        this.notes.push(`${this.inputValueSurname} ${this.inputValueName}`);
        this.inputValueName = "";
        this.inputValueSurname = "";
      }
    },

    ucFirst(item) {
      return item
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1))
        .join(" ");
    },

    calcCounter() {
      this.counter = this.inputValueName.length + this.inputValueSurname.length;
      return this.counter;
    },
  },
};

Vue.createApp(App).mount("#app");
