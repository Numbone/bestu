

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import SwiperCard from './component/SwiperCard/SwiperCard';
import AllProducts from './pages/AllProducts';
import Ambassadors from './pages/Ambassadors';
import Beauty from './pages/Beauty';
import Body from './pages/Body';
import Certificates from './pages/Certificates';
import Dealers from './pages/Dealers';
import DelaersInfo from './pages/DelaersInfo';
import HomeContent from './pages/HomeContent';
import Packaging from './pages/Packaging';
import Partners from './pages/Partners';
import Spa from './pages/Spa';
import Stores from './pages/Stores';
import Vouchers from './pages/Vouchers';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route key={1} path='/' element={<HomeContent />}></Route>
        <Route key={2} path='/all_products' element={<AllProducts />}></Route>
        <Route key={3} path='/dealers_form' element={<Dealers />}></Route>
        <Route key={4} path='/ambassadors' element={<Ambassadors />}></Route>
        <Route key={5} path='/partners' element={<Partners />}></Route>
        <Route key={6} path='/certificates' element={<Certificates />}></Route>
        <Route key={7} path='/dealers' element={<DelaersInfo />}></Route>
        <Route key={8} path='/stores' element={<Stores />}></Route>
        <Route key={9} path='/swiper' element={<SwiperCard />}></Route>
        <Route key={10} path='/body' element={< Body />}></Route>
        <Route key={11} path='/beauty' element={< Beauty />}></Route>
        <Route key={12} path='/spa' element={< Spa />}></Route>
        <Route key={13} path='/vouchers' element={< Vouchers />}></Route>
        <Route key={14} path='/packaging' element={< Packaging />}></Route>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
