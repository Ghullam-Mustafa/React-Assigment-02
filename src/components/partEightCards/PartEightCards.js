import React from 'react'

export default function parteghtCard(props) {
  return (
    <div class="row mt-5 border wer border-2">
      {/* <!-- <div class="card border border-0 mt-4  "> --> */}
      <div class="col-lg-4 col-md-12 mb-3">
        <div class="card-body ">
          <div class="mt-5 ">
            <h2 class="card-title"> {props.h1} <span class="crispy">{props.h2}</span> </h2>
            <p class="card-text mt-5">{props.h3} </p>
          </div>
          <div class="mt-lg-5 mt-sm-3 pt-5 ">
            <button class="btn btn-lg btn-8 text-white px-5 ">PROCEED TO ORDER </button>
          </div>
        </div>
      </div>
      {/* <!-- </div> --> */}
      <div class="col-lg-8 col-md-12 p-3">
        <img src={props.src} class="img-fluid rounded mx-auto" alt="" />
      </div>
    </div>
  )
}
