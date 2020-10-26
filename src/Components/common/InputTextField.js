import React from "react";
import{FaUsers,FaUmbrella,FaPlusCircle}from"react-icons/fa"
const InputTextField = ({id,text,type,data,name,value,placeholder, onChange}) => {
  
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="border-bottom border-dark my-2"
    >{
        type=='select'?
        <>
       <h5 style={{color:'#303841'}}>{text}</h5>
 
        <select style={{width:'60%'}} class="form-control mb-3" id="exampleFormControlSelect1" name={name} onChange={onChange}>
               {
                   data.map(item=> <option value={item}>{item}</option>)
               }  
              </select>
        </>
        :
      <>
      <h5 style={{color:'#303841',fontWeight:'bold'}}>{text}</h5>
      <input
        style={{ width: "60%" }}
        type={type}
        class="form-control mb-3"
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required
      /></>}
    </div>
  );
};
{
    /*<select style={{width:'70%'}} class="form-control mb-3" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> */
}
export default InputTextField;
