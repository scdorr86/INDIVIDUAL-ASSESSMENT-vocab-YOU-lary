const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#filter-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
