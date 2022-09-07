import React from 'react'

function Movies(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p># Hours: {props.hours}</p>
        <p># Minutes: {props.minutes}</p>

    </div>
  )
}

export default Movies