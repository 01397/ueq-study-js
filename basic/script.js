// ループ・配列・データ型の問題
export const func1 = (n) => {
  // このコードを完成させてください
  if (n % 1 !== 0) {
    return [];
  }
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }
  return array;
};

// 条件分岐・データ型の問題
export const func2 = (n) => {
  // このコードを完成させてください
  // FizzBuzz
  if (isNaN(n) || n % 1 !== 0 || n < 1) {
    return 'error';
  } else if (n % 15 === 0) {
    return 'FizzBuzz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else {
    return n.toString();
  }
};
