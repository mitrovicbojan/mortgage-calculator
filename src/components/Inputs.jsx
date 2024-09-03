import { useState } from "react";

export default function Inputs() {
  const [amount, setAmount] = useState("");

  function handleChangeAmount(e) {
    let myNum = e.target.value;
    console.log(myNum);
  }

  return (
    <form>
      <div className="title">
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
      </div>
      <label htmlFor="amount">Mortgage Amount</label>
      <input
        name="amount"
        id="amount"
        type="number"
        placeholder="Amount"
        onChange={handleChangeAmount}
      ></input>
      <label htmlFor="term">Mortgage Term</label>
      <input name="term" id="term" placeholder="Mortgage Term"></input>
      <label htmlFor="rate">Interest Rate</label>
      <input name="rate" id="rate" placeholder="Interest Rate"></input>
      <div className="radioBtns">
        <label htmlFor="">
          <input type="checkbox"></input>Repayment
        </label>
        <label htmlFor="">
          <input type="checkbox"></input>Interest Only
        </label>
      </div>
      <button>Calculate Payments</button>
    </form>
  );
}
