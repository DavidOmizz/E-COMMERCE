import React from 'react'
import Counter from './components/Counter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Profile from './pages/Profile'
import Color from './pages/Color'
import { useSelector } from 'react-redux'


function App1() {
  const colorObj = useSelector(store=>store.myColor.color)

  const myStyle = {
    backgroundColor: colorObj,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }
  return (
    <div style={myStyle}>
      <Counter/>
      <Profile/>
      <Color/>
    </div>
  )
}

export default App1