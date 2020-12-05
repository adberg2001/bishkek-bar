import React, {useEffect} from "react";
import style from "./style.module.sass"
import MainWrapper from "../../MainWrapper";
import * as Yup from 'yup';
import DepartmentsCreateFields from "./Fields";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodCategories} from "../../Foods/Categories/actions";

function DepartmentsCreateComponent(){

  const dispatch = useDispatch()

  const foodsCategories = useSelector(state => state.foodsCategories.foodCategories)

  useEffect(()=> {
    dispatch(fetchFoodCategories("GET", null, "/foods/foodcategory/"))
  }, [dispatch])

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
    food: [],
    phone_number: [],
  }
  const withoutShortSchema = Yup.string().max(50, 'Cлишком длинное название!').required('Обязательное поле');
  const withShortSchema = Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required');
  const createSchema = Yup.object().shape({
    title: withoutShortSchema,
    location: withShortSchema,
    parking: withShortSchema,
    music: withShortSchema,
  });

  return (
    <MainWrapper>
      <div className={style.mainCont}>
        <h2>Добавление заведения</h2>
        <DepartmentsCreateFields initialValues={initialValues} createSchema={createSchema} foodsCategories={foodsCategories}/>
      </div>
    </MainWrapper>
  )
}

export default DepartmentsCreateComponent;