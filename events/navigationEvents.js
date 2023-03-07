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
};

export default navigationEvents;
