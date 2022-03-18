import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();
const initState = {
  'name': null,
  'hover': false,
  'click': false,
};

export function AppWrapper({ children }) {

  const [uglyBtn, setUglyButton] = useState({
    'name': null,
    'hover': false,
    'click': false,
  });

  // set ugly button
  const handleSetUglyBtn = (btnName, hover, click, positionX, positionY) => {
    setUglyButton({
      'name': btnName,
      'hover': hover,
      'click': click,
      'positionX': positionX,
      'positionY': positionY,
    });

    // console.log('shared btn - ', btnName, hover, click);
  }

  let sharedState = {
    handleSetUglyBtn,
    uglyBtn,
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