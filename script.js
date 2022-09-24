var counter;



document.getElementById('high-five-button').addEventListener('click', (event) => {
  counter = (typeof counter === 'number' ? counter : 0) + 1;
  let element_click_counter = document.getElementById('click-counter');
  element_click_counter.innerText = counter;

});
var counter;

// Describe this function...
function everything_invisible() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_tiger3 = document.getElementById('tiger3');
  element_tiger3.style.visibility = (false) ? 'visible' : 'hidden';
  let element_input_word4 = document.getElementById('input_word4');
  element_input_word4.style.visibility = (false) ? 'visible' : 'hidden';
  let element_step5 = document.getElementById('step5');
  element_step5.style.visibility = (false) ? 'visible' : 'hidden';
  let element_bye6 = document.getElementById('bye6');
  element_bye6.style.visibility = (false) ? 'visible' : 'hidden';
}

function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function next_page() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (counter == 1) {
    let element_text = document.getElementById('text');
    element_text.innerText = 'Ok! What\'s the plan for today?';
  } else if (counter == 2) {
    let element_text2 = document.getElementById('text');
    element_text2.innerText = randomMember(getWords('WORD'));
  } else if (counter == 3) {
    let element_text3 = document.getElementById('text');
    element_text3.replaceChildren();
    let element_tiger32 = document.getElementById('tiger3');
    element_tiger32.style.visibility = (true) ? 'visible' : 'hidden';
  } else if (counter == 4) {
    let element_tiger33 = document.getElementById('tiger3');
    element_tiger33.replaceChildren();
    let element_input_word42 = document.getElementById('input_word4');
    element_input_word42.style.visibility = (true) ? 'visible' : 'hidden';
  } else if (counter == 5) {
    let element_input_word43 = document.getElementById('input_word4');
    element_input_word43.style.visibility = (false) ? 'visible' : 'hidden';
    let element_step52 = document.getElementById('step5');
    element_step52.style.visibility = (true) ? 'visible' : 'hidden';
  } else if (counter == 6) {
    let element_input_word44 = document.getElementById('input_word4');
    element_input_word44.replaceChildren();
    let element_step53 = document.getElementById('step5');
    element_step53.replaceChildren();
    let element_bye62 = document.getElementById('bye6');
    element_bye62.style.visibility = (true) ? 'visible' : 'hidden';
  } else {
    everything_invisible();
    let element_header2 = document.getElementById('header');
    element_header2.innerText = 'Book is finished....CHILL TIME!!!!!';
  }
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


counter = 0;
everything_invisible();


document.getElementById('turn_page').addEventListener('click', (event) => {
  counter = (typeof counter === 'number' ? counter : 0) + 1;
  let element_header = document.getElementById('header');
  element_header.innerText = counter;
  next_page();

});

document.getElementById('input_btn').addEventListener('click', (event) => {
  let element_user = document.getElementById('user');
  element_user.innerText = getNumberOrString(document.getElementById('input_value').value);

});
