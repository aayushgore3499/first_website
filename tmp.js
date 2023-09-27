import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const tipPercentage = (service + friendService) / 2;
  const tip = (bill * tipPercentage) / 100;

  function handleReset() {
    setBill(0);
    setService(0);
    setFriendService(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage service={service} setService={setService}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage service={friendService} setService={setFriendService}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <p>
            You pay ${bill + tip} (${bill} + ${tip} tip)
          </p>
          <button onClick={handleReset}>reset</button>
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How Much was the Bill?</label>
      <input
        value={bill}
        onChange={(e) => setBill(parseInt(e.target.value))}
        placeholder="bill value"
      ></input>
    </div>
  );
}

function SelectPercentage({ service, setService, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={service}
        onChange={(e) => setService(parseInt(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
