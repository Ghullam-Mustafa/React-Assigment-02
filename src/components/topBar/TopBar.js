import React from 'react'
import Logo from '../../assets/Logo.png'
export default function TopBar() {
    return (
        <div class="container bg-white p-3">
            <div class="row">
                <div class="col-lg-3  col-sm-3  ">
                    <img src={Logo} class="mt-1" />
                    {/* <!-- <img src="./assets/Mask Group (1).png"  alt="logo"  >
                <img src="./assets/Frame 36 (1).png" class="img-fluid mx-auto " alt="logo" > --> */}
                </div>
                <div class="col-lg-6 remove mt-3">
                    <p><strong>Deliver to :</strong><i class="bi bi-geo-alt-fill icon-location"></i>Current Location <strong>Mohammadpur Bus Stand, Dhaka</strong></p>
                </div>
                <div class="col-lg-3 remove  mt-2">
                    <div>
                        <i class="bi bi-search icon-location mt-2 search"></i> Search Food
                        <button class="btn btn-warning ms-2 text-white"><i class="bi bi-person-fill "></i> Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
