/* arrow functions */

//var es5func = function (arg) {
//    return 'arg is: ' + arg;
//};
//
//console.log(es5func(10));

















/* es 6 */
//const es6func = (arg) => {
//    return `arg is: ${arg}`;
//};
//
//console.log(es6func(10));







/* short notation */
//console.log((arg => `arg is: ${arg}`)(10));



















/* callbacks */

//let res = [1,2,3,4].map(x => x * x);
//
//console.log(res);












/* transparent this */

//function ConstES5() {
//    this.one = [1,2,3,4];
//    this.two = [5,6,7,8];
//
//    var self = this;
//
//    this.one.forEach(function (value, index) {
//        self.one[index] += self.two[index];
//    });
//
//    console.log(this.one);
//}
//
//var constES5 = new ConstES5();










/* es6 */

//function ConstES6() {
//    this.one = [1,2,3,4];
//    this.two = [5,6,7,8];
//
//    this.one.forEach((value, index) => {
//        this.one[index] += this.two[index];
//    });
//
//    console.log(this.one);
//}
//
//var constES6 = new ConstES6();