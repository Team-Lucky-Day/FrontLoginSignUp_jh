import React from "react";

const MypageElectronicReceiptDetail = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="receiptdetail-wrap">
        <div className="close-area" onClick={closeModal}>
          X
        </div>
        <div className="receiptdetail-head">
          <div className="receiptdetail-head-logo">LuckyDay</div>
          <div className="receiptdetail-head-detail">
            <div className="receiptdetail-head-date">2023-06-22</div>
            <div className="receiptdetail-head-number">No.1</div>
          </div>
        </div>
        <div className="receiptdetail-body">
          <div className="receiptdetail-body-header">
            <div className="receiptdetail-body-header-detail">
              <div className="receiptdetail-body-header-detail-name">
                염진희
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageElectronicReceiptDetail;
