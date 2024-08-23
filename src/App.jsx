import React, { useState } from 'react';
import './App.css';
import Toast from './Components/Toast';

function App() {
  const [amount, settingAmount] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [initialProductPrice, initialPrice] = useState(0);
  const [toastActive, setToastActive] = useState(false);

  const handleAddExpense = () => {
    const price = parseFloat(productPrice);
    if (!isNaN(price)) {
      initialPrice(initialProductPrice + price);
    }
    setProductTitle('');
    setProductPrice('');
    setToastActive(true);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold mb-10">Budget Planner</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {/* Budget Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-80">
            <h2 className="text-2xl font-semibold mb-6 text-center">Set Budget</h2>
            <input
              value={amount}
              className="border-2 border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="number"
              placeholder="Enter Your Budget"
              onChange={(e) => settingAmount(e.target.value)}
            />
            <button
              onClick={() => console.log(amount)}
              className="bg-blue-500 text-white p-3 w-full rounded-lg hover:bg-blue-600 transition-colors">
              Set Amount
            </button>
          </div>

          {/* Expenses Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-80">
            <h2 className="text-2xl font-semibold mb-6 text-center">Add Expenses</h2>
            <input
              value={productTitle}
              className="border-2 border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Enter Product Title"
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <input
              value={productPrice}
              className="border-2 border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Enter Product Price"
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <button
              onClick={handleAddExpense}
              className="bg-blue-500 text-white p-3 w-full rounded-lg hover:bg-blue-600 transition-colors">
              Add Your Expense
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-10 flex flex-wrap gap-10 justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Total Budget</h3>
            <p className="text-2xl mt-2">${amount || '0'}</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Total Expenses</h3>
            <p className="text-2xl mt-2">${initialProductPrice}</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Remaining Balance</h3>
            <p className="text-2xl mt-2">${amount - initialProductPrice || '0'}</p>
          </div>
        </div>
      </div>
      <Toast isActive={toastActive} onClose={() => setToastActive(false)} />
    </>
  );
}

export default App;
