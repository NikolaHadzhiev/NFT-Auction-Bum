import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  spacing: 12,
  palette: {
    type: "dark",
    primary: {
      main: "#4e24f2",
    },
    secondary: {
      main: "#24F25E",
    },
    warning: {
      main: "#FFC120",
    },
    info: {
      main: "#21f396",
    },
    success: {
      main: "#1bde51",
    },
    error: {
      main: "#ff4b2f",
    },
    background: {
      default: "#0C0C14",
      paper: "#181828",
    },
    divider: "#222237",
    text: {
      primary: "#FFFFFF",
      secondary: "#E1E1FC",
      disabled: "#8d8da8",
      hint: "#E1E1FC",
    },
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 35,
          paddingRight: 35,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: 15,
          fontSize: 14,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#0C0C14",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 13,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: "#181828",
        },
        outlined: {
          backgroundColor: "#181828",
          borderColor: "#181828",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: "3.7rem",
      fontWeight: 1000,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 1000,
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.1rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 1000,
    },
    button: {
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.7,
    },
    subtitle1: {
      lineHeight: 1.7,
    },
    subtitle2: {
      lineHeight: 1.7,
    },
  },
});

export default theme;
