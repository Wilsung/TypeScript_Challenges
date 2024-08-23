type MyFlexiblePerson = {
  name: string;
} & Record<string, string | number>;
// same as
type MyFlexiblePerson2 = {
  name: string;
  [key: string]: string | number;
};

interface PersonInfo {
  name: string;
  age: number;
}

//TypeScript Documenation
type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};
type PersonInfoOptions = OptionsFlags<PersonInfo>;

//Mapping type - could add additional types through '&'.
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: Type[Property]
  ) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs implementation.";
}

const max: PersonInfo = {
  name: "max",
  age: 32,
};

listenToObject(max, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});
