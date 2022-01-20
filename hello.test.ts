import { combineLatest, merge, Subject } from "rxjs";

it("works", () => {
  expect(true).toBe(true);
});

it("this test is not reactive", () => {
  let a = 3;
  let b = 3;
  let c = a + b;
  expect(c).toBe(6);
  a = a + 1;
  c = a + b;
  expect(c).toBe(7);
});

it("hello world", () => {
  const eventEmitter = new Subject();

  //consumer
  eventEmitter.subscribe(console.log);

  //producer
  eventEmitter.next("hello world");
  eventEmitter.next("see ya");
});

it("example combineLAtest", () => {
  const a = new Subject();
  const b = new Subject();
  const c = combineLatest(a, b); //creates an array

  //consumer
  c.subscribe(console.log);

  //producer
  a.next("hello world");
  b.next("see ya");
});

it("example merge", () => {
  const a = new Subject();
  const b = new Subject();
  const c = merge(a, b); //gives events in order

  //consumer
  c.subscribe(console.log);

  //producer
  a.next("hello world");
  b.next("see ya");
});

it("spreadsheet example combineLAtest", () => {
  const a = new Subject<number>();
  const b = new Subject<number>();
  const c = combineLatest(a, b); //creates an array

  //consumer
  c.subscribe(([a, b]) => console.log(a + b));

  //producer
  a.next(3);
  b.next(3);
  b.next(4); //produces a second answer as C reacts to the change
});

//run npm t -- --watch
