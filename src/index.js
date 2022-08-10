import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import styles from './css/index.css';
import reportWebVitals from './reportWebVitals';
import Frame_Container from './containers/Frame_Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  <div className={styles.frame_setup}>  
    <Routes>
      <Route path="/" element={<Frame_Container />} />
      <Route path="Favourites" element={<Frame_Container />} />
    </Routes>
    </div>
  </BrowserRouter>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();