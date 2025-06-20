// Basically hum chahai to hum custom hooks ke andar apna built-in hooks (useState,useEffect,etc.) bhe use kar skta hai 
import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {

    const [data,setData] = useState({}); // --> empty object es liya rakha hai "useState" ke andar jis se program crash na kara. (ku ki hum loop to laga eee gaa he data par)

    // ab mein actual mein yaha par ek API call karna chata hu.
    useEffect(() => {
        // ab basically ye API call karna se aapko mila ka json data but in form of string.
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()).then((res) => setData(res[currency])) // --> always remember then() ke andar ek callback milta hai aapko.
        console.log(data)
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo; // --> es statement through hum pura ka pura method/function he return kar raha hai.

// This is how we desgin custom hook