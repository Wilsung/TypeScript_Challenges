export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


let name = 'willy'
let logged = true;

let names: string[] = ['string', 'string2']

let numbers: (string | number)[] = [1,2,3,4, 's']

interface Person {
  first: string,
  last: string,
}

const myPerson: Person = {
  first: 'willy',
  last: "silly"
}

const ids: Record<number, string> = {
  1: 'id 1',
  2: 'id 2',
}
ids[3] = 'id 3';