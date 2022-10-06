import React, { useEffect } from 'react'

function MainContent() {

  useEffect(() => {
    fetch('/blogs')
    .then(r => {
      if (r.ok){
        r.json().then(parsedR => console.log(parsedR))
      }else {
        r.json().then(err => console.log(err))
      }
    })
  })
  return (
    <div>
    <p> hi</p>
    </div>
  )
}

export default MainContent