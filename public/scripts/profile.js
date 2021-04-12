const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    colorBackground: getStyle(html, "--color-background"),
    colorText: getStyle(html, "--color-text"),
    colorPrimary: getStyle(html, "--color-primary"),
    colorSecondary: getStyle(html, "--color-secondary"),
    colorSecondaryHover: getStyle(html, "--color-secondary-hover"),
    colorInputBackground: getStyle(html, "--color-input-background"),
    colorButtonText: getStyle(html, "--color-button-text"),
    colorHairlineInDark: getStyle(html, "--color-hairline-in-dark"),
    colorHairlineInLight: getStyle(html, "--color-hairline-in-light"),
    colorCardTitle: getStyle(html, "--color-card-title"),
    colorCardLabel: getStyle(html, "--color-card-label"),
    colorCardContent: getStyle(html, "--color-card-content"),
    colorCancel: getStyle(html, "--color-cancel"),
};

const darkMode = {
    colorBackground: "#0f0d0a",
    colorText: "#030200",
    colorPrimary: "#dddcdf",
    colorSecondary: "#861eff",
    colorSecondaryHover: "#9228ff",
    colorInputBackground: "#070703",
    colorButtonText: "#000000",
    colorHairlineInDark: "#b0b0b0",
    colorHairlineInLight: "#1e1e1e",
    colorCardTitle: "#FFFFFF",
    colorCardLabel: "#404040",
    colorCardContent: "#878787",
    colorCancel: "#1e1c1a",
};

const tranformKey = (key) => `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;

const changeColors = (colors) => {
    Object.keys(colors).map((key) =>
        html.style.setProperty(tranformKey(key), colors[key])
    );
};

const checkboxColorMode = JSON.parse(localStorage.getItem("colorMode"));

if (checkboxColorMode) {
    checkbox.checked = checkboxColorMode;
    changeColors(darkMode);
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
    localStorage.setItem("colorMode", target.checked);
});