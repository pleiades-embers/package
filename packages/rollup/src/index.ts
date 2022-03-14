import "reflect-metadata";
// export { TaroNode } from './dom/node'

function Prop(): PropertyDecorator {
  return (target, key: string) => {
    const type = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${type.name}`);
    // other...
  };
}

class SomeClass {
  @Prop()
  public Aprop!: string;
  @Prop()
  public Cprop!: number;
}


@Reflect.metadata('name', 'A')
class A {
  @Reflect.metadata('name', 'hello')
  hello() {}
}

const objs = [A, new A, A.prototype]
const res = objs.map(obj => [
  Reflect.getMetadata('name', obj),
  Reflect.getMetadata('name', obj, 'hello'),
  Reflect.getOwnMetadata('name', obj),
  Reflect.getOwnMetadata('name', obj ,'hello')
])
console.log(res)