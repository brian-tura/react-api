import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'

function App() {
  const [actors, setActors] = useState([])

  const fetchActors = () => {
    axios
    .get("https://lanciweb.github.io/demo/api/actresses/")
    .then((res) => {
      setActors(res.data)
      console.log(res.data)
    })
  };
  
  useEffect(() => {
    fetchActors()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
