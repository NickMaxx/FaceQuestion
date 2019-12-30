// 自定义类型转换

let obj = {
  valueOf(){
    return 0;
  },
  toString(){
    return '1';
  },
  [Symbol.toPrimitive](x){
    return 123;
  }
};

console.log(1+obj);