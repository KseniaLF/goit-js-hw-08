import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let data = { email: '', message: ''};
setValuesElemForm();

form.addEventListener('input', throttle(evt => {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(data),);
}, 500));



form.addEventListener('submit', evt => {
  evt.preventDefault()
  console.log(data);


  if (!data.email || !data.message) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  data = { email: '', message: '' };
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
});



function setValuesElemForm() {
  const dataFromLs = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
    if (dataFromLs) {
    data.email = dataFromLs.email;
    data.message = dataFromLs.message;
    form.elements.email.value = dataFromLs.email;
    form.elements.message.value = dataFromLs.message;
  } 
}




