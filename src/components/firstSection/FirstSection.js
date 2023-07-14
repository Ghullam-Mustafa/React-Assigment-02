import React from 'react'
import img from '../../assets/Image Base.png'


export default function FirstSection() {
    return (
        <div className="container-fluid bg-warning ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h1 className="text-white fw-bolder mb-3">Are you starving?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="card bg-white p-lg-4 p-sm-3">
                            <div className="row mb-3">

                                <div className="col-4">
                                    <button className="btn btn-delivery btn-lg"><i className="bi bi-bicycle mt-2"></i>
                                        Devilary</button>
                                </div>
                                <div className="col-4 text-start">
                                    <button className="btn btn-light btn-pickup btn-lg"><i className="bi bi-bag"></i>
                                        Pickup</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-4">
                                <div className="col-7  d-flex star border-rounded ">

                                    <div className="rounded-start bg-light p-3"><i className="bi bi-geo-alt-fill  "></i></div>
                                    <input type="email" className="form-control bg-light border border-light rounded-end" />

                                </div>
                                <div className="col-4">
                                     {/* <button className="btn btn-warning btn-lg">Find Food</button>  */}
                                    <button   className="btn btn-lg background  text-center text-white ">Find
                                        food</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src={img} alt="Pizza" className="img-fluid w-75 mt-5" />
                    </div>
                </div>
            </div>

        </div>
    )
}
