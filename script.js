const formValidator = {
  form: document.getElementById('form'),
  password1El: document.getElementById('password1'),
  password2El: document.getElementById('password2'),
  messageContainer: document.querySelector('.message-container'),
  message: document.getElementById('message'),
  inputs: document.querySelectorAll('input'),
  submitBtn: document.querySelector('button'),
};

// Check if any input is empty and display message
const checkEmptyInputs = () => {
  formValidator.inputs.forEach(input => {
    if (input.textContent === '') {
      formValidator.message.textContent = 'Please fill out all fields.';
      formValidator.message.style.color = 'red';
      formValidator.messageContainer.style.borderColor = 'red';
    }
  });
};

const validateForm = () => {
  // Check to see if passwords match
  if (formValidator.password1El.value === formValidator.password2El.value) {
    formValidator.password1El.style.borderColor = 'green';
    formValidator.password2El.style.borderColor = 'green';
  } else {
    formValidator.message.textContent = 'Make sure password match.';
    formValidator.message.style.color = 'red';
    formValidator.messageContainer.style.borderColor = 'red';
    formValidator.password1El.style.borderColor = 'red';
    formValidator.password2El.style.borderColor = 'red';
    return false;
  }
  // If form is valid and passwords match
  formValidator.message.textContent = 'Successfully Registered!';
  formValidator.message.style.color = 'green';
  formValidator.messageContainer.style.borderColor = 'green';
  return true;
};

const storeFormData = () => {
  const user = {
    name: formValidator.form.name.value,
    phone: formValidator.form.phone.value,
    email: formValidator.form.email.value,
    website: formValidator.form.website.value,
    password: formValidator.form.password.value,
  };
  // Do something with user data
  console.log(user);
};

const processFormData = e => {
  e.preventDefault();
  validateForm();
  if (validateForm()) storeFormData();
};

// Event Listener
formValidator.form.addEventListener('submit', processFormData);
formValidator.submitBtn.addEventListener('click', checkEmptyInputs);
