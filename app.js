const App = {
  data() {
    return {
      placeholderSurname: "Введите фамилию",
      placeholderName: "Введите имя",
      inputValueSurname: "",
      inputValueName: "",
      canSend: false,
      isButtonDisabled: true,
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

    isSurnameEmpty(event) {},

    // не работает с пробелами на конце!
    // cFirstLet(item) {
    //   return item
    //     .split(" ")
    //     .map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1))
    //     .join(" ");
    // },

    clearList() {
      this.notes = [];
    },
  },

  watch: {
    inputValueName(value) {
      if (value.length > 0 && this.inputValueSurname.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },

    inputValueSurname(value) {
      if (value.length > 0 && this.inputValueName.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },
  },

  computed: {
    countSymbols() {
      return this.inputValueName.length + this.inputValueSurname.length;
    },
  },
};

function cFirstLet(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

Vue.createApp(App).mount("#app");
