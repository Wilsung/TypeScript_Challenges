interface Coordinate {
  x: number;
  y: number;
}

type CoordKey = keyof Coordinate;


function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y
  };
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };

    if (typeof arg1 === 'object'){
        coord = {
            ...(arg1 as Coordinate) //we defined Coordinate with interface so we use 'as'
            //this is because we're taking in 'unkown' as the parameters.
        }
    }else if(typeof arg1 === 'string'){
        (arg1 as string).split(',').forEach(str => {
            const [key, value] = str.split(':');
            coord[key as CoordKey] = parseInt(value);
        })
    }
    else{
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        };
    }

    return coord;
}

console.log(parseCoordinate(10,20));

console.log(parseCoordinate({x: 52, y: 20}));

console.log(parseCoordinate("x:32,y:32"));