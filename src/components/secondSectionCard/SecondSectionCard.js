import React from 'react'
export default function SecondSectionCard(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card mx-auto border border-0 mx-2" style={{width: '16rem'}}>
                <img src={props.src} className=" card-img-top  img-fluid " alt="" />
                <div className="">
                    <div className="card-body mx-0">
                        <div>
                            <h6 className="card-title fw-bold">{props.title}</h6>
                            <a href="#" className="btn btn-delivery">{props.dayremaining}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
