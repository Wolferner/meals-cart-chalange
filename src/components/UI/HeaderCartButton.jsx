import React,{useContext, useEffect, useState} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) =>{

    const [isButtonAnimated, setIsButtonAnimated] = useState(false)

    const ctx = useContext(CartContext)
    const cartItemsNumber = ctx.items.reduce((curentValue, item)=>{ return curentValue+ item.amount} ,0)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`

    useEffect(()=>{
        if(ctx.items.length ===0){
            return
        }
        setIsButtonAnimated(true)

        const timer = setTimeout(()=>{
            setIsButtonAnimated(false)
        },300)

        return()=>{
            clearTimeout(timer)
        }

    },[ctx.items])

    return(
        <button className={buttonClasses} onClick={props.onShowCart}>
            <span className={`${styles.icon}`}>
                <CartIcon/>
            </span>
            <span> Cart</span>
            <span className={`${styles.badge}`}>{cartItemsNumber}</span>
        </button>

    )
}

export default HeaderCartButton