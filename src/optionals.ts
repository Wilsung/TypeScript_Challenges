function printIngredient(quantity: string, ingredient: string, email?: string) {
  console.log(`${quantity} ${ingredient}`);
}

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function fnCallback(x: number, y: number, callback?: () => void) {
  callback?.();
}
