import {NORMA_API} from './url.js'

export function getIngredients() {
    return fetch(`${NORMA_API}/ingredients`)
     .then(checkResponse)
 }
 
 const checkResponse = res => {
   return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
 };