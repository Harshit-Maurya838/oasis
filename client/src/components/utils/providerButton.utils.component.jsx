import React from 'react';
import '../../styles/utils/utils.styles.css';
import "../../styles/utils/providerbutton.utils.styles.css";

function ProviderButton({title, icon}) {
  return (
    <div className='providerDom' >
        <div className="icon">{icon}</div>
        <div className='title text-16-semibold'>{title}</div>  
    </div>
  )
}

export default ProviderButton