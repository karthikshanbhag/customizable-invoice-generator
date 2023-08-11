import React, { useState } from "react";
import { uid } from "uid";
import InvoiceItem from "./InvoiceItem";
import InvoiceModal from "./InvoiceModal";
import incrementString from "../helpers/incrementString";
const date = new Date();
const today = date.toLocaleDateString("en-GB", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

const InvoiceForm = () => {
  const [itemHead] = useState([
    {
      col1: "Item",
      col2: "Qty",
      col3: "Price",
      col4: "Amount",
    },
  ]);
  const options = ['Rs', '€', '£', '¥'];
  const [stval,setStval] = useState('')
  const [ptval,setPtval] = useState('')
  const [poval,setPoval] = useState('')
  const [curval,setCurval] = useState(options[0])
  const [image, setImage] = useState("");
  const [notescon, setNotescon] = useState("");
  const [termscon, setTermscon] = useState("");
  const [showDiscount, setShowDiscount] = useState(false);
  const [showTax, setShowTax] = useState(false);
  const [notes, setNotes] = useState("Notes");
  const [terms, setTerms] = useState("Terms");
  const [showNotes, setShowNotes] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [shipto, setShipto] = useState("Ship To");
  const [showShipto, setShowShipto] = useState(false);
  const [billto, setBillto] = useState("Bill To");
  const [showBillto, setShowBillto] = useState(false);
  const [ponumber, setPonumber] = useState("PO Number");
  const [showPonumber, setShowPonumber] = useState(false);
  const [duedate, setDuedate] = useState("Due Date");
  const [showDuedate, setShowDuedate] = useState(false);
  const [payterm, setPayterm] = useState("PaymentTerm");
  const [showPayterm, setShowPayterm] = useState(false);
  const [date, setDate] = useState("Date");
  const [dateval,setDateval] = useState("");
  const [duedateval, setDuedateval] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showQty, setShowQty] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [product, setProduct] = useState("Item");
  const [qty, setQty] = useState("Qty");
  const [price, setPrice] = useState("Price");
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [cashierName, setCashierName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [invoice, setInvoice] = useState("Invoice");
  const [items, setItems] = useState([
    {
      id: uid(6),
      name: "",
      qty: 1,
      price: "1.00",
    },
  ]);

  const reviewInvoiceHandler = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const addNextInvoiceHandler = () => {
    setInvoiceNumber((prevNumber) => incrementString(prevNumber));
    setItems([
      {
        id: uid(6),
        name: "",
        qty: 1,
        price: "1.00",
      },
    ]);
  };

  const handleProdChange = () => {
    setShowProduct(true);
    setShowQty(true);
  };

  const addItemHandler = () => {
    const id = uid(6);
    setItems((prevItem) => [
      ...prevItem,
      {
        id: id,
        name: "",
        qty: 1,
        price: "1.00",
      },
    ]);
  };
  const deleteItemHandler = (id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const discountremove = () => {
    setShowDiscount(false);
    setDiscount("");
  };

  const taxremove = () => {
    setShowTax(false);
    setTax("");
  };

  const imagefunc = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
    }
  };

  const changecur = (event) =>{
    setCurval(event.target.value)
    console.log(curval)
  }

  const edtiItemHandler = (event) => {
    const editedItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    };

    const newItems = items.map((items) => {
      for (const key in items) {
        if (key === editedItem.name && items.id === editedItem.id) {
          items[key] = editedItem.value;
        }
      }
      return items;
    });

    setItems(newItems);
  };

  const subtotal = items.reduce((prev, curr) => {
    if (curr.name.trim().length > 0)
      return prev + Number(curr.price * Math.floor(curr.qty));
    else return prev;
  }, 0);
  const taxRate = (tax * subtotal) / 100;
  const discountRate = (discount * subtotal) / 100;
  const total = subtotal - discountRate + taxRate;

  return (
    <form
      className="relative flex flex-col px-2 md:flex-row"
      onSubmit={reviewInvoiceHandler}
    >
      <div className="my-6 flex-1 space-y-2  rounded-md bg-white p-4 shadow-sm sm:space-y-4 md:p-6">
        <div className="grid grid-cols-2 gap-[20.75rem]">
          <div>
            {/* image start */}
            <div className="flex w-40 items-center justify-center">
              <label
                for="dropzone-file"
                className="dark:hover:bg-bray-800 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-slate-300 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                {/* <div className="flex flex-col items-center justify-center pt-5 pb-6"> */}
                {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"> */}

                {/* </p> */}
                {/* </div> */}
                {image ? (
                  <img src={image} className="h-full" alt="Selected Logo" />
                ) : (
                  <div>
                    <span className="font-semibold">+ ADD YOUR LOGO</span>
                  </div>
                )}
                <input
                  onChange={imagefunc}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            {/* image end */}

            <div className="pt-4 pb-8">
              <input
                required
                className="max-w-[300px] flex-1 pb-8 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                placeholder="who is the invoice from?(required)"
                type="text"
                name="cashierName"
                id="cashierName"
                value={cashierName}
                onChange={(event) => setCashierName(event.target.value)}
              />
              <br />

              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  {showBillto ? (
                    <input
                      className=" h-auto bg-transparent p-0 font-thin text-black"
                      type="text"
                      value={billto}
                      onChange={(e) => setBillto(e.target.value)}
                      onBlur={() => setShowBillto(false)}
                      autoFocus
                    />
                  ) : (
                    <label
                      onClick={() => setShowBillto(true)}
                      className="col-start-2 row-start-1 text-sm font-thin md:text-base"
                      htmlFor="billto"
                    >
                      {billto}
                    </label>
                  )}

                  <input
                    required
                    className="w-[150px] flex-1 pb-10 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    placeholder="Customer name"
                    type="text"
                    name="customerName"
                    id="customerName"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {showShipto ? (
                    <input
                      className=" h-auto bg-transparent p-0 font-thin text-black"
                      type="text"
                      value={shipto}
                      onChange={(e) => setShipto(e.target.value)}
                      onBlur={() => setShowShipto(false)}
                      autoFocus
                    />
                  ) : (
                    <label
                      onClick={() => setShowShipto(true)}
                      className="col-start-2 row-start-1 text-sm font-thin md:text-base"
                      htmlFor="shipto"
                    >
                      {shipto}
                    </label>
                  )}
                  <input
                    required
                    className="w-[150px] flex-1 pb-10 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    placeholder="Customer name"
                    type="text"
                    name="customerName"
                    id="customerName"
                    value={stval}
                    onChange={(event) => setStval(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-2 border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
            <div className="-mt-350 flex flex-col items-center space-x-2 ">
              <div className="ml-20 flex flex-col">
                {showInvoice ? (
                  <input
                    className=" bg-white w-[150px] pl-1 pt-0 pb-0 pr-5 text-right text-4xl font-bold text-black"
                    type="text"
                    value={invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    onBlur={() => setShowInvoice(false)}
                    autoFocus
                  />
                ) : (
                  <label
                    onClick={() => setShowInvoice(true)}
                    className="bg-white text-4xl font-bold px-0"
                    htmlFor="invoiceNumber"
                  >
                    {invoice}
                  </label>
                )}
                <div className="pl-30 flex ">
                  <p className="w-10 bg-gray-300 p-1 text-center">#</p>
                  <input
                    required
                    className=" max-w-[130px] cursor-pointer rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    min="1"
                    step="1"
                    value={invoiceNumber}
                    onChange={(event) => setInvoiceNumber(event.target.value)}
                  />
                </div>
              </div>

              <br />

              <div className="flex flex-col items-end p-0 ">
                <div className="flex space-x-2">
                  {showDate ? (
                    <input
                      className="max-w-[60px] mr-1 h-6 bg-transparent pr-0 text-right font-thin text-black"
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      onBlur={() => setShowDate(false)}
                      autoFocus
                    />
                  ) : (
                    <label
                      onClick={() => setShowDate(true)}
                      className="pr-1 font-thin"
                      htmlFor="date"
                    >
                      {date}
                    </label>
                  )}

                  <input
                    required
                    className="curser-pointer hover: max-w-[130px] border border-gray-700 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none "
                    type="date"
                    datepicker
                    placeholder="Date"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    min="1"
                    step="1"
                    value={dateval}
                    onChange={(event) => setDateval(event.target.value)}
                  />
                </div>

                <div className=" flex space-x-2">
                  <div className="max-w-[116px] p-0">
                    {showPayterm ? (
                      <input
                        className="h-6 max-w-[180px] pl-0 bg-transparent pr-4 text-right font-thin text-black cursor-pointer"
                        type="text"
                        value={payterm}
                        onChange={(e) => setPayterm(e.target.value)}
                        onBlur={() => setShowPayterm(false)}
                        autoFocus
                      />
                    ) : (
                      // <div className="text-right">
                      <label
                        onClick={() => setShowPayterm(true)}
                        className="pr-10 mr-0 font-thin cursor-pointer"
                        htmlFor="invoiceNumber"
                      >
                        {payterm}
                      </label>
                      // </div>
                    )}
                  </div>

                  <input
                    required
                    className="relative ml-0 mt-2 max-w-[130px] rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    min="1"
                    step="1"
                    value={ptval}
                    onChange={(event) => setPtval(event.target.value)}
                  />
                </div>

                <div className="mt-1 flex space-x-2">
                  {showDuedate ? (
                    <input
                      className="mr-1 h-6 w-20 bg-transparent pr-0 font-thin text-black"
                      type="text"
                      value={duedate}
                      onChange={(e) => setDuedate(e.target.value)}
                      onBlur={() => setShowDuedate(false)}
                      autoFocus
                    />
                  ) : (
                    <label
                      onClick={() => setShowDuedate(true)}
                      className="pr-1 font-thin"
                      htmlFor="duedate"
                    >
                      {duedate}
                    </label>
                  )}
                  <input
                    required
                    className="mt-2 max-w-[130px] rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    type="date"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    min="1"
                    step="1"
                    value={duedateval}
                    onChange={(event) => setDuedateval(event.target.value)}
                  />
                </div>

                <div className="mt-1 flex space-x-2">
                  {showPonumber ? (
                    <input
                      className="mr-0 h-6 max-w-[100px] bg-transparent pr-1 font-thin text-black"
                      type="text"
                      value={ponumber}
                      onChange={(e) => setPonumber(e.target.value)}
                      onBlur={() => setShowPonumber(false)}
                      autoFocus
                    />
                  ) : (
                    <label
                      onClick={() => setShowPonumber(true)}
                      className="pr-1 font-thin"
                      htmlFor="ponumber"
                    >
                      {ponumber}
                    </label>
                  )}

                  <input
                    required
                    className="mt-2 max-w-[130px] rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    min="1"
                    step="1"
                    value={poval}
                    onChange={(event) => setPoval(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="my-4 w-full p-4 text-left">
          <thead>
            <tr className="border-b border-gray-900/10 bg-slate-800 text-sm md:text-base">
              {showProduct ? (
                <th>
                  <input
                    className="h-auto bg-slate-800 p-0 font-bold uppercase text-white"
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    onBlur={() => setShowProduct(false)}
                    autoFocus
                  />
                </th>
              ) : (
                <th
                  onClick={() => setShowProduct(true)}
                  className="cursor-pointer content-start bg-slate-800 uppercase text-white hover:shadow-md"
                >
                  {product}
                </th>
              )}
              {showQty ? (
                <th>
                  <input
                    className="h-auto bg-slate-800 p-0 font-bold uppercase text-white"
                    type="text"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    onBlur={() => setShowQty(false)}
                    autoFocus
                  />
                </th>
              ) : (
                <th
                  onClick={() => setShowQty(true)}
                  className="cursor-pointer content-start bg-slate-800 uppercase text-white hover:shadow-md"
                >
                  {qty}
                </th>
              )}
              {showPrice ? (
                <th>
                  <input
                    className="h-auto bg-slate-800 p-0 font-bold uppercase text-white"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={() => setShowPrice(false)}
                    autoFocus
                  />
                </th>
              ) : (
                <th
                  onClick={() => setShowPrice(true)}
                  className="cursor-pointer bg-slate-800 uppercase text-white hover:shadow-md"
                >
                  {price}
                </th>
              )}
              {/* <th className="text-center">PRICE</th> */}
              {/* <th className="text-center">ACTION</th> */}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <InvoiceItem
                key={item.id}
                id={item.id}
                name={item.name}
                qty={item.qty}
                price={item.price}
                onDeleteItem={deleteItemHandler}
                onEdtiItem={edtiItemHandler}
                cur={curval}
              />
            ))}
          </tbody>
        </table>
        <button
          className="flex w-auto rounded-md bg-teal-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-teal-700"
          type="button"
          onClick={addItemHandler}
        >
          <svg
            className="h-4 w-4 text-white"
            width="10"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Line item
        </button>

        <div className="grid grid-cols-2 gap-[20.rem]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              {showNotes ? (
                <input
                  className=" h-auto bg-transparent p-0 font-thin text-black"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  onBlur={() => setShowNotes(false)}
                  autoFocus
                />
              ) : (
                <label
                  onClick={() => setShowNotes(true)}
                  className="col-start-2 row-start-1 text-sm font-thin md:text-base"
                  htmlFor="Notes"
                >
                  {notes}
                </label>
              )}
              <input
                required
                className="w-[430px] flex-1 pb-10 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                placeholder="Notes - any relevant information not already covered"
                type="text"
                name="customerName"
                id="customerName"
                value={notescon}
                onChange={(event) => {
                  setNotescon(event.target.value);
                  console.log(notescon);
                }}
              />
            </div>
            <br />
            <div className="flex flex-col ">
              {showTerms ? (
                <input
                  className=" h-auto bg-transparent p-0 font-thin text-black"
                  type="text"
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  onBlur={() => setShowTerms(false)}
                  autoFocus
                />
              ) : (
                <label
                  onClick={() => setShowTerms(true)}
                  className="col-start-2 row-start-1 text-sm font-thin md:text-base"
                  htmlFor="terms"
                >
                  {terms}
                </label>
              )}
              <input
                required
                className="w-[430px] flex-1 pb-10 rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                placeholder="Terms and conditions - late fees, payment methods"
                type="text"
                name="term"
                id="customerName"
                value={termscon}
                onChange={(event) => {
                  setTermscon(event.target.value);
                  console.log(termscon);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2 pt-6">
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Subtotal:</span>
              <span>{curval}:{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col items-end">
              {showDiscount ? (
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold md:text-base"
                    htmlFor="discount"
                  >
                    Discount rate
                  </label>
                  <div className="flex items-center">
                    <input
                      className="w-full rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                      type="number"
                      name="discount"
                      id="discount"
                      min="0"
                      step="0.01"
                      placeholder="0.0"
                      value={discount}
                      onChange={(event) => setDiscount(event.target.value)}
                    />
                    <button
                      className="duration-20 rounded-md p-2 text-black shadow-sm transition-colors hover:text-teal-600"
                      onClick={discountremove}
                    >
                      <svg
                        className="h-4 w-4 text-gray-500 hover:text-teal-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <line x1="18" y1="6" x2="6" y2="18" />{" "}
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
                
              ) : (
                
                <span
                  onClick={() => setShowDiscount(true)}
                  className="cursor-pointer pr-5 text-teal-600"
                >
                  +Discount
                </span>
              )}
              {showTax ? (
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold md:text-base"
                    htmlFor="tax"
                  >
                    Tax rate
                  </label>
                  <div className="flex items-center">
                    <input
                      className="w-full rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none"
                      type="number"
                      name="tax"
                      id="tax"
                      min="0.01"
                      step="0.01"
                      placeholder="0.0"
                      value={tax}
                      onChange={(event) => setTax(event.target.value)}
                    />
                    <button
                      className="duration-20 rounded-md p-2 text-black shadow-sm transition-colors hover:text-teal-600"
                      onClick={taxremove}
                    >
                      <svg
                        className="h-4 w-4 text-gray-500 hover:text-teal-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <line x1="18" y1="6" x2="6" y2="18" />{" "}
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <span
                  onClick={() => setShowTax(true)}
                  className="cursor-pointer pr-5 text-teal-600"
                >
                  +Tax
                </span>
              )}
            </div>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Discount:</span>
              <span>
                ({discount || "0"}%){curval}:{discountRate.toFixed(2)}
              </span>
            </div>
            <div className="flex w-full justify-between md:w-1/2">
              <span className="font-bold">Tax:</span>
              <span>
                ({tax || "0"}%){curval}:{taxRate.toFixed(2)}
              </span>
            </div>
            <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
              <span className="font-bold">Total:</span>
              <span className="font-bold">{curval}:
                {total % 1 === 0 ? total : total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-1/4 bg-transparent">
        <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
          <button
            className="w-full rounded-md bg-teal-600 py-2 text-sm text-white shadow-sm hover:bg-teal-700"
            type="submit"
          >
            Download Invoice
          </button>
          <InvoiceModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            invoiceInfo={{
              image,
              invoiceNumber,
              cashierName,
              customerName,
              subtotal,
              taxRate,
              discountRate,
              total,
              dateval,
              duedateval,
              termscon,
              notescon,
              curval,
            }}
            items={items}
            onAddNextInvoice={addNextInvoiceHandler}
          />
          <div className="space-y-4 py-2">
            <label for="countries" className="text-sm font-bold md:text-base">
              CURRENCY
            </label>
            <select
              id="countries" onChange={changecur} className="block w-full rounded  bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:ring-1 focus:outline-none"
            >
              <option>$</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
            </select>

            {/* <div className="space-y-2">
              <label
                className="text-sm font-bold md:text-base"
                htmlFor="discount"
              >
                Discount rate
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded-r-none bg-white shadow-sm"
                  type="number"
                  name="discount"
                  id="discount"
                  min="0"
                  step="0.01"
                  placeholder="0.0"
                  value={discount}
                  onChange={(event) => setDiscount(event.target.value)}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;
