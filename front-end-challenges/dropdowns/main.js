const $btn = document.querySelector('button');
const $ul = document.querySelector('ul');

$btn.addEventListener('click', () => {
  if ($ul.className === 'dropdown hidden') {
    $ul.className = 'dropdown';
  } else {
    $ul.className = 'dropdown hidden';
  }
});

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'SPAN') {
    $ul.className = 'dropdown hidden';
  }
});
