import { deleteEntry, getEntries, getSingleEntry } from '../api/entryData';
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
  });
};

export default domEvents;