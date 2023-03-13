

import { BrowserRouter, Route, Routes, Link, Navigate, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Header from './components/Header'
import useToken from './components/useToken'
import Home from './components/Home'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          
          <>
            <Header token={removeToken}/>
            <Navbar>
            </Navbar>
            <Routes>
              <Route exact path="http://127.0.0.1:5000/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
              <Route exact path = "/profile" element = {<Profile></Profile>}></Route>
              
            </Routes>
          
            
          
            
            
          
          </>
        )}
      </div>
      
    </BrowserRouter>
  );
}

export default App;

