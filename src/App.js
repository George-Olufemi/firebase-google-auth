import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { app } from './firebase'

function App() {
  const [userSignedIn, setUserSignedIn] = useState(true);
  app.auth().onAuthStateChanged((user) => {
    if (user) {
      return setUserSignedIn(true);
    }
    setUserSignedIn(false);
  })
  if(userSignedIn === true) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App;