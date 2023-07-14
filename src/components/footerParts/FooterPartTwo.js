import React from 'react'

export default function FooterPartTwo(props) {
    return (
        <div className="col-lg-2 py-3">
            <h6 className="fw-bold">{props.title} </h6>
            <li>{props.h1} </li>
            <li>{props.h2}</li>
            <li>{props.h3}</li>
            <li>{props.h4}</li>
        </div>
    )
}
