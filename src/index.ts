
console.log('hello');

console.log('ho ho ho');

let x = 40;

for (let i = 0; i < 10; i++) {
  console.log(i);

}


let ourdiv = document.getElementById('mydiv');
console.log(ourdiv);

ourdiv.innerHTML = 'changed!'

let newdiv = document.createElement('div');
newdiv.innerHTML = 'this is a new div!'

document.body.appendChild(newdiv)
newdiv.id = 'cooldiv';

