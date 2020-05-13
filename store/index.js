export const state = () => ({
  theme: {
    colors: {
      primary: "#41B883",
      secondary: "#41B883",
      accent: "#41B883"
    },
    text: {
      light: "#ffffff",
      dark: "#000000"
    }
  },
  themeColor: "#41B883"
});

export const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
  }
};

export const getters = {
  themeColor: state => state.themeColor
};
