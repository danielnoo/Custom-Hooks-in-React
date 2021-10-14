import { useInputValue } from './useInputValue';

const FavouriteDrinkForm = () => {
    const [favDrink, setFavDrink, resetFavDrink] = useInputValue();
    const [favBubblyDrink, setFavBubblyDrink, resetBubDrink] = useInputValue();

   


    const handleSubmit = (event) => {
        event.preventDefault();
        // form submitting logic here

        // reset form after submit:
      resetFavDrink();
      resetBubDrink();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="favDrink">What is your favourite Drink?</label>
            <input value={favDrink} onChange={setFavDrink} type="text" id="favDrink" />

            <label htmlFor="favBubblyDrink">What is your favourite Bubbly Drink?</label>
            <input value={favBubblyDrink} onChange={setFavBubblyDrink} type="text" id="favBubblyDrink" />
            <button>Save</button>
        </form>
    )
}
export default FavouriteDrinkForm;