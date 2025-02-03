import React , {useState } from 'react';
import '../../styles/utils/utils.styles.css';
import '../../styles/utils/input.utils.styles.css';

function Input({name = '' , id="" , type="text" , placeholder , classname , startComponent , endComponent}) {
    const[value , setValue] = useState('');
  return (
    <div className={`inputDom ${classname}`}>
        <div>
            {startComponent}
        </div>
        <input className='text-16-regular' type={type} name={name} value={value} onChange={(e)=>{setValue(e.target.value)}} id={id} placeholder={placeholder}/>
        <div>
            {endComponent}
        </div>
    </div>
  )
}

export default Input