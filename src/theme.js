import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
  },

  typography: {
    h6: {
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "900",
      letterSpacing: "-0.05rem",
      lineHeight: 1.6,
    },

    subtitle2: {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Roboto, sans-serif",
      fontSize: "0.875rem",
      fontWeight: "500",
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: "0.006rem",
      lineHeight: 1.57,
    },

    subtitle3: {
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: "Roboto, sans-serif",
      fontSize: "1rem",
      fontWeight: "700",
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: "0.009rem",
      lineHeight: 1.5,
    },

    subtitle4: {
      color: "rgba(0, 0, 0, 0.38)",
      fontFamily: "Roboto, sans-serif",
      fontSize: "1rem",
      fontWeight: "700",
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: "0.009rem",
      lineHeight: 1.5,
    },

    subtitle5: {
      color: "rgba(0, 0, 0, 0.87)",
      fontFamily: "Roboto, sans-serif",
      fontSize: "1rem",
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: "0.009rem",
      lineHeight: 1.5,
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1148px",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          width: "100%",
        },
        input: {
          width: "100%",
          borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          width: "130px",
          color: "rgba(0, 0, 0, 0.6)",
          letterSpacing: "0.025rem",
          lineHeight: 1.71,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        adornedEnd: {
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1rem",
          letterSpacing: "0.009rem",
          lineHeight: 1.5,
          border: "1px solid rgba(0, 0, 0, 0.23)",
          padding: "0",
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1rem",
          letterSpacing: "0.009rem",
          lineHeight: 1.5,
          border: "1px solid rgba(0, 0, 0, 0.23)",
          padding: "8px 14px",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "-5px",
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#bdbdbd",
          letterSpacing: "0.009rem",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        vertical: {
          width: "0.188rem",
          marginLeft: "0.625rem",
          marginRight: "0.625rem",
        },
      },
    },
  },
});

export default theme;
