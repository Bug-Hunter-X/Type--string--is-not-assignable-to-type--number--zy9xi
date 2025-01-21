function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or numeric strings.');
  }
  return numA + numB;
}

function subtractSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or numeric strings.');
  }
  return numA - numB;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = addSafe('5', 3); //8
const result4 = subtractSafe(10, '4'); //6

console.log(result1, result2, result3, result4); // Output: 8 6 8 6

// Example of error handling
try {
  const result5 = addSafe('hello', 5);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Arguments must be numbers or numeric strings.
}

//Example of NaN handling
console.log(addSafe(5, NaN)); // Output: NaN
console.log(addSafe(NaN, 5)); // Output: NaN