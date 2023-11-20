import React,{useContext} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) =>{

    const ctx = useContext(CartContext)
    const cartItemsNumber = ctx.items.reduce((curentValue, item)=>{ return curentValue+ item.amount} ,0)

    return(
        <button className={`${styles.button}`} onClick={props.onShowCart}>
            <span className={`${styles.icon}`}>
                <CartIcon/>
            </span>
            <span> Cart</span>
            <span className={`${styles.badge}`}>{cartItemsNumber}</span>
        </button>

    )
}

export default HeaderCartButton