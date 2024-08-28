//Can initialize construct with 'public' 
class Dog {
    constructor(public readonly name: string, public readonly age: number){
    }
}

const spike = new Dog('spike', 20);

class DogList {
    private doggies: Dog[] = [];

    //Creates only 1 possible instance of DogList.
    static instance: DogList = new DogList();

    private constructor(){}

    static addDog(dog: Dog){
        DogList.instance.doggies.push(dog);
    }

    getDogs(){
        return this.doggies;
    }
}

DogList.addDog(spike);
console.log(DogList.instance.getDogs()) // [ Dog { name: 'spike', age: 20 } ]