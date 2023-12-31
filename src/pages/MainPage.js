

import React from 'react';
import TopBar from '../components/topBar/TopBar';
import Section01 from '../components/firstSection/FirstSection';
import SecondSection from '../components/secondSection/SecondSection';
import PartThree from '../components/partThree/PartThree';
import PartFour from '../components/partFour/PartFour';
import PartFive from '../components/partFive/PartFive';
import PartSix from '../components/partSix/PartSix';
import PartSeven from '../components/partSeven/PartSeven';
import PartEight from '../components/partEight/PartEight';
import PartNine from '../components/partnine/PartNine';
import Footer from "../components/footer/Footer"

export default function MainPage(props) {
  return (
    <>
      <TopBar/>
      <Section01/>
      <SecondSection/>
      <PartThree/>
      <PartFour/>
      <PartFive/>
      <PartSix/>
      <PartSeven/>
      <PartEight/>
      <PartNine/>
      <Footer/>
    </>
  );
}

