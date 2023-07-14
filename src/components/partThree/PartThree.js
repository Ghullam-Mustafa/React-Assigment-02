import React from 'react'
import Cards from '../cards/Cards'
import img1 from '../../assets/Icon.png'
import img2 from '../../assets/Menu.png'
import img3 from '../../assets/Invoice.png'
import img4 from '../../assets/donut 1.png'
export default function PartThree() {
    return (
        <div className="container-fluid third-part ">
            <div className="container mb-5 ">

                <div className="row text-center">
                    <h3 className="fw-bold text-center how mt-5">How dseoes it work</h3>
                    <Cards src={img1}  title=" Select Location"/>
                    <Cards src={img2}  title=" Chose Order"/>
                    <Cards src={img3}  title=" Pay advanced"/>
                    <Cards src={img4}  title=" Enjoy meals"/>
                </div>
            </div>
        </div>
    )
}
