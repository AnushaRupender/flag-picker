import './styles.css';

const Step3 = props => {
  const {selectedCountries, setSelectedCountries} = props;
  return (
      <div>
        <h2>Selected Flags:</h2>
        {Object.keys(selectedCountries).length > 0 && 
        <>
          {Object.keys(selectedCountries).map(key => (
            <span key={selectedCountries[key].name}>{selectedCountries[key].flag}</span>
          ))}
          <br></br>
          <button onClick={()=>setSelectedCountries({})}>Clear Flags</button>
        </>
        }
      </div>
  );
}
export default Step3;