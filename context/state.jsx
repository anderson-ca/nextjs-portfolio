import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();
const initState = {
  'name': null,
  'hover': false,
  'click': false,
  'mouseDown': false
};

export function AppWrapper({ children }) {

  const [uglyBtn, setUglyButton] = useState({
    'name': null,
    'hover': false,
    'mouseDown': false,
    'click': false,
  });

  const [uglyModal, setUglyModal] = useState({
    'name': null,
    'x': 0,
    'y': 0,
  })

  // set ugly button
  const handleSetUglyBtn = (btnName = null, hover = true, click = false) => {
    setUglyButton({
      'name': btnName,
      'hover': hover,
      'click': click,
    });

    console.log('shared btn - ', btnName, hover, click);
  }

  // set ugly button
  const handleSetUglyModal = (btnName, positionX, positionY) => {
    setUglyModal({
      'name': btnName,
      'x': positionX,
      'y': positionY
    });

    // console.log('🎯 shared modal -> ', btnName, positionX, positionY);
  }

  let sharedState = {
    handleSetUglyBtn,
    handleSetUglyModal,
    uglyBtn,
    uglyModal,
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