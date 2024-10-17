import React, { useRef } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Test from './components/Test' // Import your Test component
import Test2 from './components/Test2' // Import your Test component
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <div className='antialiased text-gray-700'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
