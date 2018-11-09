import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Demo from "../sections/Demo";
import Root from "../coreComponents/Root";
import Drawer from "../coreComponents/Drawer";
import Invitations from "../coreComponents/Invitations";

class Router extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <Drawer>
            <Route exact path="/" component={Root} />
            <Route path="/demo" component={Demo} />
            <Route path="/Invitations" component={Invitations} />
            </Drawer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Router;
