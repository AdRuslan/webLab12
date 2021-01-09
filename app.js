const App = {
  data() {
    return {
      placeholderSurname: "Введите фамилию",
      placeholderName: "Введите имя",
      inputValueSurname: "",
      inputValueName: "",
      counter: 0,
      isButtonDisabled: false,
      notes: [],
    };
  },

  methods: {
    addNewNote() {
      if (this.inputValueName !== "" && this.inputValueSurname !== "") {
        this.notes.push(
          `${cFirstLet(this.inputValueSurname)} ${cFirstLet(
            this.inputValueName
          )}`
        );
        this.inputValueName = "";
        this.inputValueSurname = "";
      }
    },
    
    // не работает с пробелами на конце!
    // cFirstLet(item) {
    //   return item
    //     .split(" ")
    //     .map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1))
    //     .join(" ");
    // },

    calcCounter() {
      this.counter = this.inputValueName.length + this.inputValueSurname.length;
      return this.counter;
    },

    clearList() {
      this.notes = [];
    },
  },
};

function cFirstLet(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

Vue.createApp(App).mount("#app");
