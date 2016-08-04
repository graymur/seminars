/* spread */

//let string = 'abc';
//
//let chars = [...string];
//
//console.log(chars);
















/* spread concatenation */

//let chars = 'abc';
//
//let chars2 = [...chars, 'd', 'e', 'f'];
//
//console.log(chars2);

















/* spread arguments */

let chars = ['a', 'b', 'c'];

function dest(a, b, c) {
    console.log(a, b, c);
}

/* es5 - apply */
//dest.apply(null, chars);
//
///* es6 - spread */
//dest(...chars);












/* object spread */

var obj = {
    a: 1,
    b: 2
};

var obj2 = {
    ...obj,
    c: 3,
    d: 4
};

console.log(obj2);