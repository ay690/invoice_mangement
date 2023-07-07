import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Invoice = ({ data, setData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [deductionAmount, setDeductionAmount] = useState("");

  const handleAction = (invoice) => {
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDeductionAmount("");
  };

  const handleDeductionChange = (event) => {
    setDeductionAmount(event.target.value);
  };

  const handleDeduction = () => {
    const updatedData = data.map((invoice) => {
      if (invoice._id === selectedInvoice._id) {
        const newAmountDue =
          invoice.invoiceDetail.amountDue - parseInt(deductionAmount);
        return {
          ...invoice,
          invoiceDetail: {
            ...invoice.invoiceDetail,
            amountDue: newAmountDue,
          },
        };
      }
      return invoice;
    });
    setData(updatedData);
    handleModalClose();
  };

  const calculateTotalPayableAmount = () => {
    return data.reduce((total, invoice) => total + invoice.payableAmount, 0);
  };

  const calculateTotalDuesPending = () => {
    return data.reduce(
      (total, invoice) => total + invoice.invoiceDetail.amountDue,
      0
    );
  };

  const totalPayableAmount = calculateTotalPayableAmount();
  const totalDuesPending = calculateTotalDuesPending();

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id / Serial Number</th>
            <th>Company Name</th>
            <th>Quantity of resourceAlias booked</th>
            <th>Payment Status</th>
            <th>Payable Amount</th>
            <th>Due / Pending Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((invoice) => {
              const isPaid = invoice.invoiceDetail.amountDue === 0;
              const paymentStatus = isPaid ? "Paid" : "Pending";
              const rowClassName = isPaid ? "table-success" : "table-danger";

              return (
                <tr key={invoice._id} className={rowClassName}>
                  <td>{invoice._id}</td>
                  <td>{invoice.companyName}</td>
                  <td>{invoice.resourceAlias.join(", ")}</td>
                  <td>{paymentStatus}</td>
                  <td>{invoice.payableAmount}</td>
                  <td>{invoice.invoiceDetail.amountDue}</td>
                  <td>
                    {!isPaid && (
                      <button onClick={() => handleAction(invoice)}>
                        Action
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div>Total Payable Amount: {totalPayableAmount}</div>
      <div>Total Dues Pending: {totalDuesPending}</div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Deducted Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            value={deductionAmount}
            onChange={handleDeductionChange}
            placeholder="Enter deduction amount"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDeduction}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Invoice;
