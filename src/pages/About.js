import '../pages/PageCss/About.css'
import AboutImg from '../homeless.avif'
import AboutImg2 from '../about2.avif'


const About = () => {
  return (
    <>
      <div className='titleAbt'>About Land-Locked</div>
      <div className='Welcome'>Welcome to Land-Locked! We are dedicated to providing affordable and stylish clothing, accessories, and home goods to our community. We aim to promote sustainability by giving new life to gently used items and reducing the amount of waste in landfills.</div>
      <div className='All'>
        <img src={AboutImg} className="Image1" alt="Image1"
          width="100%" height="auto"></img>
        <p className='text1'><b>Our mission</b> at Land-Locked Thrift Store is to provide high-quality, gently used clothing, household items, and furniture at affordable prices to our community. By doing so,<b> we strive to be a resource for those in need</b>, help reduce waste and promote sustainable living, and support local charities and non-profit organizations through donations and partnerships. We are committed to providing a welcoming and inclusive shopping experience for all, and fostering a culture of kindness and generosity in everything we do.
        </p>

        <p className='text1'>Here at <i>Land-Locked</i>, we believe in helping our community, and with that, we donate <b>10% of our profits</b> to <b>charities</b> that help with homeless shelters and give food and clothes to people in need. We also donate clothes to shelters that don’t get sold within a month so that they do not go to waste and can be put to use. Our one goal that we strive for here at Land-Locked is to help everyone in our community find affordable clothes that are still in style. At Land-Locked we do this to help the community be a better place and also <b> keep our earth a cleaner and more sustainable place</b>.
        </p>
        <div className='meowww'>
        <img src={AboutImg2} className="Image1" alt='Image1' width="100%" height="auto"></img>
      </div>
      </div>
      <div className='part2'>
        <div className='Our'>How are we diffrent?</div>
        <div className='OurSum'><b>We have a wide variety of items</b>, including vintage, and designer finds, as well as everyday essentials. Our selection is constantly changing, so there's always something new to discover. We carefully inspect each item before putting it out for sale, so you can shop with confidence.
          <br />
          
          In addition to our commitment to sustainability, we also <b>Strive to give back to our community</b>. A portion of our profits goes towards supporting local charities and non-profit organizations.</div>
      </div>

    </>

  )
};


export default About;