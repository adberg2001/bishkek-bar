import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../../MainWrapper";
import { Formik, Form, Field } from 'formik';
import FormikControl from "../../FormikControl/FormikControl";
import * as Yup from 'yup';

function DepartmentsCreateComponent(){

  const initialValues = {
    title: "",
    location: "",
    check: "",
    seats: "",
    parking: "",
    music: "",
    facebook_profile: "",
    insta_profile: "",
    web_profile: "",
    description: "",
    food: "",
    phone_number: [],
  }
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .max(50, 'Cлишком длинное название!')
      .required('Обязательное поле'),
    location: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Обязательное поле'),
  });

  return (
    <MainWrapper>
      <div className={style.mainCont}>
        <h2>Добавление заведения</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({values, errors, isSubmitting, setFieldValue, touched})=> (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Название заведении"
                name="title"
                errors={errors}
              />
              {/* If this field has been touched, and it contains an error, display it*/}
              {touched.username && errors.username && <div>{errors.username}</div>}
              <Field name="location" />
              {/* If this field has been touched, and it contains an error, display it */}
              {touched.email && errors.email && <div>{errors.email}</div>}
              <button disabled={isSubmitting} type="submit">Submit</button>
              <pre className="mt-4">{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
            )}
        </Formik>

      </div>
    </MainWrapper>
  )
}

export default DepartmentsCreateComponent;