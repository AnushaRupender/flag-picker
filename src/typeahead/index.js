import './styles.css';

const debounce = (func, delay) => {
	let debounceTimer;
	return function() {
			const context = this;
			const args = arguments;
			clearTimeout(debounceTimer)
			debounceTimer = setTimeout(() => func.apply(context, args), delay)
	}
}

const TypeAhead = props => {
	const {onTypeAheadAction, searchBox} = props;
	const getData = ({target}) => {
		onTypeAheadAction(target.value)
	} 
  return (
		<input className='TypeAheadInput' onChange={debounce(getData, 1000)} ref={searchBox}></input>
  );
}
export default TypeAhead;