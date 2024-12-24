import React, {useState} from 'react'

export default function Todo() {
const[activity, setActivity]= useState("");
const[listData, setlistData]= useState([]);
function addActivity(){
  if(!activity){
    alert("Add event first");
  }else
  setlistData((listData)=>{
    const updatedList=[...listData,activity]
    console.log(updatedList)
    if(activity==null){
      prompt("Enter the list")
    }
    setActivity('');
    return updatedList
  })
}
function removeActivity(i){
  const updatedListData =  listData.filter((elem, id)=>{
    return i!==id;
  })
  setlistData(updatedListData);
}
function removeAll(){
  setlistData([])
}
  return ( 
    <>
    <div className='container'>
    <div className='header'>TaskMate</div>
    <input type='text' placeholder='Add list' value={activity} 
  onChange={(e)=>setActivity(e.target.value)}/>
 
  
  
 <button id='add1' onClick={addActivity}>Add</button> 
  
  {listData!==[] && listData.map((data, i)=>{
    return(
      <>
      <p key={i}>
  <div className='listData'>{data}</div>
  <div className='btn-position'><button id='remove1' onClick={()=>removeActivity(i)}>Remove</button></div>
  </p>
      </>
    )
  })}
  {listData.length>=1 && <button id='removeall' onClick={removeAll}>Remove All</button>}
</div>
    </>
    )  
}
  
   
  

    