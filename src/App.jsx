import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CreateRoom from './components/CreateRoom'
import Room from './components/Room'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CreateRoom}/>   
          <Route path="/room/:roomID" component={Room}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App
