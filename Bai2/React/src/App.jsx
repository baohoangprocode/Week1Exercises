import React from 'react'
import Button from './Component/Button/Button'
import './app.css'

const App = () => {
  return (
    <div className='Box'>
      <Button type='primary'/>
      <Button type='danger'/>
      <Button type='success'/>
    </div>
  )
}

export default App
