import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button className={props.color} >{props.title}</button>
    </div>
  )
}
