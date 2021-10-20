// keyof 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof  Person; // "name" | "age" | "location"
type K2 = keyof  Person[]; // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string | number




enum DeliveryDateType {
    NOW = 'NOW',
    AFTER_SPECIFIED_TIME = 'AFTER_SPECIFIED_TIME',
    WITHIN_SPECIFIED_TIME = 'WITHIN_SPECIFIED_TIME',
    SPECIFIED_TIME = 'SPECIFIED_TIME',
    SPECIFIED_DATE = 'SPECIFIED_DATE'
}

type k4=keyof typeof DeliveryDateType
type k5=keyof typeof DeliveryDateType


type Arrayish = { [k:number]: unknown };
type A = keyof Arrayish;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

//函数 typeof
function f() {
    return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;


