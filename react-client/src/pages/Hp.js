import React from 'react'
import "./Hp.css"
import { useNavigate } from 'react-router-dom'

import axios from "axios"


function Home(props) {
const navigate = useNavigate()
const remove = (id) =>{
  console.log(props.data);

  axios.delete(`http://localhost:7000/api/work/${id}`).then((result)=>console.log(result,"deleted")).catch(err=>console.log(err))
}
      

  console.log(props.data)
  return (
    <div className='black'>
      {props.data.map((e) => {
        return (<div class="card">
          
          {<img className='img-card' src={e.imageUrl}></img>}
          <p class="heading">{e.name}</p>
          <button onClick={()=>{remove(e._id); props.trig(!props.trigger)}}>Delete</button>
          <button onClick={()=>{
          props.stal(e)
            navigate("/update")
          }}>Update</button>
        </div>)
      })
      }
    </div>
  )
}

export default Home