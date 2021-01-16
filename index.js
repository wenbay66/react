import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';//'./css/app.scss';
import './css/Style.scss';
//載入本端Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Router';
//import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <ToastContainer />
        <Router/>
    </>
,document.getElementById('root'));
//ReactDOM.render(<Router/>,document.getElementById('root'))
//serviceWorker.unregister();
