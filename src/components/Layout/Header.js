import styles from './Header.module.css'
import HeaderCartButton from '../UI/HeaderCartButton'

const Header = (props)=>{
    return(
        <>
            <header className={`${styles.header}`}>
                <h1>Japan kitchen</h1>
                <HeaderCartButton/>
            </header>
            <div className={`${styles['main-image']}`}>
                <img src='/sushi.jpg'/>
            </div>
        </>
    )
}

export default Header