import './index.css';

import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/layouts/layout.jsx';
import DashboardLayout from './components/layouts/dashboardLayout.jsx';
import ShopkeeperLayout from './components/layouts/shopkeeperLayout.jsx';

import AuthPage from './pages/authPage.jsx';
import ShipmentsPage from './pages/shipmentsPage.jsx';
import InventoryPage from './pages/Supervisor/inventoryPage.jsx';
import ProductionPage from './pages/Supervisor/productionPage.jsx';
import DispatchPage from './pages/Supervisor/dispatchPage.jsx';
import ReceiptPage from './pages/ShopKeeper/receiptPage.jsx';
import IssuancePage from './pages/ShopKeeper/issuancePage.jsx';
import RequestsPage from './pages/ShopKeeper/requestsPage.jsx';

import OwnerManager from './pages/Owner-Manager/ownerManagerDash.jsx';
import Supervisor from './pages/Supervisor/supervisorDash.jsx';
import ShopKeeper from './pages/ShopKeeper/shopkeeperDash.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={ <AuthPage/> }/>
    <Route path='/users' element={ <Layout/> }>
        <Route path='Owner/Manager' element={ <DashboardLayout/> }>
            <Route index element={ <OwnerManager/> }/>
            <Route path='shipments' element={ <ShipmentsPage/> }/>
            <Route path='production' element={ <ProductionPage/> }/>
            <Route path='inventory' element={ <InventoryPage/> }/>
            <Route path='dispatch' element={ <DispatchPage/> }/>
        </Route>
        <Route path='Supervisor' element={ <DashboardLayout/> }>
            <Route index element={ <Supervisor/> }/>
            <Route path='shipments' element={ <ShipmentsPage/> }/>
            <Route path='production' element={ <ProductionPage/> }/>
            <Route path='inventory' element={ <InventoryPage/> }/>
            <Route path='dispatch' element={ <DispatchPage/> }/>
        </Route>
        <Route path='ShopKeeper' element={ <ShopkeeperLayout/> }>
            <Route index element={ <ShopKeeper/> }/>
            <Route path='shipments' element={ <ShipmentsPage/> }/>
            <Route path='inward' element={ <ReceiptPage/> }/>
            <Route path='outward' element={ <IssuancePage/> }/>
            <Route path='requests' element={ <RequestsPage/> }/>
        </Route>
    </Route>
  </>
));

const toastOption = { 
  success: {
    duration: 5000,
    style: {
      background: '#000000',
      color: '#30f94b'
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#30f94b'
    }
  },
  error: {
    duration: 5000,
    style: {
      background: '#000000',
      color: '#cb1010'
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#cb1010'
    }
  }
 }

function App() {
  return (
    <>
      <Toaster position='bottom-right' gutter={ 10 } toastOptions={ toastOption }/>
      <RouterProvider router={ router }/>
    </>
  );
}

export default App;