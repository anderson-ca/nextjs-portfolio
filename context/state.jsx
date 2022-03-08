import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [uglyButtons, setUglyButtons] = useState([]);

  // add button
  const handleAddUglyBtn = (newBtn) => {
    setUglyButtons((uglyButtons) => [
      ...uglyButtons,
      newBtn
    ])
  }
  
  //update button
  const handleUpdateClick = (btnName, clickState) => {
      uglyButtons.map((uglyBtn) => {
        if (uglyBtn.name === btnName) {
          console.log('inside my update function ->', uglyBtn.click);
          uglyBtn.click = clickState;
        }
      });
  }

  const handleUpdateHover = (btnName, hoverState) => {
    uglyButtons.map((uglyBtn) => {
      if (uglyBtn.name === btnName) {
        console.log('inside my update hover function ->', uglyBtn.hover);
        uglyBtn.hover = hoverState;
      }
    });
  }

  //remove button

  let sharedState = {
    uglyButtons,
    handleAddUglyBtn,
    handleUpdateClick,
    handleUpdateHover
  }


  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}