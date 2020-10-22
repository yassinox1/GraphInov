import React,{useEffect, useState} from "react";
import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/main.css";
import "./styles/style.css";
import Client from './pages/Client'
import Contract from './pages/Contract'
import TopBar from "./Components/layouts/TopBar";

import MyState from "./context/product/MyState"
import Spinner from './Components/common/Spinner'
function App() {
  const [spin,setSpin] = useState(true)
  
  useEffect(() => {
    
    setTimeout(() => { 
      setSpin(!spin)
  }, 2000)
    }, [])

 
   
  return (
   
    <MyState>
    <Router>
    {spin? 
    <div  style={{width:'100%',height:'100%',backgroundColor:'#EEF1F3' ,position:'absolute'}}>
       <Spinner/>
    </div>
     :
      <div className="App" style={{backgroundColor:'#EFF2F4'}}>
        <TopBar/>
        <Route exact path="/" component={Main} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/contract" component={Contract} />
      </div>}
    </Router>
    </MyState>
  );
}

export default App;
