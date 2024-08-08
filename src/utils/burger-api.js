import {NORMA_API} from './url.js'

export function getIngredients() {
    return fetch(`${NORMA_API}/ingredients`)
     .then(checkResponse)
 }

 export function getOrderNumber(ingredients) {
  return fetch(`${NORMA_API}/orders`, {
    method: 'POST',
    body: JSON.stringify({ ingredients}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  })
   .then(checkResponse)
}
 
 const checkResponse = res => {
   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
 };