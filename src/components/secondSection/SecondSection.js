import React from 'react'
import SecondSectionCard from '../secondSectionCard/SecondSectionCard';
import img1 from '../../assets/Food Photo.png';
import img2 from '../../assets/Food Photo (1).png';
import img3 from '../../assets/Food Photo (2).png';
import img4 from '../../assets/Food Photo (3).png';
export default function SecondSection(props) {
  return (
    <div class="container-fluid my-5">
    <div class="container">
        <div class="row">
           <SecondSectionCard src={img1}  title="Greys Vage" dayremaining="6 Days Remaining"/>
           <SecondSectionCard src={img2}  title="Greys Vage" dayremaining="6 Days Remaining"/>
           <SecondSectionCard src={img3}  title="Greys Vage" dayremaining="6 Days Remaining"/>
           <SecondSectionCard src={img4}  title="Greys Vage" dayremaining="6 Days Remaining"/> 
        </div>
    </div>
</div>
  )
}
