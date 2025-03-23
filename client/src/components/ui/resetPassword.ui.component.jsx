import React, { useState } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/resetPassword/main.resetpassword.styles.css";
import Input from "../utils/input.utils.component";
import { useSidePanel } from "../../SidePanelContext";
import API from "../../axios.config";

function ResetPasswordPage() {
  const { openPanel } = useSidePanel();
  const [email, setEmail] = useState("");

  const handelSubmit = async()=>{
    try {
      const response = await API.post("/auth/forgetpassword", {
        email: email,
      },{withCredentials:false});
      
      if(response){
        alert(response.data.message)
      }

    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="resetPasswordDom">
      <div className="resetPasswordImg">
        <img src="./img/samples/Squircle.png" alt="resetPasswordImage" />
      </div>
      <div className="resetPasswordBody">
        <span className="text-23-medium">
          Enter your email and we'll send a link to reset your password
        </span>
        <form action="">
          <Input type="email" placeholder={"Email"} callback={(value)=>{setEmail(value)}} />
          <div className="resetButton" onClick={handelSubmit}>
            <span className="text-16-semibold">Reset password</span>
          </div>
          <div className="redirectLogin">
            <span className="text-16-regular">Remember your password? </span>
            <a
              onClick={(e) => {
                e.preventDefault();
                openPanel("Login");
              }}
              className="text-16-semibold"
              href="/"
            >
              Back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
