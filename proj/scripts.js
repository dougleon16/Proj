import {
  deleteInput,
  deleteAllGrades,
  addBtnDelete,
  addCard,
  showAverageText,
  showAverageGraphic,
  showGrade,
  validateStyleGrade,
} from "./front/methodsFront.js";

import {
  backCalculateAverage,
  backCalculateGrade,
  backConvertTextToDecimal,
  backConvertTextToInt,
  backConvertDecimalToInt,
} from "../back/metodsBack.js";

(() => {
  const App = {
    htmlElements: {
      form: document.querySelector("form"),
      num: document.querySelector(".input_grade"),
      resultDiv: document.querySelector("#listaGrades"),
      btnAddGrade: document.querySelector(".btnAddGrade"),
      btnDeleteAllGrades: document.querySelector(".btnDeleteGrades"),
      avg: document.querySelector("#avg"),
      resultGrade: document.querySelector("#myGrade"),
      circularProgress: document.querySelector(".circProgress"),
      progressValue: document.querySelector(".progValue"),
    },

    handlers: {
      onFormSubmit: (e) => {
        e.preventDefault();
        const valueGrade = App.htmlElements.num.value;
        App.methodsFront.addCard(App, valueGrade);
        App.methodsFront.showAverageText(App);
        App.methodsFront.showAverageGraphic(App);
        App.methodsFront.showGrade(App);
      },
    },

    methodsFront: {
      deleteInput,
      deleteAllGrades,
      addBtnDelete,
      addCard,
      showAverageText,
      showAverageGraphic,
      showGrade,
      validateStyleGrade,
    },

    methodsBack: {
      backCalculateAverage,
      backCalculateGrade,
      backConvertTextToDecimal,
      backConvertTextToInt,
      backConvertDecimalToInt,
    },
    init: () => {
      App.htmlElements.form.addEventListener(
        "submit",
        App.handlers.onFormSubmit
      );
    },
  };

  App.init();
})();
