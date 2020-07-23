// write your CatList component here
import React from 'react'

const CatList = props => {
  return (
    <div>
      {props.catPics.map(pic => (
        <img key={pic.id} src={pic.url} alt="cat-pic"/>
      ))}
    </div>
  )
}

export default CatList
