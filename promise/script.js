// 非同期処理
export const func1 = async () => {
  // このコードを完成させてください
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const json = await fetch(url).then((res) => res.json());
  return json;
};

// 直列で非同期処理
export const func2 = async () => {
  // このコードを完成させてください
  for (let i = 1; i <= 5; i++) {
    const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
    const json = await fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};

// 並列で非同期処理
export const func3 = async () => {
  // このコードを完成させてください
  const promises = [];
  for (let i = 1; i <= 5; i++) {
    const url = `https://jsonplaceholder.typicode.com/todos/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  return await Promise.all(promises);
};
