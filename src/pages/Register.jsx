import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterApi } from '../request/api'

export default function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cfmPassword, setCfmPassword] = useState('');

  const [regSuccess, setRegSuccess] = useState('none')

  const navigate = useNavigate();

  const getUsername = (e) => {
    setUsername(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }
  const getCfmPassword = (e) => {
    setCfmPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '' && password === cfmPassword) {
      //send axios request
      RegisterApi({ username, password }).then((res) => {
        console.log(res);
        //代表注册成功 跳转登录页
        if (res.errCode === 0) {
          setRegSuccess(true)
          setTimeout(() => { navigate('/login') }, 1500)
        }
        else {
          setRegSuccess(false)
        }
      })
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div className='container-fluid row'>
        <div className='col-5'></div>
        <div className='col-2'>
          <h4>Register An Account</h4>
          <div className={regSuccess ? "alert alert-dismissible fade show alert-success" : "alert alert-dismissible fade show alert-danger "} role="alert" style={{ 'display': regSuccess === 'none' ? 'none' : 'block' }}>
            Register {regSuccess ? 'Success!' : 'Failed!'}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <label className='form-label'>Username</label>
          <input type="text" placeholder='username' className='form-control mb-3 ' onChange={getUsername} />
          <label className='form-label'>Password</label>
          <input type="password" placeholder='password' className='form-control mb-3' onChange={getPassword} />
          <label className='form-label'>Confirm Password</label>
          <input type="password" placeholder='confirm password' className='form-control mb-3' onChange={getCfmPassword} />
          <div className='mb-3'><Link to='/login' >Had a account? Click here to login!</Link></div>
          <button className='btn btn-primary form-control mb-3'>Register</button>
        </div>
        <div className='col-5'></div>
      </div>
    </form>
  )
}
