import React, { useState } from "react";
import "../../styles/loginPage/main.loginpage.styles.css";
import "../../styles/utils/utils.styles.css";
import Input from "../../components/utils/input.utils.component";
import ProviderButton from "../utils/providerButton.utils.component";
import GoogleLogo from "../icons/googleLogo.icon.component";
import AppleLogoIcon from "../icons/appleLogo.icon.component";
import { useSidePanel } from "../../SidePanelContext";
import API from "../../axios.config.js";
import { useAuthContext } from "../../AuthContext.jsx";

function LoginPage() {
  const { openPanel } = useSidePanel();
  const { setAuthentication } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await API.post("/auth/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        response.token ? setAuthentication(true) : setAuthentication(false);
        alert(response.message);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="loginDom">
      <div className="loginHeaderImg">
        <img src="/img/categories/plant_pot.png" alt="" />
      </div>
      <div className="loginBody">
        <form action="/" className="loginForm">
          <span className="text-23-medium">Welcome Back</span>
          <Input
            classname={"loginInputDom"}
            placeholder={"Email"}
            type="email"
            callback={(value) => {
              setEmail(value);
            }}
          />
          <Input
            classname={"loginInputDom"}
            placeholder={"Password"}
            type="password"
            callback={(value) => {
              setPassword(value);
            }}
          />
          <div
            className="loginForgotPassword"
            onClick={() => openPanel("Reset Password")}
          >
            <span className="text-16-semibold">Forgot Password?</span>
          </div>
          <div className="loginButton" onClick={() => handleLogin()}>
            <span className="text-16-semibold">Login</span>
          </div>
        </form>
        <div className="orDom">
          <hr />
          <p className="text-16-semibold">OR</p>
          <hr />
        </div>
        <ProviderButton icon={<GoogleLogo />} title={"Continue With Google"} />
        <ProviderButton
          icon={<AppleLogoIcon />}
          title={"Continue With Apple"}
        />
        <div className="createAccount">
          <span className="text-16-regular">First time here? </span>
          <span
            className="text-16-semibold"
            onClick={() => openPanel("Sign Up")}
          >
            Create an Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
