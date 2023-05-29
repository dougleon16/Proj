import {
  backCalculateAverage,
  backCalculateGrade,
  backConvertTextToDecimal,
  backConvertTextToInt,
  backConvertDecimalToInt,
} from "../back/metodsBack.js";

const deleteInput = (App) => {
  App.htmlElements.num.value = "";
};

const deleteAllGrades = (App) => {
  App.htmlElements.resultDiv.innerHTML = "";
};

const addBtnDelete = () => {
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "X";
  btnDelete.type = "button";
  btnDelete.classList.add("btnDelete");

  btnDelete.addEventListener("click", () => {
    var respuesta = confirm("¿Desea eliminar esta tarjeta?");
    if (respuesta == true) {
      const card = btnDelete.parentNode;
      card.remove();

      showAverageText();
      showAverageGraphic();
      showGrade();
    }
  });

  return btnDelete;
};

const addCard = (App, valueR) => {
  const cardGeneral = document.createElement("div");
  App.htmlElements.resultDiv.appendChild(cardGeneral);
  cardGeneral.classList.add("cardGrades");

  const cardContainer = document.createElement("div");
  const cardText = document.createTextNode(valueR);
  cardContainer.appendChild(cardText);
  cardContainer.classList.add("container");

  cardGeneral.appendChild(cardContainer);
  cardGeneral.appendChild(addBtnDelete(App));

  deleteInput(App);
};

const showAverageText = (App) => {
  const average = backCalculateAverage(App);
  const response = backConvertTextToDecimal(average);
  App.htmlElements.avg.innerHTML = response;
};

const showAverageGraphic = (App) => {
  let average = backCalculateAverage(App);
  let progressStartValue = backConvertDecimalToInt(
    App.htmlElements.avg.innerText
  );
  let progressEndValue = backConvertDecimalToInt(average);
  let speed = 100;

  let progress = setInterval(() => {
    if (progressStartValue < progressEndValue) {
      progressStartValue++;
    } else if (progressStartValue > progressEndValue) {
      progressStartValue--;
    }

    App.htmlElements.progressValue.textContent = `${progressStartValue}%`;
    App.htmlElements.circularProgress.style.background = `conic-gradient(#4070f4 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
};

const validateStyleGrade = (App, grade) => {
  let response = "";

  switch (grade) {
    case "A":
      App.htmlElements.resultGrade.style.color = "white";
      App.htmlElements.resultGrade.style.background = "#028237";
      break;
    case "B":
      App.htmlElements.resultGrade.style.color = "white";
      App.htmlElements.resultGrade.style.background = "#67BE00";
      break;
    case "C":
      App.htmlElements.resultGrade.style.color = "#A1881D";
      App.htmlElements.resultGrade.style.background = "#FFD207";
      break;
    case "D":
      App.htmlElements.resultGrade.style.color = "white";
      App.htmlElements.resultGrade.style.background = "#FF8202";
      break;
    default:
      App.htmlElements.resultGrade.style.color = "white";
      App.htmlElements.resultGrade.style.background = "#FF3800";
      break;
  }

  return response;
};

const showGrade = (App) => {
  const average = backCalculateAverage(App);
  const response = backCalculateGrade(average);
  validateStyleGrade(response);
  App.htmlElements.resultGrade.innerHTML = response;
};

export {
  deleteInput,
  deleteAllGrades,
  addBtnDelete,
  addCard,
  showAverageText,
  showAverageGraphic,
  showGrade,
  validateStyleGrade,
};
