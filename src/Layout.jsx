import { Outlet } from 'react-router-dom'
import Nav from './Pages/Nav/Nav.jsx'
import Footer from './Pages/Footer/Footer'

export default function Layout() {
    return (
        <div> 
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}