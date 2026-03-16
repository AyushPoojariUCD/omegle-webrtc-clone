import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Room = () => {
  
  const [searchParams,setSearchParams] = useSearchParams()

  const name = searchParams.get('name')

  useEffect(() => {

  }, [name])

  return (
    <>
    <div>Room</div>
    <div>
        <p>
            !Hi {name}
        </p>
    </div>
    </>
  )
}

export default Room