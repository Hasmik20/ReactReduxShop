import {useSelector} from 'react-redux'


import { RiShoppingBasketLine } from "react-icons/ri";
import Styles from './Nav.module.scss'

const Nav = () => {
  const {cartAmount} = useSelector(state => state.cart)
  return (
    <nav >
      <div className={Styles.navContainer}>
          <h3>MyShop</h3>
        <section>
          <RiShoppingBasketLine className={ Styles.basketLogo}/>
          <div>
            <p>{ cartAmount }</p>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Nav