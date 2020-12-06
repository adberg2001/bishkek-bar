export default function request(method, url, data, type) {
  const endpoint = 'https://pub-bishkek.herokuapp.com/api'

  const myHeaders = new Headers();
  console.log(data)
  // const token = localStorage.getItem("token");
  type === "JSON" && myHeaders.append("Content-Type",  `application/json`)
  // token && myHeaders.append("Authorization",  `Bearer ${token}`);

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: data,
  };

  return fetch(`${endpoint}${url}`, requestOptions)
    // .then(response => response.json())
    // .catch(error => error);
};