import React from 'react'
import PartEightCards from '../partEightCards/PartEightCards'
import img1 from '../../assets/Image (10).png'
import PartEightCards2 from '../partEightCards/PartEightCards2'
import img3 from '../../assets/Image (12).png'

export default function PartEight() {
    return (
        <div class="container-fluid">
            <div class="container">
                <PartEightCards h1="Best deals" h2="Crispy Sandwiches" h3="Enjoy the large size of sandwiches. Complete perfect slice of sandwiches." src={img1} />
                <PartEightCards2/>
                <PartEightCards  h1="Wanna eat hot & spicy Pizza?" h2="Pizza?" h3="Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals." src={img3} />
            </div>
        </div>
    )
}
