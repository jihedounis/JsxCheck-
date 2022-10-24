
import './App.css';
import React from "react";
import Fullname from './component/Profil/Fullname';
import Adresse from './component/Profil/Adress';
import Profil from './component/Profil/Photo';
function App() {
return (
  <>
  <div className='contain'>
  <Profil/>
  <Fullname/>
  <Adresse/>
  </div>  
  </>
)

}

export default App;
