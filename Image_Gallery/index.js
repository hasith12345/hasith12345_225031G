const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'salmon';

  if (backgroundColor === 'salmon') {
    document.body.style.backgroundColor = 'green';
  } else {
    document.body.style.backgroundColor = 'salmon';
  }
});
