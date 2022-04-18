import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment';
// import RichEditor from '../components/RichEditor';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AddNewArticle, GetArticleContent, UpdateArticle } from '../request/api';
import { useLocation, useParams } from 'react-router-dom';

export default function Edit() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  // Quill 编辑器初始化,value既是输入域的内容
  const [value, setValue] = useState('');
  //useParams获取路径后面的参数，看是否有id
  const params = useParams();

  const location = useLocation();

  const getTitle = (e) => {
    setTitle(e.target.value);
  }
  const getSubTitle = (e) => {
    setSubtitle(e.target.value);
  }
  const myRef = useRef();

  useEffect(() => {
    let isMounted = true;
    if (params.id) {
      GetArticleContent({ id: params.id }).then(res => {
        if(isMounted){
        const { title, subTitle, content, id } = res.data
        setTitle(title);
        setSubtitle(subTitle);
        setValue(content)
        }
      })
    }
    else {
      setTitle('');
      setSubtitle('');
      setValue('')
    }
    return () => { isMounted = false };
  }, [location.pathname])

  function submitArticle(e) {
    e.preventDefault();
    //地址栏有id代表更新文章，没有则代表发布新文章
    if (params.id) {
      UpdateArticle({ title, subTitle: subtitle, content: value, id: params.id }).then((res) => {
        console.log(res);
        if (res.errCode === 0) {
          // alert(res.message)
          myRef.current.click()
        }
        else {
          alert(res.message)
        }
      })
    }
    else {
      AddNewArticle({ title, subtitle, content: value }).then((res) => {
        if (res.errCode === 0) {
          myRef.current.click()
        }
        else {
          alert(res.message)
        }
      })
    }
  }

  return (
    <div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Please input the title for the article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={submitArticle}>
              <div className="modal-body">
                <input type="text" placeholder='title' value={title} onChange={getTitle} /><span>* Title</span><hr />
                <input type="text" placeholder='subtitle' value={subtitle} onChange={getSubTitle} /><span>* SubTitle</span>
              </div>
              <div className="modal-footer">
                <button ref={myRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="Submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className='col-1' onClick={() => window.history.back()} style={params.id ? { 'display': 'block' } : { 'display': 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg><span> Go Back</span></div>
        <div className="col-2">
          <h5 >Edit the Article</h5>
        </div>
        <div className="col-8 ">
          Current Time: {moment(new Date()).format('YYYY-MM-DD')}
        </div>
        <div className="col-1 p-1">
          <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit</button>
        </div>
        <div className='container-fluid'>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  )
}
