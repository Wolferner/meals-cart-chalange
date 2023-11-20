import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm =(props) =>{

    return(
        <form className={styles.form}>
            <Input label='Value' input={{
                id:'Amount',
                type:'number',
                min:'1',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>ADD</button>
        </form>
    )
}

export default MealItemForm