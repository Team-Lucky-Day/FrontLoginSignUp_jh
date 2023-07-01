import React from "react";
import PaymentComponent from "./PaymentComponent";
import "../CSS/payment.css";
const Payment = () => {
  return (
    <div className="payment-Component">
      <PaymentComponent />
      <button>결제하기</button>
    </div>
  );
};

export default Payment;
