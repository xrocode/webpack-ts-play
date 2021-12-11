import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack', 'ahahah', 'watching', 'ok!'], ' ');

  element.innerHTML = 'aloha 2'
  // alert('hi!')


  return element;
}

document.body.appendChild(component());
