import React,{ useRef } from 'react';
import { BiXCircle } from 'react-icons/bi';
import { BiCheckCircle } from 'react-icons/bi';
import { CgGoogleTasks } from 'react-icons/cg';
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2';
import './listStyle.css';

export default function Tachee({txt,delf,id,listees_done,setlistees}) {

const done=(idp)=>{
setlistees(prevState=>{
let newState = prevState.map(listees=>{
  if (idp==listees.id) {
    return {...listees,done:!listees.done};
    
}
return listees;
})
return newState;
})
}
return (
  <div className='taches'>
    
    <div  className={`${listees_done ? "new" : "normal"}`}>  
    &nbsp;&nbsp;
    <CgGoogleTasks/>
    <input  type="text"  readOnly value={txt} className={`${listees_done ? "nv1" : "nv"}`}/>
   
    </div>
    <button  onClick={delf} value="Supprimer" className='suppe'><BiXCircle   className='ico'  color='white'/></button>
    <button onClick={e=>done(id)} className="done" >  {listees_done ? <HiOutlineArrowUturnLeft  className='ico'  color='white'/> : <BiCheckCircle className='ico'  color='white'/>}</button> &nbsp;
   <br />
  </div>
)
}