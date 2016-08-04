import __class from './lib/class.js';

const a = 5;

const es6func = (arg) => {
    return `arg is: ${arg}`;
};

console.log(es6func(10));

let obj = {
    key1: 'value1',
    key2: 'value2',
    subobj: {
        subkey1: 'subvalue1',
        subkey2: 'subvalue2'
    }
};

let { key1, key2, subobj: { subkey1, subkey2 }} = obj;

console.log(key1);
console.log(key2);
console.log(subkey1);
console.log(subkey2);

function es6(x = 4, y = 5) {
    return x * y;
}

console.log(es6());