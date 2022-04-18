import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import Router from './Routes'
import store from './redux/store'
import { setUser } from './redux/actions/setUser';
// import jwtDecode from 'jwt-decode';

if(localStorage.cmsToken){
  store.dispatch(setUser(localStorage))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

