import { useDispatch } from 'react-redux'

import Style from './Module.module.scss'
import { clearCart } from '../../redux/features/catrSlice'
import { closeModal } from '../../redux/features/modalSlice'
const Module = () => {
  const dispatch = useDispatch()
  return (
    <section className={Style.moduleContainer}>
      <h4>Remove All Items From </h4>
      <h4> Your Shopping Cart?</h4>
      <div >
        <button className={Style.confirm}
          onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
         }}
        >Confirm</button>
        <button className={Style.cancel}
         onClick={() => dispatch(closeModal())}
        >Cancel</button>
      </div>
    </section>
  )
}

export default Module