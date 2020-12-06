import React, {useEffect, useState} from "react";
import style from "./style.module.sass"
import MainWrapper from "../../MainWrapper";
import * as Yup from 'yup';
import DepartmentsCreateFields from "./Fields";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodCategories} from "../../Foods/Categories/actions";
import request from "../../../request/request";

function DepartmentsCreateComponent() {

  const dispatch = useDispatch()

  const foodsCategories = useSelector(state => state.foodsCategories.foodCategories)

  useEffect(() => {
    dispatch(fetchFoodCategories("GET", null, "/foods/foodcategory/"))
  }, [dispatch])

  const initialValues = {
    title: "",
    location: "",
    check: "",
    seats: "",
    parking: "",
    music: "",
    image: null,
    facebook_profile: "",
    insta_profile: "",
    web_profile: "",
    description: "",
    food: [],
    phone_number: [],
  }
  const withoutShortSchema = Yup.string().max(50, 'Cлишком длинное название!').required('Обязательное поле');
  const withShortSchema = Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required');
  const createSchema = Yup.object().shape({
    title: withoutShortSchema,
    location: withShortSchema,
    parking: withoutShortSchema,
    music: withShortSchema,
    check: withoutShortSchema,
    seats: withoutShortSchema,
  });

  function submit(values, setSubmitting) {
    const phone_number = values.phone_number.map(p => {
      return {number: p.number.split(' ').join('')}
    })
    const foodCategory = values.food?.map(f => f.id);
    const data = {...values, phone_number: phone_number, food: foodCategory};
    // const {image, ...rest} = data;
    delete data?.image
    request("POST", "/departments/departments/", JSON.stringify(data), "JSON")
      .then(r => r.json())
      .then(j => {
        if (values.image) {
          const formData = new FormData();
          formData.append("image", values.image, values.image.name)
          request("PATCH", `/departments/departments/${j.id}/`, formData).then(r => r.json()).then(j => console.log(j))
        }
      })
    setSubmitting(false)
  }

  return (
    <MainWrapper>
      <div className={style.mainCont}>
        <h2>Добавление заведения</h2>
        <DepartmentsCreateFields
          initialValues={initialValues}
          createSchema={createSchema}
          foodsCategories={foodsCategories}
          submit={submit}/>
      </div>
    </MainWrapper>
  )
}

export default DepartmentsCreateComponent;