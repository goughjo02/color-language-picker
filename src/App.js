import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ReduxConnectedIntlProvider from "./i18n/ConnectedIntlProvider";
import { localeReducer } from "./i18n/locale-reducer";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";
import { addLocaleData } from "react-intl";
import { themeReducer } from "./theme/theme-reducer";

import ThemeProvider from "./theme/ThemeProvider";
import Router from "./router/Router";

// Combine Redux reduers
const rootReducer = combineReducers({
  locale: localeReducer,
  theme: themeReducer
});

// Log Redux state at every change
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

// Create Redux store
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(
  createStore
);

// Add internationalisation data
addLocaleData([...en, ...es, ...fr]);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ReduxConnectedIntlProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </ReduxConnectedIntlProvider>
      </Provider>
    );
  }
}

export default App;
