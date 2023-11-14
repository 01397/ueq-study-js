const students = [
  {
    name: "Ken",
    score: 80,
    gender: "male",
  },
  {
    name: "Taro",
    score: 45,
    gender: "male",
  },
  {
    name: "Hana",
    score: 55,
    gender: "female",
  },
];

export const func1 = () => {
  // このコードを完成させてください
  return students.filter((student) => student.score >= 50).map(v => v.name);
};

export const func2 = () => {
  // このコードを完成させてください
  return students.filter((student) => student.gender === 'male').reduce((acc, cur) => acc + cur.score, 0);
};
