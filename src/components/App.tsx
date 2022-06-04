import React, { useState } from 'react';
import { MainMenu } from './MainMenu';
import { Stone } from "./Stone";
import { AbilityStone, RowSelect } from '../AbilityStone';

export const App = () => {
  const startingRates = 75;
  const [abilityStone, setAbilityStone] = useState(AbilityStone.getRare(startingRates));

  const setNewStone = (abilityStone: AbilityStone) => {
    setAbilityStone(abilityStone);
  }

  const updateStone = (row: RowSelect) => {
    const newStone = abilityStone.updateStone(row);
    setAbilityStone(newStone);
  }

  return (
    <React.Fragment>
      <MainMenu
        setNewStone={setNewStone}
      />
      <p>This is intended to simulate the process of faceting a stone. There is no calculator.</p>
      <Stone 
        rates={abilityStone.rates} 
        topRow={abilityStone.topNodes}
        midRow={abilityStone.midNodes}
        botRow={abilityStone.botNodes}
        updateStone={updateStone}
        />
    </React.Fragment>
  );
}