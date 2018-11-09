import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { intlShape, injectIntl } from "react-intl";

import { selectedLocale } from "./actions";
//import 'styles/dropdown.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class LanguageSelector extends React.Component {
  render() {
    const { intl, selectedLocale } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p>{intl.formatMessage({ id: "labels.language" })}</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper style={{ width: "100%" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ width: "100%" }}
              onClick={() => selectedLocale("en")}
            >
              en
            </Button>
          </Paper>
          <Paper style={{ width: "100%" }}>
            <Button
              color="secondary"
              variant="contained"
              style={{ width: "100%" }}
              onClick={() => selectedLocale("fr")}
            >
              fr
            </Button>
          </Paper>
          <Paper style={{ width: "100%" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ width: "100%" }}
              onClick={() => selectedLocale("es")}
            >
              es
            </Button>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
const mapStateToProps = rootState => {
  const { locale } = rootState;
  return {
    rootLanguage: locale.locale
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedLocale }, dispatch);
}
LanguageSelector.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(LanguageSelector))
);
