import useInput from '../../hooks/use-input'
import styles from './SubmitOrder.module.css'

const SubmitOrder =(props)=>{


    const {
        inputValue : inputName,
        isValidInputValue: isValidInputName,
        hasInputError: hasNameInputError,
        inputValueChangeHandler: inputNameChangeHandler,
        inputLostFocusHandler: inputNameLostFocus,
        resetValues: resetNameValues
    } = useInput((value) => value.trim() !=='')

    const {
        inputValue : inputCity,
        isValidInputValue: isValidInputCity,
        hasInputError: hasCityInputError,
        inputValueChangeHandler: inputCityChangeHandler,
        inputLostFocusHandler: inputCityLostFocus,
        resetValues: resetCityValues
    } = useInput((value) => value.trim() !=='')

    const {
        inputValue : inputAdress,
        isValidInputValue: isValidInputAdress,
        hasInputError: hasAdressInputError,
        inputValueChangeHandler: inputAdressChangeHandler,
        inputLostFocusHandler: inputAdressLostFocus,
        resetValues: resetAdressValues
    } = useInput((value) => value.trim() !=='')


    let isFormValid = false
    if(isValidInputName && isValidInputCity && isValidInputAdress){
        isFormValid = true
    }



    const confirmOrderHandler = (event)=>{
        event.preventDefault()
        if(!isFormValid)



        resetNameValues()
        resetCityValues()
        resetAdressValues()
    }



    const nameStyles = hasNameInputError ? `${styles.control} ${styles.invalid}` : styles.control
    const cityStyles = hasCityInputError ? `${styles.control} ${styles.invalid}` : styles.control
    const adressStyles = hasAdressInputError ? `${styles.control} ${styles.invalid}` : styles.control

    return(
        <form onSubmit={confirmOrderHandler}>
            <div className={nameStyles}>
                <label htmlFor='name'>  Name</label>
                <input onChange={inputNameChangeHandler} onBlur={inputNameLostFocus} value={inputName} id='name' type='text'></input>
                {hasNameInputError && <p>vvedite imja</p>}
            </div>
            <div className={cityStyles}>
                <label htmlFor='city'> City</label>
                <input onChange={inputCityChangeHandler} onBlur={inputCityLostFocus} value={inputCity} id='city' type='text'></input>
                {hasCityInputError && <p>vvedite city</p>}
            </div>
            <div className={adressStyles}>
                <label htmlFor='adress'>  Adress</label>
                <input onChange={inputAdressChangeHandler} onBlur={inputAdressLostFocus} value={inputAdress} id='adress' type='text'></input>
                {hasAdressInputError && <p>vvedite adress</p>}
            </div>
            <div className={styles.actions}>
                <button disabled={!isFormValid} className={styles.submit}>podtverditj</button>
                <button type='button' onClick={props.onCancel}>otmenitj</button>
            </div>
        </form>
    )
}

export default SubmitOrder