import React from 'react';
import '../../styles/utils/panelpage.utils.styles.css';

function PanelPage({children}) {
  return (
    <div className='panelPage' >{children}</div>
  )
}

export default PanelPage