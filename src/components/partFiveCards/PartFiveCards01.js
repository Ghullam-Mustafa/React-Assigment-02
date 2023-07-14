import React from 'react'

export default function PartFiveCards(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="card border border-0 text-start mx-auto" style={{width: '16rem'}}>
                <img src={props.img1} className="img-fluid" alt="" />
                <div className="card-body ">
                    <div className="d-flex">
                        <img src={props.img2} className="img-fluid" alt="" />
                        <div className="p-2">
                            <h6 className="fw-bold">{props.title} </h6>
                            <h6 className="star"><i className="bi bi-star-fill"></i>{props.ratting}</h6>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-delivery mt-2">Opens tomorrow</button>
                </div>
            </div>
        </div>
    )
}
