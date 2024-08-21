import {NORMA_API} from './url.js'

function request(url, options) {

  return fetch(url, options).then(checkResponse)
}

 export function getIngredients() {
  return request(`${NORMA_API}/ingredients`)
}

export function getOrderNumber(ingredients) {
  return request(`${NORMA_API}/orders`, {
    method: 'POST',
    body: JSON.stringify({ ingredients}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function registration(data) {
  return request(`${NORMA_API}/auth/register`, {
    method: 'POST',
    body: JSON.stringify( data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function forgotPasswordApi(data) {
  return request(`${NORMA_API}/password-reset`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function resetPasswordApi(data) {
  return request(`${NORMA_API}/password-reset/reset`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function authorizationApi(data) {
  return request(`${NORMA_API}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function logoutApi() {
  return request(`${NORMA_API}/auth/logout`, {
    method: 'POST',
    body: JSON.stringify({"token": localStorage.getItem("refreshToken")}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function getUserApi() {
  return request(`${NORMA_API}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer ' + localStorage.getItem("accessToken")
    },

  })
} 

 const checkResponse = res => {
   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
 };