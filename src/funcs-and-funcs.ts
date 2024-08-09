export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (item:number) => number;

export function mutateNumbers(
  numbers: number[],
  mutateFn: MutationFunction
): number[] {
    return numbers.map(mutateFn);
}


const mutationFn: MutationFunction = (v: number) => v*2;

console.log(mutateNumbers([1,2,3], mutationFn))

export type TypeFunction = (param1: number) => number;

export function createAdder(param1: number): TypeFunction{
    return (
        (val: number) => val + param1
    );
}

const addOne = createAdder(1);
console.log(addOne(22));