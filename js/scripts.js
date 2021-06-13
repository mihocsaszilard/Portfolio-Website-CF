(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');

  function showErrorMessage(input, message) {
    let container = input.parentElement; //.form-control

    //remove existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    //add the eroor if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    if (value.indexOf('@') === -1){
      showErrorMessage(emailInput, 'This is not a valid e-mail address.');
      return false;
    }
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'This is not a valid e-mail address.');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  // function validateForm() {
  //   let isValidEmail = validateEmail();
  //   return isValidEmail;
  // }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateEmail()) {
      alert('E-mail successfully sent!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
})();
