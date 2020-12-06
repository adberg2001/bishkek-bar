import React, {useState} from "react";
import style from "./style.module.sass";
import firstImg from "./assets/firstImg.jpg";
import {Field} from "formik"

function InputUploader({name, setFieldValue, initialValues, label}) {
  const [uploadedFile, setUploadedFile] = useState();

  function handleUpload(e) {
    setFieldValue(name, e.target.files[0])
    setUploadedFile(e.target.files[0])
  }

  return (
    <div className={style.mainCont}>
      <div className={style.actionPart}>
        <h3 className={style.label}>{label}</h3>
        <input id="123" onChange={(e) => handleUpload(e)} style={{display: "none"}} type="file"/>
        <label htmlFor="123">
          <span>{label}</span>
        </label>
      </div>
      <div className={style.imgPart}>
        <img src={uploadedFile ? URL.createObjectURL(uploadedFile) : firstImg} alt={uploadedFile?.name}/>
      </div>
    </div>
  )
}

export default InputUploader;