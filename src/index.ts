function component() {
  const element = document.createElement('div');

  element.innerHTML = 'TS works!'
  // alert('hi!')

  let x = 34;
  x = 44;

  element.innerHTML += ' and x is: ' + x;


  return element;
}

document.body.appendChild(component());
