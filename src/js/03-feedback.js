import throttle from 'lodash.throttle';

/////////////////////////////////////////////////
// const USER_FB_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// const userEmail = form.elements.email;
// const userMessage = form.elements.message;
// let userData = {};

// restoreDataFromStorage();

// form.addEventListener('input', throttle(saveUserData, 500));
// form.addEventListener('submit', formSubmit);

// function saveUserData() {
//   userData = {
//     email: userEmail.value.trim(),
//     message: userMessage.value.trim(),
//   };

//   localStorage.setItem(USER_FB_KEY, JSON.stringify(userData));
// }

// function formSubmit(evt) {
//   evt.preventDefault();

//   if (userEmail.value.trim() === '' || userMessage.value.trim() === '') {
//     return alert('Please fill in all the fields!');
//   }

// console.log(userData);
// evt.currentTarget.reset();
// localStorage.removeItem(USER_FB_KEY);
// userData = {};
// }

// function restoreDataFromStorage() {
//   let storageData = JSON.parse(localStorage.getItem(USER_FB_KEY));

//   if (!storageData) {
//     return;
//   }

//   userEmail.value = storageData.email ?? '';
//   userMessage.value = storageData.message ?? '';
// }

/////////////////////////////////////////////////////////

const USER_FB_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
let userData = {};

restoreDataFromStorage();

form.addEventListener('input', throttle(saveUserData, 500));
form.addEventListener('submit', formSubmit);

function saveUserData(evt) {
  //   userData = {
  //     email: email.value.trim(),
  //     message: message.value.trim(),
  //   };

  userData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(USER_FB_KEY, JSON.stringify(userData));
}

function formSubmit(evt) {
  evt.preventDefault();

  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please, complete all the fields!');
  }

  console.log(userData);
  evt.currentTarget.reset();
  localStorage.removeItem(USER_FB_KEY);
  userData = {};
}

function restoreDataFromStorage() {
  let storageData = JSON.parse(localStorage.getItem(USER_FB_KEY));

  if (storageData) {
    email.value = storageData.email || '';
    message.value = storageData.message || '';
    // userData['email'] = storageData.email || '';
    // userData['message'] = storageData.message || '';
    userData.email = storageData.email || '';
    userData.message = storageData.message || '';
  }
}
