const sampleTextInput = document.getElementById("sample-text");
const leftSizeInput = document.getElementById("left-size");
const rightSizeInput = document.getElementById("right-size");
const fontWeightInput = document.getElementById("font-weight");
const opszInput = document.getElementById("opsz");
const letterSpacingInput = document.getElementById("letter-spacing");
const leftFontInput = document.getElementById("left-font");
const rightFontInput = document.getElementById("right-font");

const leftText = document.getElementById("left-text");
const rightText = document.getElementById("right-text");
const leftLabel = document.getElementById("left-label");
const rightLabel = document.getElementById("right-label");

const leftSizeValue = document.getElementById("left-size-value");
const rightSizeValue = document.getElementById("right-size-value");
const fontWeightValue = document.getElementById("font-weight-value");
const opszValue = document.getElementById("opsz-value");
const letterSpacingValue = document.getElementById("letter-spacing-value");
const currentValues = document.getElementById("current-values");

const defaultValues = {
  "left-size": 20,
  "right-size": 20,
  "font-weight": 400,
  opsz: 14,
  "letter-spacing": 0,
  "left-font": "Inter",
  "right-font": "Inter",
};

function updateValues() {
  const sampleText = sampleTextInput.value;
  const leftSize = leftSizeInput.value;
  const rightSize = rightSizeInput.value;
  const fontWeight = fontWeightInput.value;
  const opsz = opszInput.value;
  const letterSpacing = letterSpacingInput.value;
  const leftFont = leftFontInput.value;
  const rightFont = rightFontInput.value;

  leftSizeValue.textContent = leftSize;
  rightSizeValue.textContent = rightSize;
  fontWeightValue.textContent = fontWeight;
  opszValue.textContent = opsz;
  letterSpacingValue.textContent = letterSpacing;

  leftText.textContent = sampleText;
  rightText.textContent = sampleText;

  leftLabel.textContent = leftFont;
  rightLabel.textContent = rightFont;

  leftText.style.fontFamily = `"${leftFont}", sans-serif`;
  leftText.style.fontSize = `${leftSize}px`;
  leftText.style.fontWeight = fontWeight;

  rightText.style.fontFamily = `"${rightFont}", sans-serif`;
  rightText.style.fontSize = `${rightSize}px`;
  rightText.style.fontWeight = fontWeight;
  rightText.style.fontVariationSettings = `"opsz" ${opsz}`;
  rightText.style.letterSpacing = `${letterSpacing}px`;

  currentValues.textContent = `Left (${leftFont}): ${leftSize}px, weight: ${fontWeight}
Right (${rightFont}): ${rightSize}px, weight: ${fontWeight}
font-variation-settings: "opsz" ${opsz}
letter-spacing: ${letterSpacing}px;`;
}

sampleTextInput.addEventListener("input", updateValues);
leftSizeInput.addEventListener("input", updateValues);
rightSizeInput.addEventListener("input", updateValues);
fontWeightInput.addEventListener("change", updateValues);
opszInput.addEventListener("input", updateValues);
letterSpacingInput.addEventListener("input", updateValues);
leftFontInput.addEventListener("change", updateValues);
rightFontInput.addEventListener("change", updateValues);

document.querySelectorAll(".refresh-button").forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = this.getAttribute("data-reset");
    const defaultValue = this.getAttribute("data-value");

    document.getElementById(inputId).value = defaultValue;

    updateValues();
  });
});

updateValues();
