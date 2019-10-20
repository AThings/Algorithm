let str = require('./a.js')
console.log('hello ' + str.default)
require('./index.css')
require('./a.less')

let fn=() =>{
    console.log('fengjialue this is es6')
}
fn()

@log
class A{
    a = 1
}
let Aclass = new A()
console.log(Aclass.a)

function log(target){
    console.log(target,'23')
}