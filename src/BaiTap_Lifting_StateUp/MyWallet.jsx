import React, { useState } from "react";
import ModalWallet from "./ModalWallet";

const MyWallet = () => {
  const [soDu, setSoDu] = useState(0);
  let [giaoDich, setGiaoDich] = useState([]);
  const napTien = (soTien) => {
    if (soTien > 0) {
      setSoDu(soDu + Math.floor(soTien));
      const historyNew = [
        ...giaoDich,
        { type: "Nạp", amount: soTien, date: new Date().toLocaleString() },
      ];
      setGiaoDich(historyNew);
    } else {
      alert("số tiền không hợp lệ!");
    }
  };
  const rutTien = (soTien) => {
    if (soDu >= soTien) {
      if (soTien > 0) {
        setSoDu(soDu - Math.floor(soTien));
        const historyNew = [
          ...giaoDich,
          {
            type: "Rút",
            amount: soTien,
            date: new Date().toLocaleString(),
          },
        ];
        setGiaoDich(historyNew);
      } else {
        alert("số tiền không hơp lệ!");
      }
    } else {
      alert("Nghèo mà đòi rút cho nhiều!");
    }
  };
  return (
    <div
      className="container text-center my-auto"
      style={{ maxWidth: "50vw", background: "black" }}
    >
      <div>
        <h2 className="text-white">My Wallet</h2>
        <p className="text-warning fs-2 fw-bold">${soDu.toLocaleString()}</p>
        <p className="text-white">Total balance</p>
        <button
          type="button"
          className="btn btn-success me-2"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Deposit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#withDrawId"
        >
          Withdraw
        </button>
      </div>
      <div className="container">
        <h2 className="text-white">Transaction History</h2>
        <div className="container">
          {giaoDich.map((itemGiaoDich, index) => {
            return (
              <div
                className={
                  itemGiaoDich.type == "Nạp"
                    ? "alert alert-success d-flex justify-content-between text-black"
                    : "alert alert-danger d-flex justify-content-between text-black"
                }
                key={index}
              >
                <p className="m-0">Đã {itemGiaoDich.type}</p>
                <p className="m-0">${itemGiaoDich.amount}</p>
                <p className="m-0">{itemGiaoDich.date}</p>
              </div>
            );
          })}
        </div>
      </div>

      <ModalWallet napTien={napTien} rutTien={rutTien} />
    </div>
  );
};

export default MyWallet;
