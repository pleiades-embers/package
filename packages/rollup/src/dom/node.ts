// import {inject,injectable} from "inversify"
// import { NodeType } from "./node_types";


// // @injectable()
// export class TaroNode {
//   public uid: string;
//   public nodeType:NodeType;
//   @inject("TaroNodeImpl")impl:any
// }



class C {
  @Reflect.metadata(metadataKey, metadataValue)
  method() {
  }
}

function metadataKey(metadataKey: any, metadataValue: any) {
  throw new Error("Function not implemented.");
}
function metadataValue(metadataKey: (metadataKey: any, metadataValue: any) => void, metadataValue: any) {
  throw new Error("Function not implemented.");
}

