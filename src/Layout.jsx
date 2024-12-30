import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import Footer from './Components/Footer/Footer.jsx'

export default function Layout() {
    return (
        <div> 
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}