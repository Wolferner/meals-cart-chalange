import { useState } from "react"


const useInput = (validateFunction) =>{

    const [inputValue, setInputValue] = useState('')
    const [wasinputTouched, setWasInputTouched] = useState(false)

    const isValidInputValue = validateFunction(inputValue)
    const hasInputError = !isValidInputValue && wasinputTouched

    const inputValueChangeHandler = (event) =>{
        setInputValue(event.target.value)
    }

    const inputLostFocusHandler = ()=>{
        setWasInputTouched(true)
    }

    const resetValues = ()=>{
        setInputValue('')
        setWasInputTouched(false)
   
    }

    return{
        inputValue,
        isValidInputValue,
        hasInputError,
        inputValueChangeHandler,
        inputLostFocusHandler,
        resetValues
    }
}

export default useInput