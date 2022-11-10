import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const FEEDBACK_FORM = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};
// console.log(formData);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));

  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
  formData = {};
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function populateTextarea() {
  const savedText = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  if (savedText) {
    refs.form.email.value = savedText.email || '';
    refs.form.message.value = savedText.message || '';
  }
}
