import React from 'react'
import './App.css'
const App = (props) => {
 
  // const img1 ="https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDqLhfGNbOevw8qF0XH9eGvk9om5m2lNHrWJah5yp7PQgNXfhm0qbImYWNi2s481liP3Drg-9jrk5L9X0LarLwMw_BxK4kQCBMudL0RXwQ5lpQCtAuOUzIYHy4cDEyxWphpWA.jpg?r=082"
  return (
    <>
 
  <div className="card">
  <img src={props.imgsrc} alt="Avatar" />
  <div className="container">
    <h4>{props.sname}</h4> 
    {/* <p>{props.info}</p>  */}
    <a href={props.link}  ><button className="button button2">Watch Now</button></a>

  
</div>



  </div>
    </>
    
  )
}

export default App