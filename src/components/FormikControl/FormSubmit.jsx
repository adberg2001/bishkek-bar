import React from "react";

function FormikSubmit({isSubmitting, text}){
  const btnStyle = {
    fontSize: "4vh",
    backgroundColor: "#ff5100",
    color: "#000",
    fontWeight: "600",
    borderRadius: "2px",
    padding: "0 2vh",
    margin: "5vh 0"
  }
  return (
    <button style={btnStyle} disabled={isSubmitting} type="submit">{text}</button>
  )
}

export default FormikSubmit;