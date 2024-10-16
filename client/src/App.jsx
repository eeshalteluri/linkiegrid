import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/404'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App