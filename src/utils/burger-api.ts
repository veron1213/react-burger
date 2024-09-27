import {NORMA_API} from './url'

function request(url: string, options?: any) {

  return fetch(url, options).then(checkResponse)
}

 export function getIngredients() {
  return request(`${NORMA_API}/ingredients`)
}

export function getOrderNumber(ingredients: string[]) {
  return request(`${NORMA_API}/orders`, {
    method: 'POST',
    body: JSON.stringify({ ingredients}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer ' + localStorage.getItem("accessToken")
    },

  })
} 

export function registration(data: {email: string, password: string, name: string}) {
  return request(`${NORMA_API}/auth/register`, {
    method: 'POST',
    body: JSON.stringify( data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function forgotPasswordApi(data: {email: string}) {
  return request(`${NORMA_API}/password-reset`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function resetPasswordApi(data: {token: string, password: string}) {
  return request(`${NORMA_API}/password-reset/reset`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function authorizationApi(data: {email: string, password: string}) {
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

export function getOrdersApi(number: string | undefined) {
  return request(`${NORMA_API}/orders/${number}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
} 

export function updateTokenApi() {
  return request(`${NORMA_API}/auth/token`, {
    method: 'POST',
    body: JSON.stringify({"token": localStorage.getItem("refreshToken")}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
} 

export function updateInformationApi(data: {name: string, email: string, password: string}) {
  return request(`${NORMA_API}/auth/user`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer ' + localStorage.getItem("accessToken")
    },
  })
} 

 const checkResponse = (res: Response) => {
   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
 };