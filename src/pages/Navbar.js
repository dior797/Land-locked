import '../pages/PageCss/Navbar.css'
import { Link } from "react-router-dom";
import DarkMode from '../components/DarkMode';
const top = () => {
  return (
    <>
      <div className='Subscribe'><a href="" className='Subscribe'><u id='color-Nav'>Subscribe Now!</u></a> And get 80% off your next in store purchase</div>
      <div className='all'>
        <Link to="/"><img id="ImageL"></img></Link>
        <Link to="./" className='nav'><b>Home</b></Link>
        <Link to="./shop" className='nav'><b>Inventory</b></Link>
        <Link to="./ship" className='nav'><b>Donate</b></Link>
        <Link to="./about" className='nav'><b>About</b></Link>
        <Link to="./contact" className='nav'><b>Contacts</b></Link>
<DarkMode />
      </div>
    </>
  )
};

export default top;