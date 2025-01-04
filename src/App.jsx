import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css'

import Layout from './Layout.jsx'
import Explore from './Components/Explore/Explore.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import Users from './Components/Users/Users.jsx'
import User from './Components/Users/User.jsx'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.jsx'
import CreatePost from './Components/Explore/CreatePost.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userID" element={<User />} />
          <Route path="signin" element={<SignInSignUp />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
