import React from 'react'
import PartSixCards from '../partSixcards/PartSixCards'
import img1 from '../../assets/Food Photo (12).png'
import img2 from '../../assets/Food Photo (13).png'
import img3 from '../../assets/Food Photo (14).png'
import img4 from '../../assets/Food Photo (15).png'
import img5 from '../../assets/Food Photo (16).png'
import img6 from '../../assets/Food Photo (17).png'

export default function PartSix() {
    return (
        <div className="container-fluid p-5" style={{background: '#FEFAF1'}}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h3 className="fw-bold text-center">Search by Food</h3>
                    </div>
                    <div className="col-9 text-end mt-2 ">

                        <p className="how mb-0 "> View All
                            <i className="bi bi-caret-right-fill"></i>
                            <i className="bi bi-arrow-left-circle-fill fs-1 how"></i>
                            <i className="bi bi-arrow-right-circle-fill fs-1 how"></i>
                        </p>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <PartSixCards src={img1} title="Pizza" />
                    <PartSixCards src={img2} title="Burger" />
                    <PartSixCards src={img3} title="Noodles" />
                    <PartSixCards src={img4} title="Sub-sandiwch" />
                    <PartSixCards src={img5} title="Chowmein" />
                    <PartSixCards src={img6} title="Steak" />

                </div>
            </div>
        </div>
    )
}
