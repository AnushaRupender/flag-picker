import './styles.css';
import TypeAhead from '../../typeahead';
import { useState, useRef, useEffect } from 'react';

const Step2 = props => {
  const [showMenu, setShowMenu] = useState(false);
  const {selectedContinent = {}, selectedCountries, setSelectedCountries} = props;
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const searchBox = useRef();
  const onTypeAheadAction = (search) => {
    search = search.toLowerCase();
    const filteredList = selectedContinent.countries.filter((data)=>{
      return data.name.toLowerCase().indexOf(search) > -1;
    });
    setFilteredCountryList(filteredList);
  };
  const setCountriesData = (value) => {
    searchBox.current.value='';
    if(selectedCountries[value.name] != undefined)
      setSelectedCountries((previoudata) => { delete previoudata[value.name]; return {...previoudata};})
    else
      setSelectedCountries(previoudata => {return {...previoudata, [value.name]: value}});
  }
  const isChecked = (name) => {
    return selectedCountries[name] != undefined ? true : false;
  }
  useEffect(()=>{
    if(selectedContinent && selectedContinent.countries) {
      setFilteredCountryList(selectedContinent.countries);
    }
  },[selectedContinent]);
  return (
    <div>
      <h2>Step2</h2>
      <div>Now, select a country.</div>
      <div className='StepTypeahead'>
        <div onClick={()=>setShowMenu(!showMenu)}>
          <TypeAhead onTypeAheadAction={onTypeAheadAction} searchBox={searchBox}></TypeAhead>
        </div>
        {showMenu && <ul className='Dropdown'>
          {filteredCountryList && filteredCountryList.map(value => (
            <li onClick={() => {setCountriesData(value)}} key={value.name} className="MultiselectDropdown">
              <input type="checkbox" checked={isChecked(value.name)} readOnly/>
              <label>{value.name}</label>
            </li>
          ))}
        </ul>
        }
      </div>
    </div>
  );
}
export default Step2;