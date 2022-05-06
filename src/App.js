import './App.css';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import {continentData} from './staticData/continentData';
import { useState } from 'react';

function App() {
  const [selectedContinent, setSelectedContinent] = useState({}); //holds the selected continent value
  const [selectedCountries, setSelectedCountries] = useState({}); //holds the selected contries list

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flag Picker</h1>
        <div>This app will help you to learn flags around the world in <u>3&nbsp;steps.</u></div>
      </header>
      <div className='mainContent'>
        <div className='step'>
          <Step1 
            continentData={continentData} 
            selectedContinent={selectedContinent} 
            setSelectedContinent={setSelectedContinent}
            setSelectedCountries={setSelectedCountries}
          ></Step1>
        </div>
        <div className='step'>
          {selectedContinent && selectedContinent.countries && 
          <Step2 
            selectedContinent={selectedContinent} 
            selectedCountries={selectedCountries} 
            setSelectedCountries={setSelectedCountries}
          ></Step2>}
        </div>
        <div className='step'>
          {selectedCountries && Object.keys(selectedCountries).length > 0 && 
          <Step3 
            selectedCountries={selectedCountries} 
            setSelectedCountries={setSelectedCountries}
          ></Step3>}
        </div>
      </div>
    </div>
  );
}

export default App;
