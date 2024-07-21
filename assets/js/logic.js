// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const modeBtn = document.querySelector('#toggle');
const mode = localStorage.getItem('mode') || 'light';

function checkMode () {
  if (mode === 'light') {
    document.body.classList.replace('dark', mode);
    modeBtn.textContent = '☀️';
  } else {
    document.body.classList.replace('light', mode);
    modeBtn.textContent = '🌙';
  }
}

function darkModeToggle() {
    if (document.body.className == 'light') {
      modeBtn.textContent = '🌙';
      document.body.className = 'dark';
      localStorage.setItem('mode', 'dark');
    } else {
      modeBtn.textContent = '☀️';
      document.body.className = 'light';
      localStorage.setItem('mode', 'light');
    }
}

modeBtn.addEventListener('click', darkModeToggle);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const postContent = localStorage.getItem('blogs');

  const posts = JSON.parse(postContent);

  return posts || [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

//I think I already accomplished this on form.js
// function storeLocalStorage() {
  
// }

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

checkMode();