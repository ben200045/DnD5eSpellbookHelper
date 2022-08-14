import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import styles from './css/index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './components/App';
import "typeface-cinzel";
require('typeface-cinzel')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <div>
  <BrowserRouter>
  <div className={styles.frame_setup}>  
    <Routes>
      <Route path="/" element={<App favourites={false}/>} />
      <Route path="favourites" element={<App favourites={true}/>} />
    </Routes>
  </div>
  
  <Outlet />
  </BrowserRouter>
  </div>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();