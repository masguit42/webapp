import React, { createContext, useEffect, useState } from 'react';

export const WebAppContext = createContext({});

const WebAppProvider = ({ children }) => {
  const [app, setApp] = useState(null);

  useEffect(() => {
    setApp(window.Telegram.WebApp);
  }, []);

  useEffect(() => {
    if (app && app.ready) {
      app.ready();
    }
  }, [app]);

  return (
    <WebAppContext.Provider value={app}>
      {children}
    </WebAppContext.Provider>
  );
};

export default WebAppProvider;
