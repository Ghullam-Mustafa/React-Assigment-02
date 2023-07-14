import React from 'react'
import FooterPartOne from '../footerParts/FooterPartOne'
import FooterPartTwo from '../footerParts/FooterPartTwo'

export default function Footer() {
    return (

        <footer className="footer py-5">
            <div className="container ">
                <div className="row text-white last ">
                    <h6 className="fw-bold">Our top cities</h6>
                    <FooterPartOne h1="San Francisco" h2="Miami" h3="San Diego" h4="East Bay" h5="Long Beach" />
                    <FooterPartOne h1="Los Angeles" h2="Washington DC" h3="Seattle" h4="Portland" h5="Nashville" />
                    <FooterPartOne h1="New York City" h2="Orange County" h3="Atlanta" h4="Charlotte" h5="Denver" />
                    <FooterPartOne h1="Chicago" h2="Phoenix" h3="Las Vegas" h4="Sacramento" h5="Oklahoma City" />
                    <FooterPartOne h1="Columbus" h2="New Mexico" h3="Albuquerque" h4="Sacramento" h5="New Orleans" />
                </div>
                <hr/>
                {/* Footer part two */}
                <div className="row text-white last d-flex  ">
                    <FooterPartTwo title="Company" h1="About us" h2="Team" h3="Careers" h4="Blog" />
                    <FooterPartTwo title="Contact" h1="Help & Support" h2="Partner with us " h3="Ride with us" />
                    <FooterPartTwo title="Legal" h1="Terms & Conditions" h2="Refund & Cancellation" h3="Privacy Policy" h4="Cookie Policy" />

                       
                  

                        <div className="col-lg-6 col-sm-6 px-5  text-center">
                            <div className="row"></div>
                            <h6 className="text-secondary">Follow Us</h6>
                            <h6 className="py-3">
                                <i className="bi bi-instagram li p-3 text-secondary"></i>
                                <i className="bi bi-facebook li  p-3 text-secondary"></i>
                                <i className="bi bi-twitter li  p-3 text-secondary"></i>
                            </h6>
                            <h6 className="text-white">Receive exclusive offers in your mailbox</h6>
                            <div className=" d-flex">
                                <input className=" form-control bg-secondary my-3 mx-2" type="text" />
                                <button className="btn btn-delivery btn-8 text-white my-3 mx-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                         <hr className="text-white"/>
                    <div className="text-white d-flex last gap-5">
                            <h6>All rights Reserved copyright www.techloset.com by Naveed Sarwer</h6>
                            <h6>Made with <i className="bi bi-heart-fill crispy"></i> by Ghullam Mustafa</h6>
                    </div>
                </div>
            
         </footer>
    )
}
