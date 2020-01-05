let myfunc = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver){
      getLogger(target, receiver)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver){
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  };
  return new Proxy(obj, handler)
};