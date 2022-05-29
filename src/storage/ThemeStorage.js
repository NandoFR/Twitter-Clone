const ThemeStorage = {
    setBackground(background) {
        localStorage.setItem('theme_background', background);
    },
    getBackground() {
        return localStorage.getItem('theme_background');
    },
    setColor(color) {
        localStorage.setItem('theme_color', color);
    },
    getColor() {
        return localStorage.getItem('theme_color');
    },
    setFontSize(font) {
        localStorage.setItem('theme_font', font);
    },
    getFontSize() {
        return localStorage.getItem('theme_font');
    },
};

export default ThemeStorage;
