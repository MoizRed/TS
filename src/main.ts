import { clear } from "console";
import { mkdir } from "fs";

function addAll(...numbs: number[]): number {
  let result = 0;
  numbs.forEach((nums) => (result += nums));
  return result;
}

console.log(addAll(1, 3, 6, 5, 5, -Number(true) * 1));

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

const hello = (num1: number, num2: number): number => num1 + num2;

console.log(hello(1, 2));

type job = string;

let JOb: job = "worker";

type hello = string | number;

let hi: hello = "hi";

hi = 3;

console.log(hi);

type buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type last = buttons & {
  x: boolean;
};

function Getactions(btns: last): void {
  console.log(`action for button up is ${btns.up}`);
  console.log(`action for button right is ${btns.right}`);
  console.log(`action for button down is ${btns.down}`);
  console.log(`action for button left is ${btns.left}`);
}

Getactions({
  up: "up arrow",
  right: "right arrow",
  down: "down arrow",
  left: "left arrow",
  x: true,
});

type nums = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

function compare(num1: number, num2: number): number {
  if (num1 > num2) {
    return 1;
  }

  let Article: [number, string, boolean] = [1, "TITLE", true];
  Article[1] = "hello";

  function show(msg: string): void {
    while (true) {
      console.log(msg);
    }
  }
}

let age: number = 38;
let country: string = "algeria";

interface SubjectModel {
  name: string;
  age: number;
  country: string;
}

let subject1: SubjectModel = {
  name: "hi",
  age: 389,
  country: "algeria",
};

type Document = [string, number, boolean];

let doc1: Document = ["classified", 2, false];

let fridge: "salad" | "tomato" = "tomato";

let img = <HTMLElement>document.getElementById("img") as HTMLInputElement;
console.log(img?.value);

let data: any = "1000";
console.log((data as string).length);

interface User {
  readonly name: string;
  age?: number;
  country: string;
  sayhello(): string;
}

let user1: User = {
  name: "hi",
  country: "agleria",
  sayhello() {
    return "helo";
  },
};


user1.country = "hello";

interface Settings {
  theme: boolean;
  font: string;
}

interface Users {
  id: number;
  username: string;
  country: string;
}

interface Moderator extends Users {
  edit: boolean;
}

interface Admin extends Moderator {
  delete: boolean;
}

let user: Admin = {
  id: 3,
  username: "capous",
  country: "alaroda",
  edit: false,
  delete: false,
};

export function returntype<T>(val: T): T {
  return val;
}
class Users<T> {
  private value: T;


  constructor(value: T) {
    this.value = value;
  }

  showmsg(msg: T): string {
    return msg;
  }
}



.