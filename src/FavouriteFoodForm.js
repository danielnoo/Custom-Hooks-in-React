import useInputValue from './useInputValue.js';

function FavouriteFoodForm() {
  // const [favFood, setFavFood] = useState('');
  // const [favSoup, setFavSoup] = useState('');

  const [favFood, handleFavFoodChange, resetFavFood] = useInputValue();

  const[favSoup, handleFavSoupChange, resetFavSoup] = useInputValue();

  
  
  // const handleFavFoodChange = (e) => {
  //     setFavFood(e.target.value);
  // }

  // const handleFavSoupChange = (e) => {
  //     setFavSoup(e.target.value);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submitting logic here

    // reset form after submit:
    resetFavFood('');
    resetFavSoup('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="favFood">What is your favourite food?</label>
      <input value={favFood} onChange={handleFavFoodChange} type="text" id="favFood" />

      <label htmlFor="favSoup">What is your favourite Soup?</label>
      <input value={favSoup} onChange={handleFavSoupChange} type="text" id="favSoup" />
      <button>Save</button>
    </form>
  )
}

export default FavouriteFoodForm; 