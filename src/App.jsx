import React, { Profiler } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Connection from './components/Connections'
import Connections from './components/Connections'
import Requests from './components/Requests'
import Premium from './components/Premium'


const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
       <Routes>
        <Route path='/' element={<Body/>}>

          <Route path="/" element={<Feed/>} />
          

        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />

       
        <Route path='/connections' element={<Connections/>} />


        <Route path='/requests' element={<Requests/>} />

        <Route path='/premium' element={<Premium/>} />

         


        </Route>
       </Routes>
      </BrowserRouter>

      </Provider>

    </>
  )
}

export default App



// git remote add origin https://github.com/Naman-NITA/Tinder-front.git
// git branch -M main
// git push -u origin main