import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function mapStateToProps(state) {
  const { primaryColor, secondaryColor } = state.theme;
  return { primaryColor, secondaryColor };
}

const ThemeProvider = props => {
  const { primaryColor, secondaryColor, children } = props;
  const theme = createMuiTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
    typography: {
        useNextVariants: true,
      },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default injectIntl(connect(mapStateToProps)(ThemeProvider));
