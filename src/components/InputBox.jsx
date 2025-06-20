import React ,{useId} from "react";
// import { useState } from "react";


function InputBox({
    label ,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    place,
}) {
   
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
        {/* Ye jo upar hum ne css likhe hai ye hamri special css hai because es ke andar hum user se css bhe le raha hai to vaha par uss css ko attach karna ke leya hum ne css es mein Javascript format mein likhe hai (like in back-ticks )*/}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder= {place}
                    disabled = {amountDisable}
                    value={amount}
                    // yaha par hum na onChange method mein "&&" es liya use kiya hai b/c possible chance hai ke ye jo method hai onAmountChnage ye kise na pass he na kara ho to us case mein hamra program crash na kar jaya to basically us se prevent karna ke liya we use this 
                    // It simply means agar onAmountChnage method pass hua hai tabhe es ko use karo varna nhi . 
                    // And also remember that ke Number() function es liya use kiya hai because mostly time JS hum ko event ke through jo value ate hai usko string format mein deti hai.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                    // for getting the difference between value & onChange --> refer notebook
                >
                    
                        {/* Remember jab bhe aap loop lagya ga jsx ke andar then aap ko usme "key" pass karne he karne pada ge */}
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
