let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'INVALID';
    mode = 'equal';
  };
};

let menuIcon = document.querySelector('.icon'),
  menu = document.querySelector('.menu');

menuIcon.onclick = function() {
  menu.classList.toggle('open');
};

let blueTheme = document.querySelector('.blue'),
  greenTheme = document.querySelector('.green'),
  redTheme = document.querySelector('.red'),
  purpleTheme = document.querySelector('.purple'),
  pinkTheme = document.querySelector('.pink'),
  blackTheme = document.querySelector('.black'),
  whiteTheme = document.querySelector('.white');

blueTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.remove('black');
  document.body.classList.remove('white');
  document.body.classList.add('blue');
  menu.classList.remove('open');
};

greenTheme.onclick = function() {
  document.body.classList.remove('blue');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.remove('black');
  document.body.classList.remove('white');
  document.body.classList.add('green');
  menu.classList.remove('open');
};

redTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('blue');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.remove('black');
  document.body.classList.remove('white');
  document.body.classList.add('red');
  menu.classList.remove('open');
};

purpleTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('red');
  document.body.classList.remove('blue');
  document.body.classList.remove('pink');
  document.body.classList.remove('black');
  document.body.classList.remove('white');
  document.body.classList.add('purple');
  menu.classList.remove('open');
};

pinkTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('blue');
  document.body.classList.remove('black');
  document.body.classList.remove('white');
  document.body.classList.add('pink');
  menu.classList.remove('open');
};

blackTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('blue');
  document.body.classList.remove('pink');
  document.body.classList.remove('white');
  document.body.classList.add('black');
  menu.classList.remove('open');
};

whiteTheme.onclick = function() {
  document.body.classList.remove('green');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('blue');
  document.body.classList.remove('black');
  document.body.classList.remove('pink');
  document.body.classList.add('white');
  menu.classList.remove('open');
};