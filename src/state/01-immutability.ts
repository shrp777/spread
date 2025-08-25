const n = { step: 0, title: "Foo" };

const n1 = { ...n, step: 1 };

console.log(n1);

/*
{
  step: 1,
  title: "Foo",
}
*/

function shallowDiff(x: any, y: any) {
  const diff: any = {};

  for (const key in y) {
    if (x[key] !== y[key]) {
      diff[key] = y[key];
    }
  }

  return diff;
}

console.log(shallowDiff(n, n1));

/*
{
  step: 1,
}
*/

const n2 = { ...n1, bar: "baz" };

console.log(shallowDiff(n1, n2));

/*
{
  bar: "baz",
}
*/
