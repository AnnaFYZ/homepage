var counter;

document.getElementById('high-five-button').addEventListener('click', (event) => {
  counter = (typeof counter === 'number' ? counter : 0) + 1;
  let element_click_counter = document.getElementById('click-counter');
  element_click_counter.innerText = counter;

});
