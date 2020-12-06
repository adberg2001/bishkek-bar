import React from 'react';
import {Field} from 'formik';
import {FormGroup} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, ThemeProvider} from "@material-ui/core";
import InputMask from "react-input-mask";
import {theme} from "./UI/MuiTheme"

const useStyles = makeStyles(() => ({
  input: {
    minHeight: "5vh",
    lineHeight: "4vh",
    fontSize: "3vh",
    color: "#fff",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  helperText: {
    height: "3vh",
    fontSize: "2vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
}));

function MaskedInput({label, errors, name, mask, ...rest}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Field name={name}>
          {({field}) => (
            <InputMask {...field} mask={mask}>
              {(innerProps) => (
                <TextField
                  {...innerProps}
                  error={errors && errors[name] && errors[name] !== ""}
                  FormHelperTextProps={{
                    className: classes.helperText
                  }}
                  helperText={errors && errors[name]}
                  InputProps={{
                    classes: {
                      input: classes.input
                    },
                  }}
                  {...rest}
                  label={label}
                />
              )}
            </InputMask>
          )}
        </Field>
      </FormGroup>
    </ThemeProvider>
  )
}

export default MaskedInput;
