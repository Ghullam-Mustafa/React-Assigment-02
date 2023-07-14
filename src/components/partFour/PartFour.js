import React from 'react'
import PartFourCard from '../partFourCard/PartFourCard'
import img1 from '../../assets/Frame 40.png'
import img2 from '../../assets/Frame 40 (1).png'
import img3 from '../../assets/Frame 40 (2).png'
import img4 from '../../assets/Frame 40 (3).png'
import img5 from '../../assets/Frame 40 (4).png'

export default function PartFour() {
    return (
        <div class="container-fluid mt-5  text-center">
            <div class="row text-center d-flex">
                <h1 class="text-center fw-bold ">Popular items</h1>

                <div class="col-1  d-flex align-items-center justify-content-end">
                    <h1>
                        <i class="bi bi-arrow-left-circle-fill how"></i>
                    </h1>
                </div>
                <PartFourCard src={img1} title="Cheese Burger" location="Burger Arena" price="3.88" />
                <PartFourCard src={img2} title="Toffe’s Cake" location="Top Sticks" price="4.00" />
                <PartFourCard src={img3} title="Dancake" location="Cake World" price="1.99" />
                <PartFourCard src={img4} title="Crispy Sandwitch" location="Fastfood Dine" price="3.00" />
                <PartFourCard src={img5} title="Thai Soup" location="Foody man" price="2.79" />
                <div class="col-lg-1 col-md-6 col-sm-6 d-flex align-items-center  justify-content-start">
                    <h1><i class="bi bi-arrow-right-circle-fill how"></i></h1>
                </div>
            </div>
        </div>
    )
}
