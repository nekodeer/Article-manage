import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/setUser';
import { LoginApi } from '../request/api'
import jwtDecode from 'jwt-decode';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginSuccess, setLoginSuccess] = useState('none')

  const getUsername = (e) => {
    setUsername(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      //send axios request
      LoginApi({ username, password }).then((res) => {
        console.log(res);
        if(res.errCode ===1)
        {
          setLoginSuccess(false)
        }
        if(res.errCode===0)
        {
          setLoginSuccess(true)

          // console.log(res.data['cms-token']);
          // const token = res.data['cms-token']
          // console.log(jwtDecode(token));
          //成功后储存服务端返回的数据，并跳转根路径, 
          // 这里cmstoken的写法是因为当中有-横岗，所以用了获取对象属性的另一种写法
          localStorage.setItem('avatar',res.data.avatar)
          localStorage.setItem('cmsToken',res.data['cms-token'])
          localStorage.setItem('editable',res.data.editable)
          localStorage.setItem('player',res.data.player)
          localStorage.setItem('username',res.data.username)
          localStorage.setItem('user',res.data)

          //将用户数据发往redux
          dispatch(setUser(res.data))
          setTimeout(() =>navigate('/'),1500)
        }
      })
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div className='container-fluid row'>
        <div className='col-5'></div>
        <div className='col-2'>
          <h4>Login to Your Account</h4>
          <div className={loginSuccess ? "alert alert-dismissible fade show alert-success" : "alert alert-dismissible fade show alert-danger "} role="alert" style={{ 'display': loginSuccess === 'none' ? 'none' : 'block' }}>
            Login {loginSuccess ? 'Success!' : 'Failed!'}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <label className='form-label'>Username</label>
          <input type="text" placeholder='username' className='form-control mb-3 ' onChange={getUsername} />
          <label className='form-label'>Password</label>
          <input type="password" placeholder='password' className='form-control mb-3' onChange={getPassword} />
          <button className='btn btn-primary form-control mb-3'>Login</button>
        </div>
        <div className='col-5'></div>
      </div>
    </form>
  )
}
