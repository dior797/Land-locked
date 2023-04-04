import '../pages/PageCss/contact.css'
import Clock from '../pages/Icons/Clock.png'
import Phone from '../pages/Icons/Phone.png'
import Email from '../pages/Icons/Email.png'
import Location from '../pages/Icons/location.png'
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef } from 'react';
import DarkMode from '../components/DarkMode';


const Contact = () => {
    const captchaRef = useRef(null)

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
                        <form className="register-form">
                            <input
                                id="Your-Name"
                                className="form-Button"
                                type="text"
                                placeholder="Your name"
                                name="YourName" required />
                            <input
                                id="Phone-Number"
                                className="form-Button"
                                type="tel"
                                placeholder="(000)-000-000"
                                name="PhoneNumber"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            <input
                                id="email"
                                className="form-Button"
                                type="email"
                                placeholder="Email"
                                name="Mail" required />
                            <input
                                id="txt-box"
                                className="form-Button"
                                type="text"
                                placeholder="Message"
                                name="txt-box" required />


                            <div className="captcha">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    ref={captchaRef} />
                            </div>
                            <button className="form-Button formb" type="submit">
                                Send
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}


export default Contact;