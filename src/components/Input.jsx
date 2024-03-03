import { useId } from "react";
import PropTypes from "prop-types";

const Input = ({ label, 
  amount, 
  onAmountChange,
  selectedOption,
  onSelectChange,
  onSelectChangeTo,
  amountDisabled=false,
  currencyOptions }) => {
  let id = useId();
 
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
        type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(e.target.value)
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectedOption}
        onChange={(e)=>{
          if(onSelectChange){
            return onSelectChange(e.target.value)
          }
          if(onSelectChangeTo){
            return onSelectChangeTo(e.target.value)
          }
        }}
        >
         <option  value={selectedOption}>{selectedOption}</option>
          {
            currencyOptions && currencyOptions.map((v)=>{
             
              return <option key={v} value={v}>{v}</option>
              
            })
          }
        </select>
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  convertedAmount: PropTypes.string,
  onAmountChange: PropTypes.func,
  selectedOption: PropTypes.string,
  amountDisabled: PropTypes.bool,
  currencyOptions: PropTypes.array,
  onSelectChange: PropTypes.func,
  onSelectChangeTo: PropTypes.func,
};

export default Input;
