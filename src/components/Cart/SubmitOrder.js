import useInput from '../../hooks/use-input'
import styles from './SubmitOrder.module.css'

const SubmitOrder =(props)=>{


    const {
        inputValue : inputName,
        isValidInputValue: isValidInputName,
        hasInputError: hasNameInputError,
        inputValueChangeHandler: inputNameChangeHandler,
        inputLostFocus: inputNameLostFocus,
        resetValues: resetNameValues
    } = useInput((value) => value.trim !=='')

    const {
        inputValue : inputCity,
        isValidInputValue: isValidInputCity,
        hasInputError: hasCityInputError,
        inputValueChangeHandler: inputCityChangeHandler,
        inputLostFocus: inputCityLostFocus,
        resetValues: resetCityValues
    } = useInput((value) => value.trim !=='')

    const {
        inputValue : inputAdress,
        isValidInputValue: isValidInputAdress,
        hasInputError: hasAdressInputError,
        inputValueChangeHandler: inputAdressChangeHandler,
        inputLostFocus: inputAdressLostFocus,
        resetValues: resetAdressValues
    } = useInput((value) => value.trim !=='')


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
                <label htmlFor='name'> Vvedite Name</label>
                <input onChange={inputNameChangeHandler} onBlur={inputNameLostFocus} value={inputName} id='name' type='text'></input>
            </div>
            <div className={cityStyles}>
                <label htmlFor='city'> Vvedite City</label>
                <input onChange={inputCityChangeHandler} onBlur={inputCityLostFocus} value={inputCity} id='city' type='text'></input>
            </div>
            <div className={adressStyles}>
                <label htmlFor='adress'> Vvedite Adress</label>
                <input onChange={inputAdressChangeHandler} onBlur={inputAdressLostFocus} value={inputAdress} id='adress' type='text'></input>
            </div>
            <div className={styles.actions}>
                <button disabled={!isFormValid} className={styles.submit}>podtverditj</button>
                <button type='button' onClick={props.onCancel}>otmenitj</button>
            </div>
        </form>
    )
}

export default SubmitOrder