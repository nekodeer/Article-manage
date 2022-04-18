import React from 'react'
import ArticleList from '../components/ArticleList'

export default function List() {
  return (
    <div className='overflow-auto' style={{'height':'75vh'}}>
      <div>Article list</div>
      <table className="table table-hover">
        <ArticleList/>
      </table>
    </div>
  )
}
