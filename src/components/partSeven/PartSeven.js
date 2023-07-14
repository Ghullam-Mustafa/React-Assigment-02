import React from 'react'
import img1 from '../../assets/Card.png'
import img2 from '../../assets/App Download.png'

export default function PartSeven() {
  return (
    <div>
    <div class="container-fluid mobile text-center">
        <div class="row">
            <div class="col-12 mt-5">
                <img src={img1} class="img-fluid" alt=""/>
            </div>
        </div>
    </div>
    <div class="container-fluid mobile">
        <div class="row">
            <div class="col-12">
                <img src={img2} class="img-fluid" alt=""/>
            </div>
        </div>
    </div></div>
  )
}
