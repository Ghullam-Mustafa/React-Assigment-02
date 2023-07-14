import React from 'react'

export default function PartFourCard(props) {
  return (
    <div class="col-lg-2 col-md-4 col-sm-12 mt-5  ">
    <div class="card  border border-0 mx-auto text-start" style = {{width: '12rem'}}>
        <img src={props.src} class="card-img-end img-fluid mt-4 " alt="" />
        <div class="card-body">
            <h6 class="fw-bold">{props.title} </h6>
            <h6 class="how"><i class="bi bi-geo-alt-fill "></i>{props.location}</h6>
            <h6 class="fw-bold">${props.price} </h6>
            <button type="button" class="btn btn-lg background  text-center text-white ">Order Now</button>
        </div>
    </div>
</div>
  )
}
