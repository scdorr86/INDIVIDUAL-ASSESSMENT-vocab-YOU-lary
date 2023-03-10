import { getEntries } from '../api/entryData';
import addEntryForm from '../forms/addEntryForm';
import { showEntries } from '../pages/entries';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // ADD ENTRY SHOW FORM
    if (e.target.id.includes('add-entry')) {
      console.warn('ADD ENTRY');
      addEntryForm(user.uid);
    }
  });

  // ALL ENTRIES
  document.querySelector('#all-entry').addEventListener('click', () => {
    console.warn('all entry clicked', user.uid);
    getEntries(user.uid).then(showEntries);
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ENTRIES
      getEntries(user.uid).then((data) => data.filter((index) => index.title.toLowerCase().includes(searchValue)
        || index.description.toLowerCase().includes(searchValue)
        || index.category.toLowerCase().includes(searchValue))).then(showEntries);
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY DOM
      // OTHERWISE SHOW THE ENTRIES
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
