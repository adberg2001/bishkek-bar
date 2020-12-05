import React from "react";
import Input from "./Input";
import AutoComplete from "./Autocomplete";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest}/>
    case 'autocomplete':
      return <AutoComplete {...rest}/>
    default:
      return null
  }
}

export default FormikControl;
