import { createEntry, getEntries, updateEntry } from '../api/entryData';
import { showEntries } from '../pages/entries';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CLICK EVENT FOR SUBMIT ENTRY FORM
    if (e.target.id.includes('submit-entry')) {
      console.warn('CLICKED SUBMIT ENTRY', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        uid: user.uid,
        timestamp: new Date(Date.now()).toLocaleString()
      };

      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        console.warn(patchPayload);

        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
    }

    // CLICK EVENT FOR EDITING ENTRY
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE ENTRY', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        uid: user.uid,
        timestamp: new Date(Date.now()),
        firebaseKey
      };
      updateEntry(payload).then(() => {
        getEntries(user.uid).then(showEntries);
      });
    }
  });
};

export default formEvents;
