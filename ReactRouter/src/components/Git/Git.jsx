import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Git() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-white text-black p-4 text-3xl'>Github followers: {1500}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Git

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Prshnt6271')
    return response.json()
}