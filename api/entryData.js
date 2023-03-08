import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL ENTRIES
const getEntries = (uid) => new Promise((resolve, reject) => {
  console.warn('test', uid);
  console.warn(endpoint);
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      resolve(Object.values(data));
    })
    .catch(reject);
});

// GET SINGLE ENTRY
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE ENTRY
const deleteEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE ENTRY
const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE ENTRY
const updateEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// FILTER ENTRIES ON CATEGORY
const filterJsEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsEntries = Object.values(data).filter((item) => item.category.toLowerCase() === 'javascript');
      resolve(jsEntries);
    })
    .catch(reject);
});

// FILTER ENTRIES ON CATEGORY
const filterCssEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsEntries = Object.values(data).filter((item) => item.category.toLowerCase() === 'css');
      resolve(jsEntries);
    })
    .catch(reject);
});

// FILTER ENTRIES ON CATEGORY
const filterHtmlEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsEntries = Object.values(data).filter((item) => item.category.toLowerCase() === 'html');
      resolve(jsEntries);
    })
    .catch(reject);
});

export {
  getEntries,
  getSingleEntry,
  deleteEntry,
  createEntry,
  updateEntry,
  filterJsEntries,
  filterCssEntries,
  filterHtmlEntries
};
