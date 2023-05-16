import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/products_context';
import FilterProvider from './context/filter_context';
import CartProvider from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import UserProvider from './context/user_context';

//domain- dev-r3paa8tbyl44jjlq.us.auth0.com
//client ID- DVTKQcCBVUC4ktOjBLrcDFPyHB5OPbLn

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-r3paa8tbyl44jjlq.us.auth0.com"
    clientId="DVTKQcCBVUC4ktOjBLrcDFPyHB5OPbLn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
