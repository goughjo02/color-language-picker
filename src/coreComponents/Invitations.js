import React from "react";
import ReactDOM from "react-dom";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";


// see documentation for supported input formats
const data = [["attribute", "attribute2"], ["value1", "value2"]];

class Invitations extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
      console.log("rendering invitations")
    return (
      <div>
        <PivotTableUI
          data={data}
          onChange={s => this.setState(s)}
          {...this.state}
        />
      </div>
    );
  }
}

export default Invitations;
