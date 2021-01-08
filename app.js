const App = {
  data() {
    return {
      placeholderSurname: "Введите фамилию",
      placeholderName: "Введите имя",
      inputValueSurname: "",
      inputValueName: "",
      canSend: false,
      isButtonDisabled: false,
      notes: [],
    };
  },

  methodds: {
    addNewNote() {
      if (this.inputValueName !== "" && this.inputValueSurname !== "") {
        this.notes.push(this.inputValueName + " " + this.inputValueSurname);
        this.inputValueName = "";
        this.inputValueSurname = "";
      }
    },
  },
};

Vue.createApp(App).mount("#app");
