import React from 'react';
import './SecondHeader.css'
import point from './point.svg'

const SecondHeader = () =>{
  return (
    <div className='secondheader'>
      <img src={point} width={26} alt ="point"/><h1 className='second__header__title'>TO DO LIST</h1>
    </div>
  );
}

export default SecondHeader;