import React from 'react';
import {Autocomplete as MuiAutocomplete} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import {FormGroup} from '@material-ui/core';
import {TextField, ThemeProvider, Typography} from "@material-ui/core";
import {Field} from 'formik';
import {theme} from "./UI/MuiTheme";

const useStyles = makeStyles(() => ({
  input: {
    minHeight: "5vh",
    lineHeight: "4vh",
    color: "#fff",
    fontWeight: "600",
    fontSize: "3vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  helperText: {
    height: "3vh",
    fontSize: "2vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  popper: {
    width: "100%",
    fontSize: "3vh",
    fontWeight: "600",
    color: "#000",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  shrink: {
    transform: 'translate(0, -1vh) scale(0.75)'
  }
}));

export default function Autocomplete({touched, name, options, errors, setFieldValue, nameOfKey, ...rest}) {
  const classes = useStyles();
  const firstOption = [{[nameOfKey]: !options.error?"Загрузка...":"Ошибка загрузки!"}];

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <MuiAutocomplete
          multiple
          options={options.data?options.data:firstOption}
          getOptionDisabled={(option) => !options.data && option === firstOption[0]}
          getOptionLabel={(option) => option[nameOfKey]}
          noOptionsText={!!options.error?"Ошибка загрузки!":"Нет вариантов"}
          onChange={(e, value) => setFieldValue(name, value)}
          renderInput={(params) => (
            <Field
              name={name}
              {...params}
              {...rest}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              InputProps={{
                ...params.InputProps,
                classes: {
                  input: classes.input,
                },
              }}
              error={touched[name] && !!errors[name]}
              helperText={touched[name] && errors[name]}
              component={TextField}
            />
          )}
          renderOption={(option) => <Typography placement="bottom-left" className={classes.popper}>{option[nameOfKey]}</Typography>}
        />
      </FormGroup>
    </ThemeProvider>
  );
}