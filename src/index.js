import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import sdata from './sdata';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Navigation from './Navigation';


// function ncard(val){
//   return(
//     <App 
//   imgsrc={val.imgsrc}
//   link = {val.link} 
//   sname = {val.sname} />
//   )
// }

const ncard =(val)=>{
  return (
    <App 
    imgsrc={val.imgsrc}
    link = {val.link} 
    sname = {val.sname} />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Nav/> 
    <div className='container1'> 
     {sdata.map(ncard)}
    </div>  

  {/* <Navigation/>   */}

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
