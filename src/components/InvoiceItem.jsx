import React from "react";
import InvoiceField from "./InvoiceField";

const InvoiceItem = ({ id, name, qty, price, onDeleteItem, onEdtiItem,cur }) => {
  const deleteItemHandler = () => {
    onDeleteItem(id);
  };

  return (
    <tr>
      <td className="w-full ">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className: "rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none",
            placeholder: "Description of service or product...",
            type: "text",
            name: "name",
            id: id,
            value: name,
          }}
        />
      </td>
      <td className="min-w-[65px] md:min-w-[80px] ">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className: "rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none",
            type: "number",
            min: "1",
            name: "qty",
            id: id,
            value: qty,
          }}
        />
      </td>
      <td className="relative min-w-[100px] md:min-w-[150px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400 sm:left-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
          />
          <path d="M12 3v3m0 12v3" />
        </svg>
       {/* <span>{cur}</span> */}
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className: "text-right rounded bg-white ring-1 ring-gray-300 hover:ring-gray-400 hover:ring-1 hover:shadow-md focus:border-teal-700 focus:ring-1 focus:ring-teal-600 focus:outline-none",
            type: "number",
            min: "0.01",
            step: "0.01",
            name: "price",
            id: id,
            value: price,
          }}
        />
      </td>
      <td className="flex items-center justify-center">
        <button
          className=" rounded-md p-2 text-black  transition-colors hover:text-teal-500 bg-white"
          onClick={deleteItemHandler}
        >
          {/* <h1 className="rounded-md p-2 text-black shadow-sm transition-colors duration-20 hover:text-blue-500" onClick={deleteItemHandler}>x</h1> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg> */}
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
      </td>
    </tr>
  );
};

export default InvoiceItem;
