import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext, useState} from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import SubmitOrder from './SubmitOrder'

const Cart = (props)=>{

    const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false)

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

    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Summ</span>
                <span>{totalAmount}</span>
            </div>
            {isSubmitOrderAvailable && <SubmitOrder onCancel={props.onHideCart}/>}
            {!isSubmitOrderAvailable && modalButtons}

        </Modal>
    )
}

export default Cart