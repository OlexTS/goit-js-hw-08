import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onChangeInput, 500));
formRef.addEventListener('submit', onFormSubmit);
const LOCALESTORAGE_KEY = 'feedback-form-state';
const inputValue = {};

function onChangeInput(event) {
  if (event.target.nodeName === 'INPUT') {
    inputValue.email = event.target.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    inputValue.message = event.target.value;
  }

  localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(inputValue));
}

const parsedVal = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY));
if (parsedVal) {
  formRef.elements.email.value = parsedVal.email || '';
  formRef.elements.message.value = parsedVal.message || '';
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(inputValue);
  localStorage.removeItem(LOCALESTORAGE_KEY);
  formRef.reset();
}
