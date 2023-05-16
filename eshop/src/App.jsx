import './App.css'
import Checkout from './Checkout';
import ActualHome from './ActualHome'
import NotFound from './NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={ <Login />}></Route>
        <Route path='/checkout' element={ <Checkout />}></Route>
        <Route path='/' element={ <ActualHome />}></Route>
        <Route path='*' element={ <NotFound />}></Route>
      </Routes>
    </>
  )
}

function WrappedApp(){
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
export default WrappedApp
