import './PageCss/Home.css'
import { Link } from "react-router-dom";
import Vintage1 from '../pages/Images/HomeImg1.jpg';
import Vintage2 from '../pages/Images/HomeImg2.jpg';
import Vintage3 from '../pages/Images/HomeImg3.jpg';
import Heart from '../pages/Images/heart.jpg'
import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import DarkMode from '../components/DarkMode';

function Home() {

  function subover() {
    document.getElementById('opback').style.display = 'none';
    document.getElementsByTagName('body')[0].style.height = '';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('opback').style.display = 'block';
      document.getElementsByTagName('body')[0].style.height = '100%';
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }, 2800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className='Home-all'>
        <div className='caroucel'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="H1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="H2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id='H3'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='titlediv'>
          <p className='title'><b>Shop Smart, Shop Thrift!</b></p>
          <p className='desc'><b>Unlock your style at Land-Locked Thrift Shop</b></p>
          <Link to="./shop"><button className='titlebut'>Explore</button></Link>
        </div>
      </div>
      <div id='opback'>
        <div className='All-Forms'>
          <button onClick={() => subover()} id='xbut'><b>X</b></button>
          <div className='Home'>
            <div className='Home-Title'>Subscribe to Our Newsletter!</div>
            <img src={Heart} alt="Heart" id="Heart" />
            <p id='Paragraph'>Our newsletter is a great way to stay up-to-date with the latest news, updates, and information from our company. We send out regular updates on new products, promotions, and other important news.If you have any questions or issues, please feel free to contact us.
            </p>
            <form className="Home-form">
              <input
                className="Home-Button"
                type="email"
                placeholder="Enter a valid email address"
                name="Email" required />
              <button className="Home-Button-Submit formb" id="ButHome" onClick={() => subover()} type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;