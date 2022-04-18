import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumb() {

  const { pathname } = useLocation();
  const [bread, setBread] = useState('/');

  useEffect(() => {
    switch (pathname) {
      case "/list":
        setBread('View the article list')
        break;
      case "/edit":
        setBread('Edit the article content')
        break;
      case "/means":
        setBread('Edit the user profile')
        break;
      default:
        setBread(pathname.includes('edit')?'Edit the article content':'')
        break;
    }
  }, [pathname])

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li>{'>'}</li>
        <li className="breadcrumb-item " aria-current="page">{bread}</li>
      </ol>
    </nav>
  )
}
