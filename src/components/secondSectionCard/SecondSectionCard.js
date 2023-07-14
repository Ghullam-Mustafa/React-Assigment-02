import React from 'react'

export default function SecondSectionCard(props) {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card mx-auto border border-0 mx-2" style="width: 16rem;">
        <img src={props.src} class=" card-img-top  img-fluid" alt=""/>
            <div class="">
                <div class="card-body mx-0">
                    <div>
                        <h6 class="card-title fw-bold">{props.title}</h6>
                        <a href="#" class="btn btn-delivery">{props.dayremaining}</a>
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}
