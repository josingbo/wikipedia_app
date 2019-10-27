import React from 'react';
import {Link} from 'react-router-dom'

export default ({info}) => {
  return (
    <div className="result">
      <h3 class="resultItem-title">
          <Link to={`/${info.title}`}>{info.title}</Link>
      </h3>
    </div>
  );
}