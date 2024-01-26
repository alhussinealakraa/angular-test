export const memoize = (fn: any) => {
  let cache: any = {};
  return (...args: any) => {
    const cacheKey = JSON.stringify(args);
    if (typeof cache[cacheKey] === 'undefined') {
      const result = fn(...args);
      cache[cacheKey] = result;
      return result;
    } else {
      return cache[cacheKey];
    }
  };
};
