import React from 'react'

export default function FooterPartTwo(props) {
    return (
        <div className="col-lg-2 col-sm-12 py-3">
            <li>{props.h1}</li>
            <li>{props.h2} </li>
            <li>{props.h3}</li>
            <li>{props.h4}</li>
            <li>{props.h5}</li>
        </div>
    )
}
