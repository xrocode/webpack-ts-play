
console.log('hello');

console.log('ho ho ho');

let x = 40;

for (let i = 0; i < 10; i++) {
  console.log(i);

}

console.log('im here !');


export function xclicked() {
  console.log('xclicked! ' + Date.now());
  let body = document.body;
  workOnBody(body);
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

