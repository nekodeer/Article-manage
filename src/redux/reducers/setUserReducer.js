import { SET_USER } from "../constant";
import defaultAvatar from '../../defaultAvatar.jpg'

const initialState = ({ username: 'vistor',avatar: defaultAvatar, isLogin: false })

export default function setUser(prevState = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_USER:
      return { ...data, isLogin: true}
    case 'SET_AVATAR':
      return {...prevState, avatar:data}
    default:
      return prevState;
  }
}