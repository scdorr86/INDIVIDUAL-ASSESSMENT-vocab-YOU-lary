import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#store', domString);
};

const showEntries = (array) => {
  console.warn('showentry.then', array);
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="js-btn">Javascript</button><button class="btn btn-success btn-lg mb-4" id="html-btn">HTML</button><button class="btn btn-success btn-lg mb-4" id="css-btn">CSS</button>';
  renderToDOM('#filter-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">Category: ${item.category}</h5>
            <p class="card-text bold">${item.description}</p>
            <hr>
            <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info entrybtn">Edit</i>
            <i id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt delbtn">Delete</i>
            <footer>Date Created: ${item.timestamp}</footer>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showEntries, emptyEntries };
