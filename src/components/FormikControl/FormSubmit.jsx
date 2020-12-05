import React from "react";

function FormikSubmit({isSubmitting}){
  const btnStyle = {
    fontSize: "4vh",
    backgroundColor: "#ff5100",
    color: "#000",
    fontWeight: "600",
    borderRadius: "2px",
    padding: "0 2vh"
  }
  return (
    <button style={btnStyle} disabled={isSubmitting} type="submit">Submit</button>
  )
}

export default FormikSubmit;