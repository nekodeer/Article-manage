import { SET_USER } from "../constant";

export const setUser = (data) => {
  return {
    type:SET_USER, 
    data
  }
}

export const setUserAvatar = (data) => {
  return {
    type: 'SET_AVATAR',
    data
  }
}