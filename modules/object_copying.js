const theme = {
  typography: {
    h1: {
      size: 32,
    },
    h2: {
      size: 32,
    },
  },
  pallete: {
    primary: {
      main: "red",
      light: "blue",
    },
  },
};

const newTheme = (theme) => {
  return {
    ...theme,
    pallete: {
        ...theme.pallete,
      secondary: {
        main: "pink",
        light: "blue",
      },
    },
  };
};


console.log(newTheme(theme))
console.log(JSON.stringify( newTheme(theme) ))