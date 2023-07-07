import { useState } from "react";
import "./App.css";
import Invoice from "./Invoice";

function App() {

  const [data, setData] = useState([
    {
      _id: "6391800597e7751f5613b080",
      bookingId: ["62161802ee95607c22461571", "6216183aee95607c22461586"],
      invoiceId: [],
      bookingCode: ["YW-YPBP-BKNG-652-23-02", "YW-YPBP-BKNG-662-23-02"],
      resourceAlias: ["PBPOFD-5", "PBPOFD-6", "PBPOFD-7"],
      isEmailSent: true,
      paymentDetails: [],
      paymentStatus: "Pending",
      bookingAmount: 7260,
      payableAmount: 8566,
      taxInvoiceCode: null,
      taxInvoiceDate: null,
      taxes: [
        {
          name: "CGST",
          percentage: 9,
          value: 653,
        },
        {
          name: "SGST",
          percentage: 9,
          value: 653,
        },
      ],
      isCombined: false,
      type: "Single",
      status: "Active",
      companyName: "Duss Technologies",
      locationName: "Duss Andheri - Pinnacle Business Park",
      bookingQuantity: 3,
      resourceName: "3 - Seater Cabin",
      resourceType: "3 - Seater Cabin",
      paymentDate: "2022-12-01T06:11:00.000Z",
      paymentDueDate: "2022-12-08T06:11:01.762Z",
      code: "PI-414/YSPL/22-23",
      fiscalYear: "22-23",
      invoiceDetail: {
        customerName: "Duss Technologies",
        billingPeriod: "01 Dec 2022",
        reference: "Duss Andheri - Pinnacle Business Park",
        invoiceNo: "PI-414/YSPL/22-23",
        invoiceType: "PROFORMA",
        invoiceDate: "01-12-2022",
        paymentDueDate: "08-12-2022",
        items: [
          {
            description: "Open Fixed Desk",
            price: 550,
            quantity: 9,
          },
          {
            description: "3 - Seater Cabin",
            price: 2310,
            quantity: 1,
          },
        ],
        taxes: [
          {
            name: "CGST",
            percentage: 9,
            value: 653,
          },
          {
            name: "SGST",
            percentage: 9,
            value: 653,
          },
        ],
        from: 1669852800000,
        to: 1672531140000,
        amountDue: 8566,
        payableAmount: 8566,

        bookingAmount: 7260,

        customerEmail: "soumil@dusstechnologies.com",
        customerGstNumber: "06AABCW5990R1ZF",
        customerPan: "AABCW5990R",
        customerPhone: "8097776925",
        customerAddress: "3rd floor, Unit no 31, 22002",
        bankName: "HDFC Bank",
        branchName: "Kamala Mills",
        accountName: "YesssWorks Spaces Pvt. Ltd",
        accountNumber: "YESSSW427PIN",
        ifsc: "HDFC0000542",
      },
      createdAt: "2022-12-08T06:11:17.985Z",
      updatedAt: "2022-12-08T06:12:58.636Z",
      __v: 0,
    },
    {
      _id: "6391800597e7751f5613b980",
      bookingId: ["62161802ee95607c22461571", "6216183aee95607c22461586"],
      invoiceId: [],
      bookingCode: ["YW-YPBP-BKNG-652-23-02", "YW-YPBP-BKNG-662-23-02"],
      resourceAlias: [
        "PBPOFD-5",
        "PBPOFD-6",
        "PBPOFD-7",
        "PBPOFD-2",
        "PBPOFD-1",
        "PBPOFD-3",
        "PBPOFD-4",
        "PBPOFD-8",
        "PBPOFD-9",
        "3 Seater Cabin-1",
      ],
      isEmailSent: true,
      paymentDetails: [],
      paymentStatus: "Pending",
      bookingAmount: 72600,
      payableAmount: 85668,
      taxInvoiceCode: null,
      taxInvoiceDate: null,
      taxes: [
        {
          name: "CGST",
          percentage: 9,
          value: 6534,
        },
        {
          name: "SGST",
          percentage: 9,
          value: 6534,
        },
      ],
      isCombined: false,
      type: "Single",
      status: "Active",
      companyName: "Duss Digital Infra Pvt Ltd",
      locationName: "Duss Andheri - Pinnacle Business Park",
      bookingQuantity: 10,
      resourceName: "3 - Seater Cabin",
      resourceType: "3 - Seater Cabin",
      paymentDate: "2022-12-01T06:11:00.000Z",
      paymentDueDate: "2022-12-08T06:11:01.762Z",
      code: "PI-414/YSPL/22-23",
      fiscalYear: "22-23",
      invoiceDetail: {
        customerName: "Duss Digital Infra Pvt Ltd",
        billingPeriod: "01 Dec 2022",
        reference: "Duss Andheri - Pinnacle Business Park",
        invoiceNo: "PI-414/YSPL/22-23",
        invoiceType: "PROFORMA",
        invoiceDate: "01-12-2022",
        paymentDueDate: "08-12-2022",
        items: [
          {
            description: "Open Fixed Desk",
            price: 5500,
            quantity: 9,
          },
          {
            description: "3 - Seater Cabin",
            price: 23100,
            quantity: 1,
          },
        ],
        taxes: [
          {
            name: "CGST",
            percentage: 9,
            value: 6534,
          },
          {
            name: "SGST",
            percentage: 9,
            value: 6534,
          },
        ],

        from: 1669852800000.0,
        to: 1672531140000.0,
        amountDue: 85668,
        payableAmount: 85668,
        bookingAmount: 72600,
        customerEmail: "soumil@dussdigitalinfra.com",
        customerGstNumber: "06AABCW5990R1ZF",
        customerPan: "AABCW5990R",
        customerPhone: "8097776925",
        customerAddress: "3rd floor, Unit no 31, 22002",
        bankName: "HDFC Bank",
        branchName: "Kamala Mills",
        accountName: "YesssWorks Spaces Pvt. Ltd",
        accountNumber: "YESSSW427PIN",
        ifsc: "HDFC0000542",
      },

      createdAt: "2022-12-08T06:11:17.985Z",
      updatedAt: "2022-12-08T06:12:58.636Z",
      __v: 0,
    },
  ]);

  const handleAction = () => {};

  return (
    <div className="App">
      <Invoice data={data} setData={setData} handleAction={handleAction} />
    </div>
  );
}

export default App;
