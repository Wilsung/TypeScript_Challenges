//Partial Utility 
interface MyUser {
  name: string;
  id: string;
  email?: string;
}

//This duplicate code can be written with Partial<Type>
interface MyUserOptionalsNoUtility {
  name?: string;
  id?: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

// { name: 'Wilson', id: 'some_id', email: 'overrideemail@email.com' }
console.log(
  merge(
    { name: "Wilson", id: "some_id", email: "example@email.com" },
    { email: "overrideemail@email.com" }
  )
);


//Required Utility
type RequiredMyUser = Required<MyUser>

//Same as
interface MyUserRequiredNoUtility {
  name: string;
  id: string;
  email: string;
}

//Pick Utility <Type, Keys> 

//Gets only the "email" and "name" keys from MyUser
type JustEmailAndName = Pick<MyUser, "email" | "name">


//Record Utility <Key, Type> + Omit <Type, Key>

type UserWithoutID = Omit<MyUser, 'id'>;

//Instead of writing Record<string,...> we can also do Record<MyUser["id"],...>
const mapById = (users: MyUser[]): Record<string, UserWithoutID> => {
  return users.reduce((a,v) => {
    //Separated the id and other key,value pairs.
    const { id, ...other} = v;
    return {
      ...a,
      [id]: other,
    }
  }, {});
}

console.log(mapById([
  {
    id: 'foo',
    name: 'Mr. Foo'
  },
  {
    id: 'bar',
    name: 'Mr. Bar'
  }
]))