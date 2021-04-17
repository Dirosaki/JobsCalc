const inputName = document.querySelector('#name');
const inputBudget = document.querySelector('#monthly-budget');

inputName.addEventListener('input', ({target}) => {
    target.value = target.value.replace(/[^a-zA-Z\s]/g, '');
})

inputBudget.addEventListener('input', ({target}) => {
    target.value = target.value.replace(/[^0-9\.]/g, '');
})

const checkbox = document.querySelector("input[name=theme]");

if (checkboxColorMode) {
    checkbox.checked = checkboxColorMode;
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
    localStorage.setItem("colorMode", target.checked);
});