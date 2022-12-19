import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/User';
import BasketStore from './store/Basket';



const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
    
        <Context.Provider value={{
            user: new UserStore(),
            basket: new BasketStore()
        }}
        >
            <App />
        </Context.Provider>
    

);

