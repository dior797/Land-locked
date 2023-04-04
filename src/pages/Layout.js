import { Outlet } from "react-router-dom";
import Top from '../pages/Navbar.js'
import Footer from "../pages/Footer";



const Layout = () => {
  return (
    <>
      <Top />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout;