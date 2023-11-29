console.log('GOOD MORNING WORLD');

function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return [];
  }
  const result = input.reduce(
    (acc, curr) => {
      const isNegative = Math.sign(curr) === -1;
      if (isNegative) {
        acc[1] += curr;
        return acc;
      }
      if (Math.sign(curr) === 0) {
        return acc;
      }
      // eslint-disable-next-line no-plusplus
      acc[0]++;
      return acc;
    },
    [0, 0]
  );

  return result;
  // your code here
}

const testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

const result = countPositivesSumNegatives(testData);

console.log(result);
