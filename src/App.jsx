import Navebar from '../src/components/Navebar/Navebar'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Routes/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

function App() {


  return (
    <>
      <RouterProvider router={router} />  
      
    </>
  )
}

export default App
