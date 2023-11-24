import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext, useState} from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import SubmitOrder from './SubmitOrder'

const Cart = (props)=>{

    const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false)

    const [isDataSubmiting, setIsDataSubmiting] = useState(false)
    const [error, setError] = useState(null)
    const [wasDataSendingSuccesfull, setWasDataSendingSuccesfull] = useState(false)

    const ctx = useContext(CartContext)

    const totalAmount = `${ctx.totalAmount.toFixed(2)}`

    const hasItems = ctx.items.length > 0

    const removeCartItemHandler = (id)=>{
        ctx.removeItem(id)
    }

    const addCartItemHandler = (item)=>{
        ctx.addItem({...item, amount: 1})
    }

    const orderHandler = () =>{
        setIsSubmitOrderAvailable(true)
    }

    const submitOrderHandler = async (userData)=>{
        setError(null)
        setIsDataSubmiting(true)
        setWasDataSendingSuccesfull(false)
        try{
            const response = await fetch('https://react-course-project-ffeb9-default-rtdb.europe-west1.firebasedatabase.app/orders.json',{
                method: 'POST',
                body: JSON.stringify({
                    user:userData,
                    orderedMeals: ctx.items
                }),
                headers: {'Content-Type': 'application/json'}
            })
            if(!response.ok){
                throw new Error('Problem with posting')
            }
        }catch(er){
            setError(er.message)
        }

        ctx.clearCart()
        setIsDataSubmiting(false)
        if(!error){
            setWasDataSendingSuccesfull(true)
        }

    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {ctx.items.map((item)=> 
            <CartItem 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                amount={item.amount} 
                onRemove={removeCartItemHandler.bind(null, item.id)}
                onAdd={addCartItemHandler.bind(null, item)}  />)}
        </ul>)

    const modalButtons = (            
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button> }
        </div>)

    const modalCart = (
        <>
            {cartItems}
            <div className={styles.total}>
                <span>Summ</span>
                <span>{totalAmount}</span>
            </div>
            {isSubmitOrderAvailable && !isDataSubmiting && <SubmitOrder onSubmit={submitOrderHandler} onCancel={props.onHideCart}/>}
            {!isSubmitOrderAvailable && !isDataSubmiting && modalButtons}
        </>
    )

    return(
        <Modal onHideCart={props.onHideCart}>
            {!error && !isDataSubmiting && !wasDataSendingSuccesfull && modalCart}
            {isDataSubmiting && <p>idjot zagruzka!!!</p>}
            {!error && wasDataSendingSuccesfull && <p>Zapros otpravlen</p>}
            {error && <p>{error}</p>}
            


        </Modal>
    )
}

export default Cart