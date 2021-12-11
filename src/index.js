import _ from 'lodash';
function component() {
  const element = document.createElement('div');
  
  // npx webpack
  // npx webpack --watch
  element.innerHTML = _.join(['Hello', 'webpack', 'ahahah', 'watching', 'ok'], ' ');

  return element;
}

document.body.appendChild(component());
