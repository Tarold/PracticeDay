const body = document.querySelector('body');
const container = document.querySelector('.container');
const checkbox = document.getElementById('isDark');

Init();

function changeTheme() {
  localStorage.setItem('isDark', checkbox.checked);
  show();
}

function show() {
  if (localStorage.getItem('isDark') != 'true') {
    body.className = 'body-dark';
    container.classList.toggle('container-dark');
    container.classList.toggle('container-light');
  } else {
    body.className = 'body-light';
    container.classList.toggle('container-light');
    container.classList.toggle('container-dark');
  }
}

function Init() {
  show();
}
