module.exports = function reverse (n) {
  const arr = [];
  let result = String(Math.abs(n)).split('');

  for (let i = 0; i < result.length; i++) {
      arr.unshift(result[i]);
  }

  return arr.join('');
}
