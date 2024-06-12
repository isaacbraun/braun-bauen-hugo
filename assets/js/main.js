import Alpine from '/js/alpinejs.min.js'

Alpine.magic('clipboard', (el) => {
  el.classList.add('copied');
  return message => navigator.clipboard.writeText(message);
})

Alpine.magic('tooltipReset', (el) => {
  return message => el.innerText = message;
})
 
window.Alpine = Alpine;
window.Alpine.start();
