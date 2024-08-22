//Member Visibility Example
interface Database{
    get(id: string): string;
    set(id: string, value: string): void;
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {};
    get(id:string): string {
        return this.db[id];
    }
    set(id:string, value:string): void{
        this.db[id] = value;
    }
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable{
     saveToString(): string{
        return JSON.stringify(this.db);
     }
     restoreFromString(storedState: string): void {
         this.db = JSON.parse(storedState);
     }
}

const myDB = new PersistentMemoryDB();
myDB.set("example_key1", "example_set1");

console.log(myDB.get("example_key1")); // returns example_set1

//This is database 1 key,value ... {"example_key1":"example_set1"}
const saved = myDB.saveToString();
myDB.set('example_key1', 'new_setvalue1');


const myDB2 = new PersistentMemoryDB();
//This grabs the value before setting to 'new_setvalue1'
myDB2.restoreFromString(saved);
console.log(myDB2.get('example_key1')) // returns example_set1