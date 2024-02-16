import React from 'react';
import './User.css';

export const User = ({el}) => {    
    return (
    <div className='user-card'>
       <div className="avatar" style={el.color && {backgroundColor: el.color}}></div>
       <b>{el.full_name}</b>
    </div>
  )
}


