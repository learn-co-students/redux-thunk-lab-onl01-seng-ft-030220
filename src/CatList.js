import React from 'react'

export default function CatList(props) {
  return (
    <div>
      <ul>
        {props.catPics.map(pic => (
          <li key={pic.id}><img src={pic.url} /></li>
        ))}
      </ul>
    </div>
  )
}