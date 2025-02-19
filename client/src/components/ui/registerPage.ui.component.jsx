import React, { useState } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/registerPage/main.registerpage.styles.css";
import Input from "../utils/input.utils.component";
import { useSidePanel } from "../../SidePanelContext";
import API from "../../axios.config";

function RegisterPage({}) {
  const { openPanel , closePanel} = useSidePanel();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await API.post("/auth/register", { name, email, password })
      .then((response) => {
        alert(response.data.message);
        closePanel();
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="registerDom">
      <div className="registerImg">
        <img src="./img/categories/bedroom.png" alt="registerImg" />
      </div>
      <div className="registerBody">
        <span className="text-23-medium">Let's get your account set up</span>
        <form action="/">
          <Input
            placeholder={"Name"}
            type="text"
            callback={(value) => {
              setName(value);
            }}
          />
          <Input
            placeholder={"Email"}
            type="email"
            callback={(value) => {
              setEmail(value);
            }}
          />
          <Input
            placeholder={"Set Password"}
            type="password"
            callback={(value) => {
              setPassword(value);
            }}
          />
          <div className="registerButton" onClick={handleRegister}>
            <span className="text-16-semibold">Create account</span>
          </div>
        </form>
        <div className="redirectLogin">
          <span className="text-16-regular">Already have an account? </span>
          <a
            onClick={(e) => {
              openPanel("Login");
              e.preventDefault();
            }}
            className="text-16-semibold"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
