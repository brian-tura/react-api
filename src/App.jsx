import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [actors, setActors] = useState([])

  const fetchActors = () => {
    axios
    .get("https://lanciweb.github.io/demo/api/actresses/")
    .then((res) => setActors(res.data))
  };
  
  useEffect(() => {
    fetchActors()
    console.log(actors)
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
