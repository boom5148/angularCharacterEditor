import {ControllerOne} from "./controllerOne"
export class ControllerTwo {
    fieldA = "A";
    fieldB : ControllerOne;
    constructor(){
        this.fieldB = new ControllerOne();
    }
}