export const numberSeparator = num => {
  console.log('numberSeparator -> ', num);

  if (num && parseInt(num) !== isNaN) {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }
};
