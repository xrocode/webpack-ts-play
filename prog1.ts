
console.log('lol');

function myfunc(z: string[]) {
  for (let i = 0; i < z.length; i++) {
    console.log(z[i]);
    
  }
  return z.length;
}

let arr = ['abibi', 'ififi', 'ddodo'];
myfunc(arr);

let al = arr.push('7');
console.log('array lenght:', al);
myfunc(arr);

for (let x of arr) {
console.log(x);

}

console.log(arr);



