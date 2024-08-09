type ThreeDCoord = [number, y: number, z: number];
function add3DCoord(c1: ThreeDCoord, c2: ThreeDCoord): ThreeDCoord {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoord([3, 2, 1], [10, 20, 30]));

function simpleStateFucntion(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStateFucntion('hello')
console.log(str1getter())
str1setter('willy')
console.log(str1getter())