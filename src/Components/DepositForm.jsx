import { useState } from "react";

function DepositForm({ goalId, onAddDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const num = parseFloat(amount);
    if (num > 0) {
      onAddDeposit(goalId, num);
      setAmount("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Deposit"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default DepositForm;
