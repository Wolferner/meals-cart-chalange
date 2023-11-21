import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props)=>{
    const ctx = useContext(CartContext)

    const totalAmount = `${ctx.totalAmount.toFixed(2)}`

    const hasItems = ctx.items.length > 0

    const removeCartItemHandler = (id)=>{
        ctx.removeItem(id)
    }

    const addCartItemHandler = (item)=>{
        ctx.addItem({...item, amount: 1})
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

    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Summ</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button> }
            </div>
        </Modal>
    )
}

export default Cart