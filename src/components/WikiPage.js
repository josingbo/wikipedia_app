import React from 'react';
import Navbar from './Navbar'
import Iframe from './Iframe'

export default ({match: {params: {title}}}) => {
  const url = `https://en.wikipedia.org/wiki/${title}`    
    return (
      <div className="container">
        <Navbar title={title}/>
        <Iframe src={url}/>
      </div>
    )
}
