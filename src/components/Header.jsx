import React from 'react'
export default function Header(props)
{ 
  const {index, title, description} = props
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}