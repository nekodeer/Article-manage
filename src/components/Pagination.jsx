import React from 'react'
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/setPage';

export default function Pagination() {

  // const [page,setPage] = useState(1);
  const dispatch = useDispatch();

  const getPage = (e) =>{
    // setPage(parseInt(e.target.innerHTML));
    dispatch(setPage({data:e.target.innerHTML}))
  } 

  return (
    <nav aria-label="...">
      <ul className="pagination" onClick={getPage}>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
      </ul>
    </nav>
  )
}
