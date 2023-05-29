const backCalculateAverage = (App) => {
  const listGrades = document.querySelectorAll(".cardGrades .container");
  let response = 0,
    sumGrades = 0;
  listGrades.forEach((grade) => {
    sumGrades += App.methodsBack.backConvertTextToInt(grade.textContent);
  });
  response = sumGrades / listGrades.length;
  return response;
};

const backCalculateGrade = (average) => {
  let response = "";

  switch (true) {
    case average >= 90:
      response = "A";
      break;
    case average >= 80:
      response = "B";
      break;
    case average >= 70:
      response = "C";
      break;
    case average >= 60:
      response = "D";
      break;
    default:
      response = "F";
      break;
  }

  return response;
};

const backConvertTextToDecimal = (value) => {
  return parseFloat(value).toFixed(2);
};

const backConvertTextToInt = (value) => {
  return parseInt(value);
};

const backConvertDecimalToInt = (value) => {
  return Math.floor(value);
};

export {
  backCalculateAverage,
  backCalculateGrade,
  backConvertTextToDecimal,
  backConvertTextToInt,
  backConvertDecimalToInt,
};
