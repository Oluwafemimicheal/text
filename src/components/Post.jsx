import React from 'react'

const Post = () => {
  const peoples = ["tobi", "tope", "ayo", "toluwani"]

  return (
    <div>
      <ul>
        {peoples.map((people, index)=> {
          return <li key={index}>{people}</li>
        })}
      </ul>
    </div>
  )
}

export default Post
