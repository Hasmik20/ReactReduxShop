import { useDispatch } from "react-redux";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Style from './Card.module.scss'
import { addCartAmount,minusCartAmount, removeCart } from "../../redux/features/catrSlice";

const CardItem = ({ id, title, price, img, amount }) => {
 const dispatch = useDispatch()
  return (
   <div className={Style.cartItem}>
      <img src={img} alt={ title } />
      <article>
        <h4>{ title }</h4>
        <h4 >${ price}</h4>
        {/* remove button */}
        <button onClick={() => dispatch(removeCart(id))} >
          remove
        </button>
      </article>
      <div>
        {/* increase amount */}
        <button onClick={() =>dispatch(addCartAmount(id))} >
          <FaAngleUp />
        </button>
        {/* amount */}

        <p >{ amount }</p>
        {/* decrease amount */}
        <button onClick={() => {
          if (amount === 1) {
            dispatch(removeCart(id))
            return
          }
          dispatch(minusCartAmount(id))
        }} >
          
         <FaAngleDown  />
        </button>
      </div>
    </div>
  )
}

export default CardItem