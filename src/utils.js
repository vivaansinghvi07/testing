function hide(x) {
  const ele = document.querySelector(x);
  ele.classList.add('hidden');
}

function show(x) {
  const ele = document.querySelector(x);
  ele.classList.remove('hidden');
}
