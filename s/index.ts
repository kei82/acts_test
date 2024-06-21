import "dotenv/config";

const dd = (a: string): string => {
  return a + a;
};

console.log(dd("d"), process.argv, process.env);
