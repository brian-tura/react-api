import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'

function App() {
  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])

  const fetchActors = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => {
        setActors(res.data)
        console.log(res.data)
      })
  };

  const fetchActresses = () => {
    axios
    .get("https://lanciweb.github.io/demo/api/actresses/")
    .then((res) => {
      setActresses(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    fetchActors()
    fetchActresses()
  }, [])

  const allActors = [...actors, ...actresses]
  console.log(allActors)

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {allActors.map((actor) => {
              return (
                <div key={actor.id} className='card col-4'>
                  <img src={actor.image} alt="" />
                  <h3>{actor.name}</h3>
                  <p>{actor.birth_year} {actor.nationality}</p>
                  <p>{actor.biography}</p>
                  <p>{actor.awards}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
