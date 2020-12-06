import React from "react";
import Input from "./Input";
import AutoComplete from "./Autocomplete";
import DynamicInput from "./DynamicInput";
import MaskedInput from "./MaskedInput";
import InputUploader from "./InputUploader";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest}/>
    case 'autocomplete':
      return <AutoComplete {...rest}/>
    case 'dynamicInput':
      return <DynamicInput {...rest}/>
    case 'maskedInput':
      return <MaskedInput {...rest}/>
    case 'inputUploader':
      return <InputUploader {...rest}/>
    default:
      return null
  }
}

export default FormikControl;
