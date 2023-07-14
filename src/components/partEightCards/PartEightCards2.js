import React from 'react'
import img from '../../assets/Image (11).png'

export default function PartEightCards2() {
  return (
    <div class="row mt-5 border wer border-2">
    {/* <!-- <div class="card border border-0 mt-4  "> --> */}
    <div class="col-lg-8 col-md-12 p-3">
        <img src={img} class="img-fluid rounded mx-auto" alt=""/>
    </div>
    <div class="col-lg-4 col-md-12 mb-3">
        <div class="card-body">
            <div class="mt-3">
                <h2 class="card-title">Celebrate parties
                    with Fried Chicken<span class="crispy">Fried Chicken</span> </h2>
                <p class="card-text mt-5">Get the best fried chicken smeared with a lip smacking lemon chili
                    flavor. Check out
                    best deals for fried chicken.</p>
            </div>
            <div class="mt-lg-5 mt-sm-3 pt-5 ">
                <button class="btn btn-lg btn-8 text-white px-5 ">PROCEED TO ORDER </button>
            </div>
        </div>
    </div>
    {/* <!-- </div> --> */}

</div>
  )
}
