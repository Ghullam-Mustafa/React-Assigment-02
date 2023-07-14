

import React from 'react';
import TopBar from '../components/topBar/TopBar';
import Section01 from '../components/firstSection/FirstSection'
import SecondSection from '../components/secondSection/SecondSection';
import PartThree from '../components/partThree/PartThree';
import PartFour from '../components/partFour/PartFour';
import PartFive from '../components/partFive/PartFive';
export default function MainPage(props) {
  return (
    <>
      <TopBar/>
      <Section01/>
      <SecondSection/>
      <PartThree/>
      <PartFour/>
      <PartFive/>
    </>
  );
}

