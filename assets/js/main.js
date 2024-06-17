import Alpine from '/js/alpinejs.min.js'

Alpine.magic('clipboard', (el) => {
  const spanElem = el.querySelector('span');
  spanElem.dataset.message = spanElem.innerText;
  spanElem.innerText = 'Copied!';
  return message => navigator.clipboard.writeText(message);
});

Alpine.magic('tooltipReset', (el) => {
  const spanElem = el.querySelector('span');
  console.warn(spanElem, spanElem.dataset.message);
  spanElem.innerText = spanElem.dataset.message;
  return null;
});
 
window.Alpine = Alpine;
window.Alpine.start();
