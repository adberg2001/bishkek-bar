import React from "react";
import { Formik, Form } from 'formik';
import FormikControl from "../../FormikControl/FormikControl";
import FormikSubmit from "../../FormikControl/FormSubmit";
function DepartmentsCreateFields({initialValues, createSchema, foodsCategories, submit}){
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createSchema}
      onSubmit={(values, { setSubmitting }) => {
        submit(values, setSubmitting)
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
          <FormikControl
            control="input"
            type="text"
            label="Адрес"
            name="location"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="Средний счет"
            name="check"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="number"
            label="Количество мест"
            name="seats"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="Парковка"
            name="parking"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="Музыка"
            name="music"
            errors={errors}
          />
          <FormikControl
            control="inputUploader"
            name="image"
            setFieldValue={setFieldValue}
            initialValues={values}
            label="Изображение заведения"/>
          <FormikControl
            control="input"
            type="text"
            label="facebook"
            name="facebook_profile"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="instagram"
            name="insta_profile"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="веб сайт"
            name="web_profile"
            errors={errors}
          />
          <FormikControl
            control="input"
            type="text"
            label="Описание"
            multiline
            rows={9}
            name="description"
            errors={errors}
          />
          <FormikControl
            control="autocomplete"
            label="Выбор кухни"
            touched={touched}
            name="food"
            options={foodsCategories}
            setFieldValue={setFieldValue}
            errors={errors}
            nameOfKey="main_title"
          />
          <FormikControl
            control="dynamicInput"
            title="Телефоны"
            label="номер телефона"
            setFieldValue={setFieldValue}
            initialValues={values}
            name="phone_number"
            mask="+\9\96 999 999 999"
            keyName="number"
          />
          <FormikSubmit isSubmitting={isSubmitting} text="Добавить"/>
          <pre className="mt-4">{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default DepartmentsCreateFields;