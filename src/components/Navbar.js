import React from 'react';
import {Link} from 'react-router-dom'

export default ({title}) => {
    return (
      <div className="navbar">
        <ul>
            <li><h3>{title}</h3></li>
            <li style={{float: 'right'}}><Link to="/">Search</Link></li>
        </ul>
      </div>
    )
}
