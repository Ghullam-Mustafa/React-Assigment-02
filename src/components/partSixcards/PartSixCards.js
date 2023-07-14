import React from 'react'

export default function PartSixCards(props) {
    return (
        <div className="col-lg-2 col-md-6 col-sm-12 mx-auto  mt-3">
            <img src={props.src} className="img-fluid" alt="" />
            <h6 className="fw-bold text-center mt-2">{props.title} </h6>
        </div>
    )
}
