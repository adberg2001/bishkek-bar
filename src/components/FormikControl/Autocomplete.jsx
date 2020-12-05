import React from 'react';
import {Autocomplete as MuiAutocomplete} from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';
import {FormGroup} from '@material-ui/core';
import {TextField, createMuiTheme, ThemeProvider} from "@material-ui/core";
import {Field} from 'formik';

const useStyles = makeStyles(() => ({
  input: {
    minHeight: "5vh",
    lineHeight: "4vh",
    fontSize: "3vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  helperText: {
    height: "3vh",
    fontSize: "2vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  popper: {
    fontSize: "2vh",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        minHeight: "3vh",
        borderRadius: "2px",
        fontWeight: "600",
        color: "#ff5100",
        border: "1px solid #999",
        fontFamily: ['Amatic SC', 'sans-serif'].join(','),
        fontSize: "2.5vh",
      }
    }
  }
});

export default function Autocomplete({touched, name, options, errors, setFieldValue, nameOfKey, ...rest}) {
  const classes = useStyles();
  const firstOption = [{[nameOfKey]: !options.error?"Загрузка...":"Ошибка загрузки!"}];
  console.log(nameOfKey)
  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <MuiAutocomplete
          multiple
          style={{width: "99%"}}
          options={options.data?options.data:firstOption}
          getOptionDisabled={(option) => !options.data && option === firstOption[0]}
          getOptionLabel={(option) => option[nameOfKey]}
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
          // renderOption={(option) => {
          //   console.log(option)
          //   // return (
          //   //   <div>
          //   //     {option.map((o, index) => (
          //   //       <span key={index} className={classes.popper}>
          //   //     {o[nameOfKey]}
          //   //   </span>
          //   //     ))}
          //   //   </div>
          //   // );
          // }}

        />
      </FormGroup>
    </ThemeProvider>
  );
}