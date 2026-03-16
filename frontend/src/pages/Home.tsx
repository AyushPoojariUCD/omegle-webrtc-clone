import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [name,setName] = useState("");

  return (
    <>
    <div>Home</div>
    <input onChange={(e) => {
      console.log(e.target.value)
      setName(e.target.value)
    }}>
    </input>
    <p>
      {name}
    </p>
    <Link to = {`/room/?name=${name}`}>Join
    </Link>
    </>
  )
}

export default Home