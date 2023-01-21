import './PageCss/Home.css'
import { Link } from "react-router-dom";
import Vintage from '../thriftstore.jpg'
const Home = () => {
  return (
    <>

      <div className='Home-all'>
        <img src={Vintage} id='log' width='100%' height="auto" alt='Clothes'></img>
        <div className='titlediv'>
          <p className='title'><b>Shop Smart, Shop Thrift!</b></p>
          <p className='desc'><b>Unlock your style at Land-Locked Thrift Shop</b></p>
          <Link to="./shop"><button className='titlebut'>Explore</button></Link>
        </div>
      </div>
      <div className='All-Forms'>
        <div className='Home'>
          <div className='Home-Title'>Subscribe to Our Newsletter!</div>
          <p id='Paragraph'>Our newsletter is a great way to stay up-to-date with the latest news, updates, and information from our company. We send out regular updates on new products, promotions, and other important news.If you have any questions or issues, please feel free to contact us.
          </p>
          <form class="Home-form">
            <input
              class="Home-Button"
              type="email"
              placeholder="Enter a valid email address"
              name="Email" required />
            <button class="Home-Button-Submit" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>

  )
};

export default Home;