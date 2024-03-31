import React from 'react';
import '../Styles/FooterStyles.css';
import { Link } from 'react-router-dom';
import ames from '../Images/ames.png';
import pay from '../Images/pay.png';
import insta from '../Images/insta.png';
import linkdin from '../Images/linkdin.png';
import usa from '../Images/usa.png';
import star from '../Images/star.png';

function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>BE THE FIRST TO KNOW</h3>
                    <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px" }}><Link style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "lighter", color: "white", textDecoration: "none" }}>Sing up</Link> for the updates from mettā muse.</p>
                    <input type='email' placeholder='Enter your e-mail.....' style={{ border: "none", height: "40px", width: "300px" }} required />
                    <input type='button' style={{ backgroundColor: "black", cursor: "pointer", outline: "none", border: "2px solid grey", color: "gray", height: "50px", margin: "10px", textDecoration: "none", width: "200px", borderRadius: "10px" }} value={'SUBSCRIBE'} className='btn' />SUBSCRIBE
                </div>
                <div>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>CONTACT US</h3>
                    <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>+44 221 133 5360</p>
                    <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>customercare@mettamuse.com</p>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>CURRENCY</h3>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px",marginTop:"20px"}}><img src={usa} alt='usa' style={{height:"50px",widows:"50px",borderRadius:"60%"}} /><img src={star} alt='usa' style={{height:"10px",widows:"10px",borderRadius:"60%",margin:"10px"}} className='us' />USA</h3>
                    <p style={{ fontFamily: "'Trebuchet MS', Helvetica, sans-serif", color: "white", fontSize: "14px" }}>Transaction will be completed in Erous and a currency reference is available on hover.</p>
                </div>
            </div>
            <hr style={{ margin: "0px 40px 0px 40px", color: "white", border: "1px solid white" }}></hr>
            <div className='subFooter'>
                <div>
                    <h3 style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>mettā muse</h3>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>About Us</p>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Stories</p>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Artisans</p>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Boutiques</p>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Cotact Us</p>
                    <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>EU Compliances Docs</p>
                </div>


                <div className="container1">
                    <div>
                    <h3 style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px"}}>QUICK LINKS</h3>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Orders & Shipping</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Join/Login as a Seller</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Payment & Pricing</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Return & Refunds</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>FAQs</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Privacy Policy</p>
                            <p style={{ cursor: "pointer", fontFamily: "sans-serif", color: "white", fontSize: "16px" }}>Terms & Conditions</p>
                    </div>
                    </div>
                    <div>
                        <div>
                        <h3 style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px"}}>FOLLOW US</h3>  
                        <img src={insta} alt='insta' style={{color:"white",height:"70px",width:"70px",borderRadius:"50%",margin:"20px 0px 20px 0px",cursor:"pointer"}} />
                        <img src={linkdin} alt='linkdin' style={{color:"white",height:"70px",width:"70px",borderRadius:"50%",margin:"20px",cursor:"pointer"}} /> 
                        </div>
                        <div className='payments'>
                            <h3 style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px"}}>mettā muse <span>ACCEPTS</span></h3>   
                        </div>
                        <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg?sanitize=true' alt='gpay' className='pay'/>
                        <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg?sanitize=true' alt='gpay' className='pay' />
                        <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg?sanitize=true' alt='gpay' className='pay' />
                        <img src={ames} alt='gpay' className='pay' />
                        <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg?sanitize=true' alt='gpay' className='pay' />
                        <img src={pay} alt='gpay'  style={{height:"33px",width:"60px",cursor:"pointer",borderRadius:"5px",marginBottom:"20px"}} />
                    </div>
            </div>
            <p className="copyright">Copyright ©2023 mettamuse. All rights reserved.</p>
        </footer>
    )
}

export default Footer;