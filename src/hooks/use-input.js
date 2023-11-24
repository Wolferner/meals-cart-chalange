import { useState } from "react"


const useInput = (validateFunction) =>{

    const [inputValue, setInputValue] = useState('')
    const [wasinputTouched, setWasInputTouched] = useState(false)

    const isValidInputValue = validateFunction(inputValue)
    const hasInputError = !isValidInputValue && wasinputTouched

    const inputValueChangeHandler = (event) =>{
        setInputValue(event.target.value)
    }

    const inputLostFocus = ()=>{
        setWasInputTouched(true)
    }

    const resetValues = ()=>{
        setWasInputTouched(false)
        setInputValue('')
    }

    return{
        inputValue,
        isValidInputValue,
        hasInputError,
        inputValueChangeHandler,
        inputLostFocus,
        resetValues
    }
}

export default useInput