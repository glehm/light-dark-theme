const html = document.querySelector("html");

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgWhite: getStyle(html, "--bg-white"),
    textDark: getStyle(html, "--text-dark")
}

const darkMode = {
    bg: "#30353b",
    bgWhite: "#1f2227",
    textDark: "#ffffff",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
}

const checkbox = document.querySelector('input[name=theme]');

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'));

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode;
  changeColors(darkMode);
}

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);  
  localStorage.setItem('color-mode', target.checked);
})