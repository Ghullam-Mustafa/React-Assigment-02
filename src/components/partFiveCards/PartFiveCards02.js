import React from 'react'
import Button from '../button/Button'

export default function PartFiveCards(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="card border border-0 text-start mx-auto" style={{ width: '16rem' }}>
                <img src={props.img1} className="img-fluid" alt="" />
                <div className="card-body ">
                    <div className="d-flex">
                        <img src={props.img2} className="img-fluid" alt="" />
                        <div className="p-2">
                            <h6 className="fw-bold">{props.title} </h6>
                            <h6 className="star"><i className="bi bi-star-fill"></i>{props.ratting}</h6>
                        </div>
                    </div>
                    {/* <button class="btn btn-lg btn-delivery-2 mt-2">Opens Now</button> */}
                    <Button title='Open Now' color='btn btn-lg btn-delivery-2 mt-2'/>
                </div>
            </div>
        </div>
    )
}