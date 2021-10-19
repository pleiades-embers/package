// 泛型
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};

console.log(getArray<number>(123, 4).map((item) => item.toFixed()));

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(["string", 123]);

//约束泛型
interface IWithLength {
  length: Number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWithLength("str");
const obj = echoWithLength({ length: 10, width: 10 });
const arr2 = echoWithLength([1, 2, 3]);
