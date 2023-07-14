import React from 'react'
import PartFiveCards02 from '../partFiveCards/PartFiveCards02'
import PartFiveCards01 from '../partFiveCards/PartFiveCards01'
import c11 from '../../assets/Food Photo (4).png'
import c12 from '../../assets/Image (2).png'
import c21 from '../../assets/Food Photo (5).png'
import c22 from '../../assets/Image (3).png'
import c31 from '../../assets/Food Photo (6).png'
import c32 from '../../assets/Image (4).png'
import c41 from '../../assets/Food Photo (7).png'
import c42 from '../../assets/Image (5).png'
import c51 from '../../assets/Food Photo (8).png'
import c52 from '../../assets/Image (6).png'
import c61 from '../../assets/Food Photo (9).png'
import c62 from '../../assets/Image (7).png'
import c71 from '../../assets/Food Photo (10).png'
import c72 from '../../assets/Image (8).png'
import c81 from '../../assets/Food Photo (11).png'
import c82 from '../../assets/Image (9).png'


export default function PartFive(props) {
    return (
        <div className="container my-5 ">
            <div className="row  mt-4">
                <h1 className="fw-bold text-center mt-5">Featured Restaurants</h1>
                <PartFiveCards01 img1={c11} img2={c12} title="Foodworld" ratting="46"/>
                <PartFiveCards01 img1={c21} img2={c22} title="Pizzahub" ratting="40"/>
                <PartFiveCards02 img1={c31} img2={c32}  title="Donuts hut" ratting="46"/>
                <PartFiveCards02 img1={c41} img2={c42}  title="Donuts hut" ratting="46"/>
                <PartFiveCards02 img1={c51} img2={c52}  title="Ruby Tuesday" ratting="46"/>
                <PartFiveCards02 img1={c61} img2={c62}  title="Kuakata Fried Chicken" ratting="46"/>
                <PartFiveCards02 img1={c71} img2={c72}  title="Red Square" ratting="46"/>
                <PartFiveCards02 img1={c81} img2={c82}  title="Taco Bell" ratting="46"/>

                <div className="text-center mt-5">
                    <button className="btn btn-lg text-center view px-5 text-white "> View </button>
                </div>
            </div>
        </div>
    )
}
