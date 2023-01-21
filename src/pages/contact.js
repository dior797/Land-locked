import '../pages/PageCss/contact.css'
import Clock from '../Clock.png'
import Phone from '../Phone.png'
import Email from '../Email.png'
import Location from '../location.png'



const Contact = () => {
    function grabButton() {
        alert("hello")
    }
    return (
        <>

            <div className='contact-all'>
                <div className='Information-All'>
                    <div className='Info-Title'>Information</div>
                    <div className='Info-Summary'>Here at Land-Locked we are committed to giving you our best work possible. We would appreciate any feedback to help improve our store. If you need any info you can contact us in the field provided. We can also provide you with any information or updates on our inventory and deals.</div>
                    <br />
                    <div className='Info-Contact'>
                        <ul className='Icons'>
                            <div className="what"><img src={Location} className='Icon-Item' alt='Location'></img><a href="https://www.google.com/maps/place/West-MEC+Central+Campus/@33.535945,-112.295028,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4104080e38d9:0x1fbd2919e78fa444!8m2!3d33.5359405!4d-112.2928393">6997 N Glen Harbor Blvd, Glendale, AZ 85307</a></div>
                            <div className="what"><img src={Phone} className='Icon-Item' alt='Phone'></img><a href="tel:(623) 910-5216">(623)-910-5216</a></div>
                            <div className="what"><img src={Clock} className='Icon-Item' alt='Clock'></img>Mon - Sun: 6am - 10pm</div>
                            <div className="what"><img src={Email} className='Icon-Item' alt='Email'></img><a href="mailto:Landlockedthriftshop@gmail.com">Landlockedthriftshop@Gmail.com</a></div>
                        </ul>
                    </div>
                </div>
                <div className='Contact-All'>
                    <div className='Con-Title'>Contact Us</div>
                    <div className='Con-Forms'>
                        <form class="register-form">
                            <input
                                id="Your-Name"
                                class="form-Button"
                                type="text"
                                placeholder="Your name"
                                name="YourName" required />
                            <input
                                id="Phone-Number"
                                class="form-Button"
                                type="tel"
                                placeholder="(000)-000-000"
                                name="PhoneNumber"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            <input
                                id="email"
                                class="form-Button"
                                type="email"
                                placeholder="Email"
                                name="email" required />
                            <input
                                id="txt-box"
                                class="form-Button"
                                type="text"
                                placeholder="Message"
                                name="email" required />
                            <button class="form-Button" type="submit" onSubmit={() => grabButton()}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}


export default Contact;