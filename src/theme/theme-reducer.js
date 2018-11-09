import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const initialState = {
  primaryColor: blue,
  secondaryColor: red
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH":
      return {
        primaryColor: {
          main: action.primaryColor
        },
        secondaryColor: {
          main: action.secondaryColor
        }
      };
    default:
      return state;
  }
};
