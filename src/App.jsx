import { useState } from "react";
import './main.css'
export const ClickMe = () =>{
       const[ name , setName] =useState ({value: ""})
       const[ age , setAge] =useState ({value: ""})
       const [ Xname, setXname] =useState ("")
       const [ Xage, setXAge] =useState ("")

     

     const getAge =(e)=>{
          setAge({value:e.target.value})
     }
     const getName =(e)=>{
       setName({value:e.target.value})
     }
      
     const Submit =(e)=>{
          e.preventDefault()
          setXname ( 
               name.value !== "" ? `your name is ${name.value}` : 
              alert("Please inter your name ")  ) ;
            name.value =""
          setXAge (
               age.value !== ""
               ? age.value >= 18
               ? `and your age is  ${age.value} and it is over 18`
               : `and Your age is ${age.value} and it is under 18`: alert("Please inter your Age ")  
           );
               
          age.value =""

       
            
     }
     return (

          <div className="Form">
              <h1 className="title" >Calculate Your age</h1>
             <input className="Input" type="text" placeholder="Name" onChange={getName} value={name.value} /> 
             <input type="number"  className="Input" placeholder="age" onChange={getAge} value={age.value} /> 
             <button  className="btn"  onClick={Submit}> Click me</button>
             <p className="output"> {Xname}  {Xage} </p> 
          </div>
     )
}

