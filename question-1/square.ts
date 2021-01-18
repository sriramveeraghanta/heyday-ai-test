import Rectangle from "./rectangle";

export default class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
}
