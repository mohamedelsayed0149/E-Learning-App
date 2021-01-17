import React from 'react';
import {Link} from 'react-router-dom'


function LogOut() {
  return (
    <div className='logout'>
      <h1>We hope you enjoyed our <p></p>application</h1>
      <Link to="/www.google.com">click me</Link>
    </div>
  );
}

export default LogOut; 