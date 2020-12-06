import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiFormGroup:{
      root: {
        minHeight: "11.5vh",
        margin:  "1.5vh 0",
      }
    },
    MuiInputLabel: {
      root: {
        minHeight: "4vh",
        fontWeight: "600",
        color: "#fff",
        fontFamily: ['Amatic SC', 'sans-serif'].join(','),
        fontSize: "3vh",
        "&$focused": {
          color: "#ff5100"
        },
        shrink: {
          transform: 'translate(0, -1vh) scale(0.75)',
        }
      }
    },
    MuiInputBase: {
      root: {
        fontWeight: "600",
        fontFamily: ['Amatic SC', 'sans-serif'].join(','),
        fontSize: "3vh",
        borderBottom: "1px solid #fff",
        transition: "none",
      },
    },
    MuiChip: {
      root: {
        minHeight: "3vh",
        lineHeight: "3vh",
        borderRadius: "2px",
        fontWeight: "600",
        color: "#ff5100",
        border: "1px solid #999",
        fontFamily: ['Amatic SC', 'sans-serif'].join(','),
        fontSize: "2.5vh",
      }
    },
  }
});