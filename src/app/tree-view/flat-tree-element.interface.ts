import { ElementWithUUID } from "./element-with-uuid.interface";

export interface FlatTreeElement {
    name: string;
    elementInstance: ElementWithUUID;
    level: number;
    expandable: boolean;
  }