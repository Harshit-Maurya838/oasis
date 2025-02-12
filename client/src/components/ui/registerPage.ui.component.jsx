import React from 'react';
import '../../styles/utils/utils.styles.css';
import "../../styles/registerPage/main.registerpage.styles.css";
import Input from  "../utils/input.utils.component";
import { useSidePanel } from '../../SidePanelContext';

function RegisterPage({}) {
    const { openPanel } = useSidePanel();

  return (
    <div className='registerDom'>
        <div className="registerImg">
            <img src="./img/categories/bedroom.png" alt="registerImg" />
        </div>
        <div className="registerBody">
            <span className='text-23-medium'>Let's get your account set up</span>
            <form action="/">
                <Input placeholder={"Email"} type='email' />
                <Input placeholder={"Set Password"} type='password' />
                <div className="registerButton">
                    <span className='text-16-semibold'>Create account</span>
                </div>
            </form>
            <div className="redirectLogin">
                <span className='text-16-regular' >Already have an account? </span>
                <a onClick={(e)=> {openPanel("login"); e.preventDefault();}} className='text-16-semibold'>Login</a>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage


