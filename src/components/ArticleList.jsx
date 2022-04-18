import React, { Fragment, useEffect, useState } from 'react'
import { GetArticle } from '../request/api'
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteArticle } from '../request/api';

export default function ArticleList() {

  const [article, setArticle] = useState([]);
  const { data } = useSelector((state) => state.setPage)
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getArticleList(data, 10);
    refresh && setTimeout(() => setRefresh(false))
  }, [data, refresh])

  // 封装请求函数
  const getArticleList = (num, count) => {
    let isMounted = true;
    GetArticle({
      num: num,
      count: count
    }).then(res => {
      if (res.errCode === 0 && isMounted) {
        setArticle(res.data.arr)
      }
    })
    return () => { isMounted = false }
  }
  const delArticle = (id) => {
    DeleteArticle({ id }).then(res => {
      if (res.errCode === 0) {
        alert(res.message)
        //重新渲染页面数据 可以windows reload，可以调用getArticle，
        // 也可以创建refresh state然后在useEffect里监听
        setRefresh(true)
      }
    })
  }
  return (
    <Fragment>
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">subTitle</th>
          <th scope="col">Author</th>
          <th scope="col">date</th>
        </tr>
      </thead>
      <tbody>
        {article.map((articleObj) => {
          const { id, title, subTitle, author, date } = articleObj
          return <tr key={id}>
            <td className='fw-bold'>
              <a href={'http://codesohigh.com:8765/article/' + id} className='nav-link'>{title}</a>
            </td>
            <td className='fw-bold'>{subTitle}</td>
            <td>{author}</td>
            <td>{moment(date).format("YYYY-MM-DD hh:mm:ss")}</td>
            <td>
              <button className='btn btn-primary' onClick={() => navigate('/edit/' + id)}>Edit</button>
              <button className='btn btn-danger ms-3' onClick={() => delArticle(id)}>Delete</button>
            </td>
          </tr>
        })}
      </tbody>
    </Fragment>
  )
}
