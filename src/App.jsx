import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tracking from './Pages/Tracking'
import Cargo from './Pages/Cargo'
import List from './Pages/List'
import Historial from './Pages/Historial'
import Notifications from './Pages/Notifications'


const App = () => {
  return (
    <BrowserRouter >

      <div className='flex flex-row gap-2'>
        {/* Sidebar */}

        <div className='w-1/5'>
        <Sidebar />

        </div>

        {/* Defining Routes */}
        <div className='w-full'>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/tracking' element={<Tracking />}></Route>
          <Route path='/cargo' element={<Cargo />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/historial' element={<Historial />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
        </Routes>

        </div>

        {/* Pages */}





      </div>





    </BrowserRouter>
  )
}

export default App