const n = { step: 0, title: "Foo" };

const n1 = { ...n, step: 1 };

console.log(n1);

/*
{
  step: 1,
  title: "Foo",
}
*/

try {
  n1 = null; //will throw error
} catch (error) {
  console.error(n1); //-> error: This assignment will throw because "n1" is a constant
}

n1.step = 2; //will not throw error

console.log(n1);
/*
{
  step: 2,
  title: "Foo",
}
*/

Object.freeze(n1);

try {
  n1.step = 3; //will throw error
} catch (error) {
  console.error(error); //-> "TypeError: Attempted to assign to readonly property."
}

console.log(n1);
/*
{
  step: 2,
  title: "Foo",
}
*/
