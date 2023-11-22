
import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage  from './pages/Index/Index';
import ContactsPage from './pages/Contacts/Contacts';
import DefaultLayout from './components/Layouts/DefaultLayout';
import ProductPage from './pages/Product/Product';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayout />}>
          <Route index element={<IndexPage />}/>
          <Route path={'contacts'} element={<ContactsPage />}/>
          <Route path={'products'}>
            <Route path={':userId'} element={<ProductPage />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
