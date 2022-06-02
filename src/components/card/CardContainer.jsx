import { useSelector, useDispatch } from 'react-redux'

import Style from './Card.module.scss'
import CardItem from './CardItem'
import { openModal } from '../../redux/features/modalSlice'

const CardContainer = () => {
  const { cartItems, total, cartAmount } = useSelector(store => store.cart)
   
  const dispatch = useDispatch()
  if (cartAmount < 1) {
    return (
      <section className={ Style.container } >
        <header >
          <h2>my bag</h2>
          <h5> is currently empty!</h5>
      </header>
      </section>
    )
  }
  return (
    <section className={Style.container} >
        <header >
          <h2>my bag</h2>
        </header>
       <article>
        {
          cartItems.map(item =>  <CardItem key={item.id} {...item}  /> )
        }
       </article>      
      <footer>
        <hr />
        <div className={Style.totalContainer}>
          <h4>total</h4>
          <p>$ { total.toFixed(2) }</p>
        </div>
        <button className={Style.btn}
          onClick={() => dispatch(openModal())}
        >clear cart</button>
      </footer>
    </section>
  )
}

export default CardContainer