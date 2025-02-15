import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ToastContainer} from 'react-toastify';


import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer  position="top-center" theme="dark"  autoClose={2000} />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
