import React from 'react';
import '../../styles/utils/utils.styles.css';
import '../../styles/footer/main.footer.styles.css';
import '../../styles/footer/responsive.footer.styles.css'
import OasisLogo from '../icons/oasisLogo.icon.component';
import ArrowUpIcon from '../icons/arrowUp.icon.component'

function Footer() {
  return (
    <footer>
      <div className='FootTop' >
        <OasisLogo classname={'OasisLogo'} />
        <div className='ScrollUpDiv' onClick={() => {

          window.scroll({ top: 0, left: 0, behavior: 'smooth' })

        }} >
          <ArrowUpIcon width={24} classname={'ScrollUpDivSvg'} />
          <ArrowUpIcon width={24} classname={'ScrollUpDivSvg'} />
        </div>
      </div>
      <div className="FootBottom">
        <div className="FotCard nav">
          <span className='text-14-semibold' >Home  /  Blog  /  Sale <br />/  About us  /</span>
        </div>
        <div className="FotCard ContactUs">
          <div>
            <p className='text-13-regular subHeading' >Contact Us</p>
            <span className='text-20-regular' >+1 999-888-76-54</span>
          </div>
          <div>
            <p className='text-13-regular subHeading' >Email</p>
            <span className='text-14-regular' >support@oasis.com</span>
          </div>
        </div>
        <div className="FotCard Add-Time">
          <div>
            <p className='text-13-regular subHeading' >ADDRESS</p>
            <span className='text-14-regular' >2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
          </div>
          <div>
            <p className='text-13-regular subHeading' >OPENING HOURS</p>
            <span className='text-20-regular' >9am—6pm</span>
          </div>
        </div>
        <div className='CopyRight FotCard' >
          <span className='text-14-regular' >© 2023 — Copyright</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer