import styles from './SubmitOrder.module.css'

const SubmitOrder =(props)=>{
    return(
        <form>
            <div className={styles.control}>
                <label htmlFor='name'> Vvedite Name</label>
                <input id='name' type='text'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='city'> Vvedite City</label>
                <input id='city' type='text'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='adress'> Vvedite Adress</label>
                <input id='adress' type='text'></input>
            </div>
            <button>podtverditj</button>
        </form>
    )
}

export default SubmitOrder