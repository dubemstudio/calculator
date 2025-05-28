
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

const btn = document.querySelector('.btn');

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  btn.setAttribute('aria-pressed', 'true');
} else {
  document.body.classList.remove('dark');
  btn.setAttribute('aria-pressed', 'false');
}

// Handle toggle click
btn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  btn.setAttribute('aria-pressed', String(isDark));
});




// c
let calculation = localStorage.getItem('calculation') || '';
let result = '';

displayCalculation();
displayResult();

function updateCalculation(value){
  calculation += value;
  displayCalculation()
  localStorage.setItem('calculation', calculation)
}

function clearCalculation(){
  calculation = '';
  result = '';
  displayCalculation()
  displayResult();
  localStorage.setItem('calculation', calculation)
}

function calcResult(){
  result = eval(calculation)
  displayResult();
  calculation = result;
}

function displayCalculation(){
  document.querySelector('.calculator__expression').innerHTML = calculation;
}

function displayResult(){
  document.querySelector('.calculator__result').innerHTML = result;
}

function calcPercent(){
  calculation = (eval(calculation)) * 0.01;

  calcResult();

  localStorage.setItem('calculation', calculation);
}