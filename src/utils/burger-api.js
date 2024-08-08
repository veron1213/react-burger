import {NORMA_API} from './url.js'

async function request(url, options) {

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

 const checkResponse = res => {
   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
 };