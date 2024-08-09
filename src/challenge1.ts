import houses from "./houses.json";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  id: number;
  name: string;
  planets: string | string[];
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
) {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  if (filter) {
    return houses.filter(filter).map((house) => ({
      id: houses.indexOf(house),
      ...house,
    }));
  } else {
    return houses;
  }
}
console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
