import React, { useContext } from 'react';
import WebPanel from './WebPanel';
import { WebAppContext } from './WebAppProvider';


const App = () => {
  // const app = useContext(WebAppContext);
  let app = window.Telegram.WebApp;

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const panels = [
    { name: 'Panel 1', options: options},
    { name: 'Panel 2', options: options },
    // Add more panels as needed
  ];

  return (
      <div>
        <h1>My App</h1>
        {/* <p>themeParams: {JSON.stringify(app.themeParams)}</p> */}
        <div className="name-panels">
          {
            panels.map(
                (panel, index) => (
                <WebPanel 
                  key={index} 
                  name={panel.name} 
                  options={panel.options} 
                  themeParams={app.themeParams}
                />
                )
              )
          }
        </div>
      </div>
  );
};

export default App;
