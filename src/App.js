import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import Nav from './components/nav/Nav';
import CardContainer from './components/card/CardContainer';
import {calculateTotalAmount,getCartItems} from './redux/features/catrSlice'
import Module from './components/modul/Module';
import Loading from './components/loading/Loading';

function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart)
  const {isOpen} = useSelector(store => store.modal)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(calculateTotalAmount()) 
  }, [cartItems])

  useEffect(() => {
      dispatch(getCartItems())
  }, [])
  
  if (isLoading) {
   return  <Loading />
  }
  return (
    
      <div className="root">
      <div className={isOpen && "opacity"}>
      
        <Nav />
        <CardContainer />
       {
        isOpen &&   <Module />
       }
      </div>
    </div>
    
    
  );
}

export default App;
