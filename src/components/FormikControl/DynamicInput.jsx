import React, {useEffect, useState} from "react";
import {FormGroup, TextField, ThemeProvider, Typography} from "@material-ui/core";
import {Field} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./UI/MuiTheme";
import FormikControl from "./FormikControl";

const useStyles = makeStyles(() => ({
  mainCont: {
    borderBottom: "1px solid #fff",
    padding: ".8vh 0",
    margin: ".4vh 0"
  },
  input: {
    minHeight: "5vh",
    lineHeight: "4vh",
    fontSize: "3vh",
    color: "#fff",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  title: {
    minHeight: "5vh",
    lineHeight: "4vh",
    fontWeight: "600",
    fontSize: "3vh",
    color: "#fff",
    fontFamily: ['Amatic SC', 'sans-serif'].join(','),
  },
  addFieldBtn: {
    height: "3vh",
    fontWeight: "600",
    fontSize: "2.2vh",
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: "2px",
    margin: ".4vh",
  },
}));

function DynamicInput({title, initialValues, label, setFieldValue, name, keyName, mask, ...rest}) {
  const classes = useStyles();
  const value = initialValues[name];
  const [isVisibleBtn, setIsVisibleBtn] = useState(true);

  function handleAddField(e) {
    e.preventDefault();
    setFieldValue(name, [...value, {[keyName]: ""}])
  }

  useEffect(() => {
    if (!!!value.length ) {
      setIsVisibleBtn(true)
    } else if (value[value.length - 1][keyName] !== "" && value.length <= 6) {
      setIsVisibleBtn(true)
    } else {
      setIsVisibleBtn(false)
    }
  }, [initialValues])
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainCont}>
        <Typography className={classes.title}>{title}</Typography>
        <FormGroup style={{width: "90%", transform: "scale(.95)", display: !!value.length?"":"none"}}>
          {
            value.map((field, i) => (
              name !== "phone_number"
                ? <Field
                key={i}
                name={`${name}[${i}].${keyName}`}
                label={label}
                InputProps={{classes: {input: classes.input}}}
                {...rest}
                as={TextField}
              />
              : <FormikControl
                  key={i}
                  control="maskedInput"
                  label={label}
                  name={`${name}[${i}].${keyName}`}
                  mask={mask}
                  {...rest}
                />
            ))
          }
        </FormGroup>
        <button style={{display: isVisibleBtn ? "unset" : "none"}} className={classes.addFieldBtn}
                onClick={(e) => handleAddField(e)}>
          Добавить поле для ввода
        </button>
      </div>
    </ThemeProvider>
  )
}

export default DynamicInput