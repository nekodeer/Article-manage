import { SET_PAGE } from "../constant";

const initialState = 0;

export default function setPage(prevState=initialState,action){
  const {type,data} = action;
  switch (type) {
    case SET_PAGE:
    return data
  
    default:
      return prevState;
  }

}