export const throttle = (callback, limit = 300) => {
  let wait = false;
  let callbackTiemout;

  return () => {
    if (!wait) {
      clearTimeout(callbackTiemout);
      callback();
      wait = true;
      setTimeout(() => {
        wait = false;
        callbackTiemout = window.setTimeout(callback, limit);
      }, limit);
    }
  };
};
