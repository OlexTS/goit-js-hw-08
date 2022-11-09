import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onChangeInput, 500));
formRef.addEventListener('submit', onFormSubmit);
const LOCALESTORAGE_KEY = 'feedback-form-state';
let inputValue = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY)) || {};

function onChangeInput(event) {
  if (event.target.nodeName === 'INPUT') {
    inputValue.email = event.target.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    inputValue.message = event.target.value;
  }
  localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(inputValue));
}

formRef.elements.email.value = inputValue.email || '';
formRef.elements.message.value = inputValue.message || '';

function onFormSubmit(event) {
  event.preventDefault();
  if (inputValue.email && inputValue.message) {
    console.log(inputValue);
    localStorage.removeItem(LOCALESTORAGE_KEY);
    formRef.reset();
    inputValue = {};
  } else {
    alert('Error');
  }
}
