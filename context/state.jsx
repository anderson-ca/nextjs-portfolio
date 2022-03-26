import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [uglyBtn, setUglyButton] = useState({
    name: null,
    hover: null,
    click: null,
    x: null,
    y: null,
  });

  const [uglyModal, setUglyModal] = useState({
    name: null,
    title: null,
    description: null,
    items: [],
    images: [],
  })

  // set ugly button
  const handleSetUglyBtn = (name = null, hover = null, click = null, x = null, y = null) => {
    setUglyButton({
      name,
      hover,
      click,
      x,
      y
    });

    console.log('shared btn - ', name, hover, click);
  }

  // set ugly button
  const handleSetUglyModal = (name = null, title = null, description = null, items = null, images = null) => {
    if (items === null) {
      items = [];
    }
    if (images === null) {
      images = [];
    }
    setUglyModal({
      name,
      title,
      description,
      items,
      images,
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