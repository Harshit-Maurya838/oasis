import React from "react";
import Input from "../utils/input.utils.component";
import "../../styles/utils/utils.styles.css";
import "../../styles/payment/main.payment.styles.css";
import MasterCardIcon from "../icons/mastercard.icon.component";
import { useSidePanel } from "../../SidePanelContext";

function PaymentPage() {
  const { openPanel } = useSidePanel();

  return (
    <div className="PaymentDom">
      <div className="PaymentDetailsDom">
        <div className="PaymentCardInput">
          <Input
            type="number"
            startComponent={<MasterCardIcon width={22} />}
            placeholder={"Card Number"}
          />
        </div>
        <div className="PaymentCardDetails">
          <Input placeholder={"Exp.date"} type="date" />
          <Input placeholder={"CVV"} type="number" />
        </div>
        <div className="PaymentCardName">
          <Input placeholder={"Name on the card"} />
        </div>
        <div className="PaymentCheckbox">
          <input
            type="checkbox"
            className="PaymentCheckBoxInput"
            id="shp-as-bill"
          />
          <label htmlFor="shp-as-bill">
            <span className="text-16-regular">
              Use shipping address as billing address
            </span>
          </label>
        </div>
      </div>
      <div className="PaymentMemory">
        <span className="text-20-semibold">Remember me</span>
        <div className="PaymentMemIn">
          <input type="checkbox" className="PaymentCheckBoxInput" id="rem-me" />
          <label htmlFor="rem-me">
            <span className="text-16-regular">
              Save my information for faster checkout
            </span>
          </label>
        </div>
      </div>
      <div className="PaymentButton">
        <span className="text-18-regular">Pay Now</span>
      </div>
    </div>
  );
}

export default PaymentPage;
