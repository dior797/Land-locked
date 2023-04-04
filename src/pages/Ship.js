import Donate from '../pages/Images/donatekid.jpg'
import '../pages/PageCss/donate.css'
import DarkMode from '../components/DarkMode';



const Ship = () => {
  return (
    <>
    <div className='everything'>
      <div className='Don-All'>
        <img src={Donate} id="Don-Img" width="85%" height="auto" alt='Helpfull'></img>
        <p className='img-txt'>Donate Now</p>
      </div>
      <div className="line">
        &nbsp;
      </div>
      <div className='Don-Bef'>
        <div className='bef-Title'>What we do:</div>
        <br></br>
        <ul>
          <div className='summary-1'>We have a team who sort through donated items to determine their quality and suitability for sale. They may check for stains, tears, missing buttons or other damage, as well as whether the item is in working condition (e.g. electronic items). They may also check for any items that are not suitable for resale, such as items that are dirty, broken, or unsafe. We also check for items that are illegal to sell, such as stolen items or counterfeit goods.
          </div>
        </ul>
      </div>
      <div className='Don-Bef'>
        <br />
        <div className='bef-Title'>Before Donating:</div>
        <br></br>
        <ul>
          <li className='Listt'>Make sure the items you wish to donate are in good condition and clean.</li>
          <li className='Listt'>If possible, drop off your donations during regular business hours.</li>
          <li className='Listt'>Consider attaching a list of the items you are donating to the bag or box for easy inventorying.</li>
          <li className='Listt'>If you are donating furniture, make sure it is assembled and in good condition.</li>
          <li className='Listt'>If not able to donate during the store hours please leave the donation in our donation bin located in the back.</li>
        </ul>
        <div className='bef-Title'>Reselling:</div>
        <br></br>
        <ul>
          <div className='summary-1'>
            Additionally, we have a "buy-outright" program where we pay cash for items that are in good condition and in demand. This may be a good option for those looking to sell items quickly or in bulk.

          </div>
        </ul>
      </div>
      </div>
    </>

  )
};
export default Ship;