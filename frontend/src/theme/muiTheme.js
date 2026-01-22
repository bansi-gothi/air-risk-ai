import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#09226C", // deep navy
    },
    secondary: {
      main: "#1976d2", // optional accent
    },
    background: {
      default: "#ffffff", // white background
      paper: "#ffffff", // white cards
    },
    text: {
      primary: "#09226C",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
      color: "#09226C",
    },
    h5: {
      fontWeight: 600,
      color: "#09226C",
    },
    subtitle1: {
      fontWeight: 500,
      color: "#555555",
    },
    body1: {
      fontSize: 14,
      color: "#333333",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#09226C", // navy top bar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
