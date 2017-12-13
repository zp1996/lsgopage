export function getData(fn, ctx) {
  fn().then((res) => {
    if (res._id) {      // eslint-disable-line
      delete res._id;   // eslint-disable-line
    }
    console.log(res);
    Object.keys(res).forEach((key) => {
      ctx[key] = res[key];
    });
  });
}
export function test() {
  console.log('test');
}
