import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import defaultAvatar from '../defaultAvatar.jpg'
import { setUser } from '../redux/actions/setUser';


export default function Header() {
  // const [avatar,setAvatar] = useState(defaultAvatar);
  const user = useSelector((state) => state.setUser)
  const { username, avatar, isLogin } = user

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    // dispatch(setUser({avatar:}));
    navigate('/login')
  }


  return (
    <div className='row'>
      <div className="col d-flex justify-content-end">
        <img src={isLogin ? 'http://47.93.114.103:6688/' + avatar : avatar} style={{ 'height': '40px' }} alt="" />
      </div>
      <div className="dropdown col d-flex justify-content-end">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {username}
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li className='dropdown-item' >Edit profile</li>
          <li><hr className='dropdown-divider' /></li>
          <li className='dropdown-item' onClick={logOut}>Log Out</li>
        </ul>
      </div>
    </div>
  )
}
