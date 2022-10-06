import React from 'react'
import MainContent from './components/MainContent'
import styled from 'styled-components'
import './App.css'

const AppDiv = styled.div`
width: 100%;
height: 100%

`

function App() {
  return (
    <div>
      <MainContent />
    </div>
  )
}

export default App