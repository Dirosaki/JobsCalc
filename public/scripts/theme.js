const html = document.querySelector("html");

const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    colorBackground: getStyle(html, "--color-background"),
    colorText: getStyle(html, "--color-text"),
    colorPrimary: getStyle(html, "--color-primary"),
    colorSecondary: getStyle(html, "--color-secondary"),
    colorBorder: getStyle(html, "--color-border"),
    colorSecondaryHover: getStyle(html, "--color-secondary-hover"),
    colorInputBackground: getStyle(html, "--color-input-background"),
    colorButtonText: getStyle(html, "--color-button-text"),
    colorHairlineInDark: getStyle(html, "--color-hairline-in-dark"),
    colorHairlineInLight: getStyle(html, "--color-hairline-in-light"),
    colorCardTitle: getStyle(html, "--color-card-title"),
    colorCardLabel: getStyle(html, "--color-card-label"),
    colorCardContent: getStyle(html, "--color-card-content"),
    colorCancel: getStyle(html, "--color-cancel"),
    colorTitle: getStyle(html, "--color-title"),
    colorSave: getStyle(html, "--color-save"),
    colorSaveHover: getStyle(html, "--color-save-hover"),
};

const darkMode = {
    colorBackground: "#3d4147",
    colorText: "#141418",
    colorPrimary: "#141418",
    colorSecondary: "#4A96F3",
    colorBorder: "#767F8D",
    colorSecondaryHover: "#2C85F2",
    colorInputBackground: "#070703",
    colorButtonText: "#000000",
    colorHairlineInDark: "#b0b0b0",
    colorHairlineInLight: "#1e1e1e",
    colorCardTitle: "#5A5A66",
    colorCardLabel: "#CFCFCF",
    colorCardContent: "#878787",
    colorCancel: "#1e1c1a",
    colorTitle: "#eeeeee",
    colorSave: "#07EB60",
    colorSaveHover: "#07EB39",
};

const tranformKey = (key) => `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;

const changeColors = (colors) => {
    Object.keys(colors).map((key) =>
        html.style.setProperty(tranformKey(key), colors[key])
    );
};

const checkboxColorMode = JSON.parse(localStorage.getItem("colorMode"));

if (checkboxColorMode) {
    changeColors(darkMode);
}