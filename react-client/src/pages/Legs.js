import React from 'react'

function Legs(props) {
  return (
    <div className='black'>
      {props.data.map((e) => {
        return (<div class="card">
          <p class="heading">
            {e.name}
          </p>
          {<img className='img-card' src={e.imageUrl}></img>}
        </div>)
      })
      }
    </div>  )
}

export default Legs