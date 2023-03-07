import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addEntryForm = (user, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="title">Entry Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
    </div>
    <div class="form-group">
      <label for="Category">Category/Tech</label>
      <input type="text" class="form-control" id="category" placeholder="Javascript, HTML, CSS, etc." value="${obj.category || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit Entry
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
