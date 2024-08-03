import React, { useState } from "react";

const TestApp = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState([]);
  const [action, setAction] = useState("Nạp");

  const handleDeposit = () => {
    const newBalance = balance + parseInt(amount);
    setBalance(newBalance);
    setHistory([...history, `Nạp ${amount} vào ví`]);
    setAmount("");
  };

  const handleWithdraw = () => {
    if (balance >= parseInt(amount)) {
      const newBalance = balance - parseInt(amount);
      setBalance(newBalance);
      setHistory([...history, `Rút ${amount} từ ví`]);
      setAmount("");
    } else {
      alert("Số dư không đủ");
    }
  };

  const handleAction = (e) => {
    setAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Nạp") {
      handleDeposit();
    } else {
      handleWithdraw();
    }
  };

  return (
    <div>
      <h1>Ví điện tử</h1>
      <p>Số dư hiện tại: {balance}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Nhập số tiền"
        />
        <select value={action} onChange={handleAction}>
          <option value="Nạp">Nạp</option>
          <option value="Rút">Rút</option>
        </select>
        <button type="submit">Thực hiện</button>
      </form>
      <h2>Lịch sử giao dịch</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestApp;
