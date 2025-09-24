function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  document.getElementById("bmiValue").textContent = bmi.toFixed(1);

  let category, categoryClass, description;

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "category-underweight";
    description =
      "Your BMI suggests you may be underweight. Consider consulting with a healthcare professional about healthy weight gain strategies.";
  } else if (bmi < 25) {
    category = "Normal Weight";
    categoryClass = "category-normal";
    description =
      "Your BMI indicates that you are at a healthy weight for your height. Keep up the good work with a balanced diet and regular exercise!";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryClass = "category-overweight";
    description =
      "Your BMI suggests you may be overweight. Consider adopting a healthier lifestyle with balanced nutrition and regular physical activity.";
  } else {
    category = "Obese";
    categoryClass = "category-obese";
    description =
      "Your BMI indicates obesity. It's recommended to consult with a healthcare professional for personalized advice on weight management.";
  }

  const categoryElement = document.getElementById("bmiCategory");
  categoryElement.textContent = category;
  categoryElement.className = `bmi-category ${categoryClass}`;
  document.getElementById("bmiDescription").textContent = description;

  resultDiv.classList.add("show");
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") calculateBMI();
});

document.getElementById("height").addEventListener("input", function (e) {
  if (this.value < 0) this.value = "";
});

document.getElementById("weight").addEventListener("input", function (e) {
  if (this.value < 0) this.value = "";
});
