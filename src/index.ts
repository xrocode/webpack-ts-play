
console.log('hello');

console.log('ho ho ho');

let x = 40;

for (let i = 0; i < 10; i++) {
  console.log(i);

}

console.log('im here !');


x = 33;

function generateList(fruits: string[]) {
  let ul = document.createElement('ul');

  fruits.forEach((el) => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(el));
    ul.appendChild(li);
  })
  return ul
}

class lolponent {

  timeGenerated: number;
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.timeGenerated = Date.now();
    this.container.innerHTML = 'created ' + this.timeGenerated + 'yes'
  }

  render(parent: Element) {
    parent.appendChild(this.container);
  }

}



export function xclicked() {
  console.log('xclicked! ' + Date.now());
  let body = document.body;
  // workOnBody(body);

  // let nlol = new lolponent()
  // nlol.render(body);
  // console.log(nlol.timeGenerated);

  let fruits = ['Apple', 'Orange', 'Banana']
  document.getElementById('xlist').appendChild(generateList(fruits))
    


}


function workOnBody(body: HTMLElement) {

  let z = Array.from(body.children);
  for (let el of z) {
    console.log(el);
    console.log(el.classList);
  }

  // let z = body.children as Array
  // let children = [...body.children];


}








// DOM:

// let ourdiv = document.getElementById('mydiv');
// console.log(ourdiv);

// ourdiv.innerHTML = 'changed!'

// let newdiv = document.createElement('div');
// newdiv.innerHTML = 'this is a new div!'

// document.body.appendChild(newdiv)
// newdiv.id = 'cooldiv';

