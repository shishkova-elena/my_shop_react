
import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage  from './pages/IndexPage/IndexPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import DefaultLayout from './components/Layouts/DefaultLayout';
import ProductPage from './pages/ProductPage/ProductPage';
import BasketPage from './pages/BasketPage/BasketPage';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayout />}>
          <Route index element={<IndexPage />}/>
          <Route path={'contacts'} element={<ContactsPage />}/>
          <Route path={'basket'} element={<BasketPage />}/>
          <Route path={'products'}>
            <Route path={':userId'} element={<ProductPage />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
