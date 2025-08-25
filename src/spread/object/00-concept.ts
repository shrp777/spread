const x = { value: 1 };
const y = { ...x, value: 2 };

console.log(x);
/*
{
  value: 1,
}
*/

console.log(y);
/*
{
  value: 2,
}
*/
