//typeof 能够准确判断出基本类型，但是null除外，null会返回object
//typeof 对于对象类型，能够准确辨认出func类型，其余全是object

//typeof 能判断基本类型，instanceof不能判断基本类型，instanceof要借助于Symbol.hasInstance

class isString{
  static [Symbol.hasInstance](x){
    return typeof x === 'string';
  }
}

console.log('a' instanceof isString, 123);
console.log(1 instanceof isString, 123);

console.log(typeof function a(){},234);
console.log(typeof {}, 234);
console.log(typeof null, 234);