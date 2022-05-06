import './styles.css';
import TypeAhead from '../../typeahead';
import { useState, useRef, useEffect } from 'react';

const Step1 = props => {
  const [showMenu, setShowMenu] = useState(false);
  const searchBox = useRef();
  const {continentData, selectedContinent, setSelectedContinent, setSelectedCountries} = props;
  const [continentDataToBeDisplayed, setContinentDataToBeDisplayed] = useState(continentData || []);
  const onTypeAheadAction = (search) => {
    search = search.toLowerCase();
    const filteredList = continentData.filter((data)=>{
      return data.continent.toLowerCase().indexOf(search) > -1;
    });
    setContinentDataToBeDisplayed(filteredList);
  };
  const selectContinent = (data) => {
    searchBox.current.value='';
    setSelectedContinent(data);
    setSelectedCountries({});
    setShowMenu(!showMenu);
    setContinentDataToBeDisplayed(continentData);
  }
  
  return (
    <div>
      <h2>Step1</h2>
      <div>Select a continent.</div>
      <div className='StepTypeahead'>
        <div onClick={()=>setShowMenu(!showMenu)}>
          <TypeAhead onTypeAheadAction={onTypeAheadAction} searchBox={searchBox}></TypeAhead>
        </div>
        {showMenu && <ul className='Dropdown'>
          {continentDataToBeDisplayed.map((data)=> (<li onClick={()=>selectContinent(data)} key={data.continent}>{data.continent}</li>))}
        </ul>}
      </div>
      
      {!showMenu && selectedContinent &&
      <div>
        You Selected
        <div>{selectedContinent.continent}</div>
      </div>
      }
    </div>
  );
}
export default Step1;