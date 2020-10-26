import React,{useEffect, useState,Component, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import "./styles/main.css";
import "./styles/style.css";

import TopBar from "./Components/layouts/TopBar";

import MyState from "./context/product/MyState"
import TeamesState from "./context/themes/ThemesState"
import Spinner from './Components/common/Spinner'
 

 
import Main from "./Components/Main"
import Client from "./pages/Client"
import Contract from "./pages/Contract"
function App() {
   
  const [spin,setSpin] = useState(true)
  
  useEffect(() => {
    
    setTimeout(() => { 
      setSpin(!spin)
  }, 2000)
    }, [])

 
   
  return (
  
    <TeamesState>
    <MyState>
    <Router>
    {spin? 
    <div  style={{width:'100%',height:'100%',backgroundColor:'#EEF1F3' ,position:'absolute'}}>
       <Spinner/>
    </div>
     :
      <div className="App" style={{backgroundColor:'#EFF2F4'}}>
        <TopBar/>
        <Suspense fallback={<h3>Lazyyyyyy</h3>}>
                <Route exact path='/' component={Main} />
                <Route path='/client' component={Client} />
                <Route path='/contract' component={Contract} />
            </Suspense>
 
      </div>}
    </Router>
    </MyState>
    </TeamesState>
  );
}

export default App;
