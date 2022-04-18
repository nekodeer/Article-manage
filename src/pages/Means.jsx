import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeUserInfo, GetUserInfo } from '../request/api'
import WebStyle from '../components/WebStyle'
import UploadPic from '../components/UploadPic'

export default function Means() {
  const user = useSelector((state) => state.setUser)
  const [password, setPassword] = useState('');

  const usnRef = useRef();
  const pwdRef = useRef();

  useEffect(() => {
    let isMounted = true;
    GetUserInfo().then((res) => {
      if (res.errCode === 0 && isMounted) {
        setPassword(res.data.password)
      }
    })
    return () => { isMounted = false }
  })
  const formhandler = (e) => {
    e.preventDefault();
    //用户名有修改过,且密码非空的情况下可以发送修改请求
    if (usnRef.current.value !== user.username && pwdRef.current.value.trim() !== '') {
      console.log(123);
      ChangeUserInfo({ username: usnRef.current.value, password: pwdRef.current.value }).then(res => {
        console.log(res);
      })
    }
  }
  
  return (
    <div className='container-fluid mt-3' style={{ 'height': '95%' }}>
      <form onSubmit={formhandler}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="username" className="col-form-label">username</label>
          </div>
          <div className="col-auto">
            <input ref={usnRef} type="username" id="username" className="form-control" defaultValue={user.username} />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Input your new username
            </span>
          </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input ref={pwdRef} type="password" id="inputPassword6" className="form-control" defaultValue={password} />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Input your new password
            </span>
          </div>
        </div>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </form>

      <div className="mb-3 mt-3">
        <label className="form-label">Click to Upload your avatar</label>
        {/* <input className="form-control" type="file" id="formFile" accept="image/gif,image/jpeg,image/jpg,image/png" multiple />
        <figure className="figure">
          <img src="#" className="figure-img img-fluid rounded w-100" alt=""/>
            <figcaption className="figure-caption">Your pic will be displayed here</figcaption>
        </figure> */}
        {/* <WebStyle/> */}
        <UploadPic/>
      </div>
    </div>
  )
}
