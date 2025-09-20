import React, { useEffect } from 'react'
const Home = () => {
  const getUser=()=>{
    fetch("/api/user")
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
  useEffect(()=>{
    getUser()
  },[])
  return <div>home</div>
}

export default Home
