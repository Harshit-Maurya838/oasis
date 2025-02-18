import React from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/checkout/main.checkout.styles.css";
import Input from "../utils/input.utils.component";
import { useSidePanel } from "../../SidePanelContext";

function CheckOutPage() {
  const { openPanel } = useSidePanel();

  return (
    <div className="CheckOutDom">
      <div className="CheckOutInfo">
        <div className="CheckOutInfoHeading">
          <span className="text-20-semibold">Customer Information</span>
          <div>
            <span className="text-16-regular">Have an account? </span>
            <span
            onClick={()=>{
                openPanel('Login')
            }}
            className="text-16-semibold">Login</span>
          </div>
        </div>
        <div className="CheckOutInfoInput">
          <Input placeholder={"Email"} type="email" />
        </div>
      </div>
      <div className="CheckOutShipping">
        <span>Shipping address</span>
        <Input placeholder={"First name"} />
        <Input placeholder={"Last name"} />
        <Input
          startComponent={
            <div>
              <span className="text-14-regular">+91</span>
            </div>
          }
          placeholder={"Phone number"}
          type="number"
        />
        <Input placeholder={"Address"} />
        <div className="CheckOutShippingCountry">
          <Input placeholder={"City"} />
          <Input placeholder={"Country"} />
        </div>
      </div>
      <div className="CheckOutButton"
        onClick={()=>{
          openPanel('Payment')
        }}
      >
        <span>Proceed to payment</span>
      </div>
    </div>
  );
}

export default CheckOutPage;
