import {
  deleteEntry, filterCssEntries, filterHtmlEntries, filterJsEntries, getEntries, getSingleEntry
} from '../api/entryData';
import addEntryForm from '../forms/addEntryForm';
import { showEntries } from '../pages/entries';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING ENTRY
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }

    // CLICK EVENT EDITING ENTRY
    if (e.target.id.includes('edit-entry-btn')) {
      console.warn('EDIT ENTRY', e.target.id);
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(user.uid, entryObj));
      }
    }

    // Filter on Category
    document.querySelector('#js-btn').addEventListener('click', () => {
      filterJsEntries(user.uid).then(showEntries);
    });

    document.querySelector('#css-btn').addEventListener('click', () => {
      filterCssEntries(user.uid).then(showEntries);
    });

    document.querySelector('#html-btn').addEventListener('click', () => {
      filterHtmlEntries(user.uid).then(showEntries);
    });
  });
};

export default domEvents;
