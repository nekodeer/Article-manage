import { SET_PAGE } from "../constant"

export const setPage = (data) => { 
  return { 
    type: SET_PAGE, 
    data 
  } 
}