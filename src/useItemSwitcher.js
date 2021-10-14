import {useState} from 'react';

function useListItemSwitcher (items) {

  
  const [currentIndex, setCurrentIndex] = useState(0);


  // getting the current item based o nthe state value
  const currentItem = items[currentIndex];

  
   const next = () => {
        let nextIndex = currentIndex + 1;

        if (nextIndex >= items.length) {
            // Wrap around if we're at the end
            nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
    }

    const previous = () => {
        let previousIndex = currentIndex - 1;
        if (previousIndex < 0) {
            // Wrap around if we're at the beginning
            previousIndex = items.length - 1;
        }
        setCurrentIndex(previousIndex);
    };


  // return values for our component to use
  return [currentItem, next, previous]

  


}

export default useListItemSwitcher;