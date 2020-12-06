import {SET_DEPARTMENTS} from "../../../../store/action-types";
import request from "../../../../request/request";

export function fetchDepartments(method, data, url) {
  return async (dispatch) => {
    await request(method, url, data && data)
      .then(response => response.json())
      .then(json => dispatch(fetchDepartmentsAction(json, "data")))
      .catch(e => dispatch(fetchDepartmentsAction(e, "error")))
  }
}

export function fetchDepartmentsAction(data, dataType) {
  return {
    type: SET_DEPARTMENTS,
    data: data,
    dataType: dataType,
  }
}