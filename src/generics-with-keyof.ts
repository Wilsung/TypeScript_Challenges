//Example 1
//Returns the keys of an array with use of keyof.
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Spike", age: 20 },
  { name: "Boba", age: 18 },
];
// [ 20, 18 ]
console.log(pluck(dogs, "age"));

// [ 'Spike', 'Boba' ]
console.log(pluck(dogs, "name"));

//Example 2
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

//keyof ensures that we either use addToCart or checkout as defined above.
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

//   [
//     'addToCart',
//     { productID: 'abc1', quantity: 3, time: 10, user: 'jon' }
//   ]
sendEvent("addToCart", {
  productID: "abc1",
  quantity: 3,
  time: 10,
  user: "jon",
});

// [ 'checkout', { time: 3, user: 'ben' } ]
sendEvent("checkout", { time: 3, user: "ben" });
