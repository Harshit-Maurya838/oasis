import React from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/resetPassword/main.resetpassword.styles.css";
import Input from "../utils/input.utils.component";

function ResetPasswordPage() {
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
          <Input type="email" placeholder={"Email"} />
          <div className="resetButton">
            <span className="text-16-semibold">Reset password</span>
          </div>
          <div className="redirectLogin">
            <span className="text-16-regular">Remember your password? </span>
            <a className="text-16-semibold" href="/">Back to login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
