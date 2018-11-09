import React, { Component } from "react";
import "../App.css";

import LanguageSelector from "../i18n/languageSelector";
import Button from "@material-ui/core/Button";

import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { selectTheme } from "../theme/actions";

import { SketchPicker } from "react-color";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Demo extends Component {
  state = {
    primaryColor: "#0ff",
    secondaryColor: "#ff0"
  };

  handleChangeprimaryColor = color => {
    this.setState({ primaryColor: color.hex });
  };

  handleChangesecondaryColor = color => {
    console.log(color.hex);
    this.setState({ secondaryColor: color.hex });
  };
  changeColor = () => {
    const { dispatch } = this.props;
    const { primaryColor, secondaryColor } = this.state;
    console.log(primaryColor, secondaryColor);
    dispatch(selectTheme(primaryColor, secondaryColor));
  };
  render() {
    const { classes, intl } = this.props;
    return (
      <div className="App">
        <LanguageSelector />

        <div>
          <CircularProgress className={classes.progress} />
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={this.changeColor}
        >{intl.formatMessage({ id: "labels.selectColor" })}</Button>
        <SketchPicker
          color={this.state.primaryColor}
          onChangeComplete={this.handleChangeprimaryColor}
        />
        <SketchPicker
          color={this.state.secondaryColor}
          onChangeComplete={this.handleChangesecondaryColor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  primaryColor: state.theme.primaryColor,
  secondaryColor: state.theme.secondaryColor
});

export default injectIntl(connect(mapStateToProps)(withStyles(styles)(Demo)));
