import React,{useState} from 'react'
import { FaCircle,FaAtom,FaAngleDown } from "react-icons/fa";
import {NavLink,Link} from'react-router-dom';
const NavlItem = (props) => {
    const {id,title,lien,value,toggle}= props
 
    
    return (
        
                          <div>
                                <Link  onClick={()=>toggle(id)} to={lien} style={value==id ? {color :'#252733'} : {color : '#AAA'} } class="nav-link">
                                <FaCircle class="nav-link-icon   "> </FaCircle>
                                {title}
                            </Link>
                          </div>
                     
    )
}

export default NavlItem
