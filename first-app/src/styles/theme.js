import { createMuiTheme } from "@material-ui/core/styles"
import colors from "./colors"
import spacing from "./spacing"
import shadows from "./shadows"
import breakpoints from "./breakpoints"

const theme = createMuiTheme({
  spacing,
  breakpoints,
  shadows,

  palette: {
    primary: { ...colors.application.primary },
    secondary: { ...colors.application.secondary },
    error: { ...colors.notification.danger },
    success: { ...colors.notification.success },
    info: { ...colors.notification.info },
    warning: { ...colors.notification.warning },
    grey: { ...colors.grey },
    green: { ...colors.notification.success },
  },

  typography: {
    fontFamily: ["Montserrat"],
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 43,
      fontWeight: 600,
    },
    h2: {
      fontSize: 34,
      fontWeight: 600,
    },
    h3: {
      fontSize: 27,
      fontWeight: 600,
    },
    h4: {
      fontSize: 22,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
  },

  // set default props for components
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
    },
    MuiCard: {
      variant: "outlined",
    },
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },
    MuiSelect: {
      variant: "outlined",
    },
    MuiAutocomplete: {
      popupIcon: false,
    },
  },

  // set default styles for components
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
    MuiTypography: {
      h4: {
        paddingBottom: "2rem",
      },
      h5: {
        paddingBottom: "1rem",
      },
      subtitle1: {
        fontSize: "1.2rem",
      },
    },
    MuiOutlinedInput: {
      root: {
        background: colors.brand.white,
      },
      input: {
        padding: "15px",
      },
      adornedStart: {
        paddingLeft: 0,
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 500,
        paddingBottom: 4,
        textAlign: "left",
        color: colors.grey[900],
      },
    },
    MuiCard: {
      root: {
        borderRadius: 12,
        textAlign: "center",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "8px",
        textTransform: "capitalize",
      },
      sizeLarge: {
        padding: "1rem 3rem",
        height: 50,
      },
    },
    MuiSvgIcon: {
      root: {
        padding: "0.5rem",
        verticalAlign: "middle",
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
      },
    },
    MuiBackdrop: {
      root: {
        zIndex: 1350,
        color: "#fff",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.brand.main,
      },
    },
    MuiSelect: {
      select: {},
      icon: {
        padding: 0,
        verticalAlign: "middle",
      },
    },
    MuiInputBase: {
      root: {
        padding: 0,
        width: "100%",
        "& .MuiSvgIcon-root": {
          color: colors.grey[400],
        },
        "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
          color: colors.grey[900],
        },
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        '&&[class*="MuiOutlinedInput-root"]': {
          padding: 0,
          "& $input": {
            padding: "15px",
            paddingLeft: 0,
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
      },
    },
  },
})

export default theme
