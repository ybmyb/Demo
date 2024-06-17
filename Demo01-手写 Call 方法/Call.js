// 手写 call 方法

Function.prototype.myCall = function (ctx, ...args) {
  // 如果 this 指向了 null 或 undefined，则将其设置为全局对象 globalThis
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  const fn = this;
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: fn,
    enumerable: false,
  });
  ctx[key] = fn;
  const r = ctx[key](...args);
  delete ctx[key];
  return r;
};

function method(a, b) {
  console.log("args", a, b);
  console.log("this", this);
}
method.myCall({ name: "Fitten Code" }, 1, 2);
