import React, { useState } from 'react';
import "../../styles/utils/accordin.utils.styles.css";
import '../../styles/utils/utils.styles.css';
import ArrowUpIcon from '../../components/icons/arrowUp.icon.component'

function Accordin({ number = '01', question = "question", answer = 'answer' }) {

  const [isActive, setActive] = useState(false);

  return (
    <div className='Accordin' onClick={() => {
      setActive(!isActive);
    }} >
      <div className="number">
        <span className='text-23-medium' >{number}</span>
      </div>
      <div className={`content ${isActive ? 'ContentActive' : ''}`}>
        <div className="question">
          <p className='text-23-medium' >{question}</p>
        </div>
        <div className={`answer ${isActive ? 'slidein' : ''}`}>
          <p className='text-18-regular'>{answer}</p>
        </div>
      </div>
      <div className={`actions ${isActive ? 'ArrowActive' : ''}`}>
        <ArrowUpIcon classname={'arrow'} width={24} />
      </div>
    </div>
  )
}

export default Accordin