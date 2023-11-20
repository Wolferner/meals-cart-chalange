import styles from './Header.module.css'
import HeaderCartButton from '../UI/HeaderCartButton'


const Header = (props)=>{

    

    return(
        <>
            <header className={`${styles.header}`}>
                <h1>Japan kitchen</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={`${styles['main-image']}`}>
                <img alt="sushi" src='/sushi.jpg'/>
            </div>
        </>
    )
}

export default Header