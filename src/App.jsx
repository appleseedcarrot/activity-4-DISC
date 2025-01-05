import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css'

import Layout from './Layout'
import Explore from './Pages/Explore/Explore'
import Homepage from './Pages/Homepage/Homepage'
import Users from './Pages/Users/Users'
import User from './Pages/Users/User'
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp'
import CreatePost from './Pages/Explore/CreatePost'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';

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
          <Route path="update-profile" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
