import React from 'react';
import {Field} from 'formik';
import {FormGroup} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiFormGroup: {
      root: {
        minHeight: "11.5vh",
        margin: "1.5vh 0",
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
  }
});

const useStyles = makeStyles(() => ({
  input: {
    minHeight: "5vh",
    lineHeight: "4vh",
    fontSize: "3vh",
    color: "#fff",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  "&:-webkit-autofill": {
    // WebkitBoxShadow: "0 0 0 1000px black inset",
    WebkitTextFillColor: "#fff",
    transition: "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
    transitionDelay: "background-color 5000s, color 5000s",
  },
  helperText: {
    height: "3vh",
    fontSize: "2vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
}));

function Input({label, as, placeholder, errors, name, ...rest}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Field
          error={errors[name] && errors[name] !== ""}
          helperText={errors[name]}
          name={name}
          label={label}
          placeholder={placeholder}
          autocomplete={false}
          FormHelperTextProps={{
            className: classes.helperText
          }}
          InputProps={{
            classes: {
              input: classes.input
            },
          }}
          as={TextField}
          {...rest}
        />
      </FormGroup>
    </ThemeProvider>
  )
}

export default Input;
