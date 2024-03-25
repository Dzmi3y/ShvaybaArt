import React from 'react';
import { Exhibition } from './Exhibition';
import { Galery } from './Galery';
import { TamaraDementjeva } from './TamaraDementjeva';
import { About } from './About';

export const HomePage = () => {

  return (<>
      <Exhibition />
      <Galery/>
      <About/>
      <TamaraDementjeva/>
    </>
  )
}
