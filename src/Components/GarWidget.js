import { BorderLeft } from '@material-ui/icons';
import React from 'react'
import {
    FaClipboardList,
    FaFolderMinus,
    FaIdCard,
    FaFolderOpen,
    FaElementor,
    FaReadme,
    FaPlus,
    FaCheckCircle,
    FaChevronDown
  } from "react-icons/fa";
const GarWidget = ({type,text,prix,text2,prix2,isSelected,blue}) => {
    return (
        <div
        style={type==1? {borderLeft : blue?'20px solid #53216D' : '20px solid #1FB9F1',width: "340px",backgroundColor:'#FFFFFF',height:'150px',padding:'2px'} : type==2? { width: "440px",backgroundColor:'#FFFFFF',height:'150px',padding:'2px'} : {
          width: "280px",backgroundColor:'#FFFFFF',height:'150px',padding:'2px'
          
        }}
      >
        <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
            <span></span>
            <div >
              {isSelected?  <FaCheckCircle
            style={{
              height: "25px",
              width: "25px",
              fontSize: "26px",
              fontWeight: "bold",
              color: "#92D050" 
               
            }}
          /> :  <FaCheckCircle
            style={{
              height: "25px",
              width: "25px",
              fontSize: "26px",
              fontWeight: "bold",
              color: "#FFFF" 
               
            }}
          />}
           
            </div>
         
        </div>
       {type==1? <h2 style={{fontWeight:'bold',marginTop:'30px'}}>{text}</h2>  :  
       type == 2?
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
<div><h3 style={{ fontWeight:'bold',color: "red" }}>{prix}</h3>
       <h3 style={{fontWeight:'bold'}}>{text}</h3></div>
       <FaPlus style={{
              height: "25px",
              width: "25px",
              fontSize: "26px",
              fontWeight: "bold"
               
            }}/>
       <div><h3 style={{ fontWeight:'bold',color: "red" }}>{prix}2</h3>
       <h3 style={{fontWeight:'bold'}}>{text2}</h3></div>
            </div>
       :
       <div><h3 style={{ fontWeight:'bold',color: "red" }}>{prix}</h3>
       <h3 style={{fontWeight:'bold'}}>{text}</h3></div>
       
       }
        
        <FaChevronDown style={{height: "30px",
              width: "30px",
              fontSize: "26px",
              fontWeight: "bold"}}/>
      </div>
    
    )
}

export default GarWidget
