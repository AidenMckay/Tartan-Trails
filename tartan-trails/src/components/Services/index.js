import React from 'react';
import Icon6 from '../../images/pic6.jpg';
import Icon5 from '../../images/pic5.jpg';
import Icon3 from '../../images/pic3.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard to='/Trails'>
          <ServicesIcon src={Icon6} />
          <ServicesH2>trails</ServicesH2>
          <ServicesP>
            explore the outdoors.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to='/Gnomes'>
          <ServicesIcon src={Icon5} />
          <ServicesH2>gnome discovery</ServicesH2>
          <ServicesP>
            find the gnomes if you can!
          </ServicesP>
        </ServicesCard>
        <ServicesCard to='/Stars'>
          <ServicesIcon src={Icon3} />
          <ServicesH2>night sights</ServicesH2>
          <ServicesP>
            what stars are out tonight?
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
