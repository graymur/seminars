/* destructuring */

//let array = [1, 2];
//
//var [a, b, c] = array;
//
//console.log(a, b, c);
















/* switching values */

//[b, a] = [a, b];
//
//console.log(a, b);


















/* destructuring return values */

//function obj() {
//    return {
//        a: 1,
//        b: 2
//    }
//}
//////
//var { a, b } = obj();
//
//console.log(a, b);










/* destructuring some return values */

//var { a } = obj();
//var { b } = obj();
//
//console.log(a, b);











/* destructuring parameters */

/* arrays */

//function func([key, value]) {
//    console.log(key);
//    console.log(value);
//}
//
//func(['a', 1]);














/* objects */

//function func({ a }) {
//    console.log(a);
//}

//func({ a: 1 });
//func({ b: 2, a: 1 });









/* complex example */

//let obj = {
//    key1: 'value1',
//    key2: 'value2',
//    subobj: {
//        subkey1: 'subvalue1',
//        subkey2: 'subvalue2'
//    }
//};
//
//let { key1, key2, subobj: { subkey1, subkey2 }} = obj;
//
//console.log(key1);
//console.log(key2);
//console.log(subkey1);
//console.log(subkey2);