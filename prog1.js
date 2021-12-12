console.log('lol');
function myfunc(z) {
    for (var i = 0; i < z.length; i++) {
        console.log(z[i]);
    }
    return z.length;
}
var arr = ['abibi', 'ififi', 'ddodo'];
myfunc(arr);
var al = arr.push('7');
console.log('array lenght:', al);
myfunc(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var x = arr_1[_i];
    console.log(x);
}
console.log(arr);
