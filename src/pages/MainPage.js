

import React from 'react';
import TopBar from '../components/topBar/TopBar';
import Section01 from '../components/firstSection/FirstSection'
import SecondSection from '../components/secondSection/SecondSection';
import PartThree from '../components/partThree/PartThree';
export default function MainPage(props) {
  return (
    <>
      <TopBar/>
      <Section01/>
      <SecondSection/>
      <PartThree/>
    </>
  );
}

