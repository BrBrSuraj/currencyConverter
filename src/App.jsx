import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NPR");

  const currency = useCurrencyInfo(from);
  const rate= currency && currency.data.conversion_rates
  let options =rate && Object.keys(rate);

const swap=()=>{
  setFrom(to)
  setTo(from)
}
  
  

  return (
    <div className="w-full h-screen flex flex-wrap justify-between">
      <div className="flex bg-gray-700 w-[50%] justify-center items-center">
        <div
          className="border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <form onSubmit={(e)=>{
              e.preventDefault()
              setConvertedAmount((amount*rate[to]))
            
          }}>
            {/* input component call */}
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={Number(amount)}
                onAmountChange={(value) => Number(setAmount(value))}
                selectedOption={from}
                onSelectChange={(value) => {
                 
                  setFrom(value)}}
                currencyOptions={options}
              />
            </div>
            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                Swap
              </button>
            </div>
            {/* input component call */}
            <div className="w-full mb-1">
              <Input
                label="To"
                amount={Number(convertedAmount)}
                onAmountChange={(value) => Number(setAmount(value))}
                selectedOption={to}
                onSelectChangeTo={(value) => {
                 
                  setTo(value)}}
                amountDisabled={true}
                currencyOptions={options}
              />
            </div>
            {/* convert button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
             {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
      <img
        className="w-[50%] h-screen"
        src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App;
