import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '.';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import ProductItem from './component/ProductItem/ProductItem';
import SwiperCard from './component/SwiperCard/SwiperCard';
import AllProducts from './pages/AllProducts';
import Ambassadors from './pages/Ambassadors';
import AvailablePages from './pages/AvailablePages';
import Beauty from './pages/Beauty';
import Certificates from './pages/Certificates';
import Dealers from './pages/Dealers';
import DelaersInfo from './pages/DelaersInfo';
import HomeContent from './pages/HomeContent';
import Login from './pages/Login';
import Order from './pages/Order';
import Packaging from './pages/Packaging';
import Partners from './pages/Partners';
import Reset from './pages/Reset';
import Search from './pages/Search';
import Spa from './pages/Spa';
import Stores from './pages/Stores';
import Vouchers from './pages/Vouchers';
import { BrowserRouter } from 'react-router-dom';
import Politika from './pages/Politika';
import Oferta from './pages/Oferta';
import CategoryId from './pages/CategoryId';
import AuthRobo from './pages/AuthRobo';
import AuthRoboFail from './pages/AuthRoboFail';
function App() {

 const { user, basket } = useContext(Context);
  if ((localStorage.getItem("access")?.length > 0)) {
    user.setIsAuth(true)
  }
  //Loading Basket
  useEffect(() => {

    if (user.isAuth === false) {
      basket.setDeleteAllDeviceFromBasket();
      const savedBasket = JSON.parse(localStorage.getItem("basket"));
      for (let key in savedBasket) {
        basket.setBasket(savedBasket[key]);
      }

    } else if (user.isAuth === true) {
      basket.setDeleteAllDeviceFromBasket();
      const savedBasket = JSON.parse(localStorage.getItem("basket"));
      for (let key in savedBasket) {
        basket.setBasket(savedBasket[key]);
      }
    }
  }, [basket, user]);
 

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route key={1} exact path='/' element={<HomeContent />}></Route>
          <Route key={2} path='/all_products' element={<AllProducts />}></Route>
          <Route key={3} path='/dealers_form' element={<Dealers />}></Route>
          <Route key={4} path='/ambassadors' element={<Ambassadors />}></Route>
          <Route key={5} path='/partners' element={<Partners />}></Route>
          <Route key={6} path='/certificates' element={<Certificates />}></Route>
          <Route key={7} path='/dealers' element={<DelaersInfo />}></Route>
          <Route key={8} path='/stores' element={<Stores />}></Route>
          <Route key={9} path='/swiper' element={<SwiperCard />}></Route>
          <Route key={10} path='/category/:id' element={< CategoryId />}></Route>
          <Route key={11} path='/beauty' element={< Beauty />}></Route>
          <Route key={12} path='/spa' element={< Spa />}></Route>
          <Route key={13} path='/vouchers' element={< Vouchers />}></Route>
          <Route key={14} path='/packaging' element={< Packaging />}></Route>
          <Route key={14} path='/login' element={< Login />}></Route>
          <Route key={15} path='/reset' element={< Reset />}></Route>
          <Route key={16} path='/order' element={< Order />}></Route>
          <Route key={17} path='/productitem/:id' element={< ProductItem />}></Route>
          <Route key={18} path='/available' element={<AvailablePages />}></Route>
          <Route key={19} path='/search' element={<Search />}></Route>
          <Route key={20} path='/politicapage' element={<Politika />}></Route>
          <Route key={21} path='/ofertapage' element={<Oferta />}></Route>
          <Route key={22} path='/robokassa/success' element={<AuthRobo />}></Route>
          <Route key={23} path='/authrobofail' element={<AuthRoboFail />}></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
