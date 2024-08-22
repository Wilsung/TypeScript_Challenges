//Member Visibility Example
interface Database<T, K>{
    get(id: K): T;
    set(id: K, value: T): void;
}


type GenericKeyDB = string | number | symbol;

class InMemoryDatabase<T, K extends GenericKeyDB> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>;
    get(id:K): T {
        return this.db[id];
    }
    set(id:K, value: T): void{
        this.db[id] = value;
    }
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

class PersistentMemoryDB<T, K extends GenericKeyDB> extends InMemoryDatabase<T, K> implements Persistable{
     saveToString(): string{
        return JSON.stringify(this.db);
     }
     restoreFromString(storedState: string): void {
         this.db = JSON.parse(storedState);
     }
}

const myDB = new PersistentMemoryDB<string, string>();
myDB.set("example_key1", "example_set1");

console.log(myDB.get("example_key1")); // returns example_set1

//This is database 1 key,value ... {"example_key1":"example_set1"}
const saved = myDB.saveToString();
myDB.set('example_key1', 'new_setvalue1');

const myDB2 = new PersistentMemoryDB<string, string>();
//This grabs the value before setting to 'new_setvalue1'
myDB2.restoreFromString(saved);
console.log(myDB2.get('example_key1')) // returns example_set1