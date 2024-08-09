function addNumbers(a: number, b: number): number {
  return a + b;
}

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`);
};

export const joinArrays = (salutation: string, ...arr1: string[]): string => {
  return `${salutation} ${arr1.join("")}`;
};

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}

export default addNumbers;
