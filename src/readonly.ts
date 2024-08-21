
interface Person {
    name: string;
    age: number;
}

function makePerson(name: string, age: number): Person{
    return {
        name,
        age
    }
}

//Mutable example
const tony = makePerson("tony", 32);
tony.name = 'barker'

//{ name: 'barker', age: 32 }
console.log(tony);

//Two ways to write readonly 
// 1. Write it before the variable.
interface M1_Person {
    readonly name: string;
    age: number;
}

// 2. Utility type Readonly<T>
type ReadonlyPerson = Readonly<Person>

function ReadonlyMakePerson(name: string, age: number): Readonly<Person>{
    return {
        name,
        age
    }
}

//Immutable array using as const
const arr1 = [1,2,3] as const;
