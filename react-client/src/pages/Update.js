import React from 'react'
import './Update.css'
import {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'




function Update(props) {
    console.log(props.update);
  const {_id,name,description,categories,imageUrl} = props.update


  const [names,setNames]= useState("")
  const [descriptions,setDescriptions]= useState("")
  const [imageUrls,setImageUrls]= useState("")
  const [categoriess,setCategories] = useState("")

console.log(names);
  useEffect(()=>{
  setNames(name)
  setDescriptions(description)
  setImageUrls(imageUrl)
  setCategories(categories)
  
  },[])
const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    console.log("hiii");
  console.log( {
    name:names,
   description:descriptions,
   imageUrl:imageUrls,
   categories:categoriess
   }); 
    axios.put(`http://localhost:7000/api/work/${_id}`,{
   name:names,
  description:descriptions,
  imageUrl:imageUrls,
  categories:categoriess
  }).then((result)=>{ 
  console.log(result)
  props.setTrig(!props.trig)
 result.data&& navigate("/")  
    }).catch(err=>console.log(err))

}
  
  return ( 
  
<form action="" className="container"  onSubmit={(e)=>handleClick(e)}>

  <div class="input-container">
      <div class="input-content">
          <div class="input-dist">
              <div class="input-type">
                  <input placeholder="Name" 
                
                     id="outlined-required"
                    
                     label="name"
                     defaultValue={name}
                     onChange={(e)=>setNames(e.target.value)}
                     />  
                  <input placeholder="Description" 
                  id="outlined-required"
                  label="Description"
                  defaultValue={description}
                  onChange={(e)=>setDescriptions(e.target.value)}
                  />
                  <input placeholder="Categories" 
                  id="outlined-required"
                  label="Categories"
                  defaultValue={categories}
                  onChange={(e)=>setCategories(e.target.value)}
                  />  
                  <input placeholder="Image Url" 
                  id="outlined-required"
                  label="Image Url"
                  style={{backgroundColor:"white"}}
                  defaultValue={imageUrl}
                  onChange={(e)=>setImageUrls(e.target.value)}
                  />  
              </div>
          </div>
      </div>
<button type='submit'>
Submit
</button>
  </div>
  
</form>
  )
 
}

export default Update