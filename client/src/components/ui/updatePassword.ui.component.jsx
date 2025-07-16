import React, { useState } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/updatePassword/main.updatePassword.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import Input from "../utils/input.utils.component";
import API from "../../axios.config";
import { useLocation } from "react-router-dom";

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const tokens = location.pathname.split("/");

  const handleUpdate = async () => {
    try {
      if (newPassword == confirmPassword && newPassword.length > 0 && confirmPassword.length > 0) {
        const reponse = await API.post(
          "/auth/resetpassword",
          {
            newPassword: newPassword,
            confirmPassword: confirmPassword,
            userId: tokens[3],
          },
          { withCredentials: false }
        );

        if (reponse) {
          alert(reponse.data.message);
          if(reponse.data.suc){
            window.location.href = '/';
          }
        }
      }
      else{
        alert('Password not matched');
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="UpDom fadein">
      <div className="UpDomTitle fadein">
        <span className="text-20-semibold">Update Password</span>
      </div>
      <form action="">
        <Input
          type="password"
          placeholder="New Password"
          callback={(value) => {
            setNewPassword(value);
          }}
          classname="slideInComponentLtoR"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          callback={(value) => {
            setConfirmPassword(value);
          }}
          classname="slideInComponentRtoL"
        />
        <div className="UpButton fadein" onClick={handleUpdate}>
          <span className="text-16-semibold">Update</span>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
