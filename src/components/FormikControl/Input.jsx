import React from 'react';
import {Field} from 'formik';
import {FormGroup} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        height: "5vh",
        fontWeight: "600",
        fontFamily: ['Amatic SC', 'sans-serif'].join(','),
        fontSize: "3vh",
        "&$focused": { // increase the specificity for the pseudo class
          color: "#ff5100"
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  input: {
    height: "3vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  helperText: {
    height: "3vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  }
}));

function Input({label, as, placeholder, errors, name, ...rest}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Field
          error={errors['title'] && errors['title'] !== ""}
          helperText={errors['title']}
          name={name}
          label={label}
          placeholder={placeholder}
          FormHelperTextProps={{
            className: classes.helperText
          }}
          InputProps={{
            classes: {
              input: classes.input,
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
