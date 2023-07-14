import React from 'react'

export default function Cards(props) {
    return (
            <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="card mx-auto bg-transparent border border-0 text-center" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <img src={props.src} className=" " alt="" />
                        <div >

                            <div className="text-center">
                                <h6 className="card-title fw-bold">{props.title}</h6>
                                <p>Choose the location where your food will be delivered.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}
