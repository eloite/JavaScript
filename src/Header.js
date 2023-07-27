import React from 'react'

function Header({title}) {
  return (
    <div style={{
        backgroundColor:"rgb(65, 76, 90)",
        color:"White",
        padding:10
    }}>
        <h2>{title}</h2>
    </div>

  )
}

export default Header