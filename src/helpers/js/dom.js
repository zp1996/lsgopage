const clearTimer = (timer) => {
  if (timer != null) {
    clearTimeout(timer);
  }
};
export function debounce(fn, wait, maxWait = 0) {
  let prev;
  let timer;
  return () => {
    const now = +new Date();
    if (!prev) prev = now;
    if (maxWait && (now - prev) > maxWait) {
      clearTimer(timer);
      fn();
      prev = now;
    } else {
      clearTimer(timer);
      timer = setTimeout(() => fn(), wait);
    }
  };
}

export function test() {
  console.log('test');
}
