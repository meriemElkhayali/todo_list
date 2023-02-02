import React, { useState } from 'react'
import Tachee from './Tachee';
import { BiCustomize } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';

import {v4 as uuidv4} from 'uuid';
export default function Liste1() {
    const [listees,setlistees]=useState([
        {id:uuidv4(), nom:'consiption',done:false},
        {id:uuidv4(),nom:'analise',done:false},
        {id:uuidv4(),nom:'disign',done:false},
        {id:uuidv4(),nom:'figma',done:false},

    ])
const [task,settask]=useState('');
const addtask=()=>{
    let ntasks=[...listees];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    setlistees(ntasks);
    settask('');
}
 const sup=(idsup)=>{
   let ntache=listees.filter((t)=>{
    return t.id!=idsup
   })
   setlistees(ntache);
 }
  return (
    <div className='bgg'>
      <div className='to_do_list'>  
      <header>&nbsp;<BiCustomize color='white'/>To Do List _App</header>
      
      <form >
       <br/><br/><br/><br/>
        <input type="text"  value={task} onChange={(e)=>{settask(e.target.value)}} className='am' /> &nbsp; &nbsp;
        { <input  type="button" value="+ Nouvelle Tache" onClick={addtask} id='inp2' /> }
        
      </form>
       <br /><br />
      <ul>
      <div className='hedd'> &nbsp; <FaTasks color="white" /> Taches a realiser</div>

        {
            listees.map((t)=>{
                return <li   key={t.id}>
                    <Tachee setlistees={setlistees} id={t.id} listees_done={t.done} delf={()=>sup(t.id)} txt={t.nom} className='list' />
                    </li> 
            })
        }
      </ul>
      <div className='rr'>
    </div>
    </div>
    </div>
  )
}