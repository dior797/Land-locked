import { Link } from "react-router-dom";
import '../pages/PageCss/Footer.css'
import Twitter from '../Twitter.png'
import Youtube from '../Youtube.png'
import Instagram from '../Instagram.png'
import Facebook from '../Facebook.png'

const Bottom = () => {
  return (
    <>
      <div className="allTogether">
        <div className="line">
          &nbsp;
        </div>
        <div className="footer-title">
          <div className="foot-name">
            <h1>
              Land-Locked
            </h1>
          </div>
          <div className="nav-footer">
            <Link to="./" className="item1">Home</Link>
            <Link to="./Shop" className="item1">Inventory</Link>
            <Link to="./Ship" className="item1">Donate</Link>
            <Link to="./About" className="item1">About</Link>
            <Link to="./contact" className="item1">Contacts</Link>

          </div>

      <div className="social">
      <a target="_blank" className="alink" href="https://twitter.com/_Land_Locked_"><img src={Twitter} className="Images" alt="Twitter"/></a>
      <a target="_blank" className="alink" href="https://www.youtube.com/channel/UCqtkVpddqyhQrMOJI1A_QVA"><img src={Youtube} className="Images" alt="Youtube"></img></a>
      <a target="_blank" className="alink" href="https://www.instagram.com/landlocked_thriftshop/"><img src={Instagram} className="Images" alt="Instagram"></img></a>
      <a target="_blank" className="alink" href="https://www.facebook.com/profile.php?id=100089280164130&sk=about"><img src={Facebook} className="Images"  alt="Facebook"></img></a>
      </div>
      </div>
      </div>


      <useOutlet />
    </>
  )
};

export default Bottom;