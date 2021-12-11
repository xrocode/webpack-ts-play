// import _ from 'lodash';
// import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack', 'ahahah', 'watching', 'ok!'], ' ');

  element.innerHTML = 'TS works!'
  // alert('hi!')

  let x = 34;
  x = 44;

  element.innerHTML += ' and x is: ' + x;




  return element;
}

document.body.appendChild(component());
