import './index.css';

import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/layouts/layout.jsx';

import AuthPage from './pages/authPage.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={ <AuthPage/> }/>
    <Route path='/users' element={ <Layout/> }>
      <Route path='Owner/Manager' element={ <h1>manager dash</h1> }>
      </Route>
      <Route path='Supervisor' element={ <h1>supervisor dash</h1> }>
      </Route>
      <Route path='StoreKeeper' element={ <h1>storekeeper dash</h1> }>
      </Route>
      <Route path='Accountant' element={ <h1>accountant dash</h1> }>
      </Route>
      {/* <Route path='Manager' element={ <ManagerLayout/> }>
      </Route>
      <Route path='Supervisor' element={ <SupervisorLayout/> }>
      </Route>
      <Route path='StoreKeeper' element={ <StoreLayout/> }>
      </Route>
      <Route path='Accountant' element={ <AccountantLayout/> }>
      </Route> */}
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