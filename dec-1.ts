// Need to have this to let typescript know this is not the global space.
export {}

const data = process.argv.at(2);

if (data === undefined) {
  console.error('Please provide the data input');
  process.exit(1);
}

const highestCalorieCount = Math.max(...data.split('\n\n').map(elf => elf.split('\n').map(Number).reduce((total, current) => total + current, 0)));
console.log(highestCalorieCount);

