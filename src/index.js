import './styles.scss';
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let username = document.getElementById('username');
  let password = document.getElementById('mail');

  if (username.value == '' || mail.value == '') {
    alert('Ensure you input a value in both fields!');
  } else {
    // perform operation with form input
    alert('This form has been successfully submitted!');
    console.log(
      `This form has a username of ${username.value} and password of ${mail.value}`
    );

    username.value = '';
    mail.value = '';
  }
});
