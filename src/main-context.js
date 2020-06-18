import React, { useState } from 'react';

export const mainContext = React.createContext({
  drawer: null,
  dark: null,
  update: () => {},
});

export default (props) => {
  const [mainData, setMainData] = useState({
    drawer: false,
    dark: false,
  });

  const updateMain = (data) => {
    setMainData(data);
  };

  return (
    <mainContext.Provider
      value={{
        drawer: mainData.drawer,
        update: updateMain,
        dark: mainData.dark,
      }}>
      {props.children}
    </mainContext.Provider>
  );
};
