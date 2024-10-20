import axios from 'axios'
import React from 'react'
import { BACKEND_URL } from '../config'

const Dashboard = () => {
  const [user, setUser] = React.useState([])

  const fetchData = async () => {
    const userData = await axios.get(`${BACKEND_URL}/dashboard`, {withCredentials: true})

    if (userData.data.user) {
      setUser(userData.data.user)
    }
    
    
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.firstName}</p>
    </div>
  )
}

export default Dashboard