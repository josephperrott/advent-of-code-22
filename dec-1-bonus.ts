// Need to have this to let typescript know this is not the global space.
export {}

const data = process.argv.at(2);

if (data === undefined) {
  console.error('Please provide the data input');
  process.exit(1);
}

const totaller = (total: number, current: number) => total + current;

const highestCalorieCount = data.split('\n\n').map(elf => elf.split('\n').map(Number).reduce(totaller, 0)).sort((a, b) => a < b ? 1 : -1).slice(0,3).reduce(totaller);
console.log(highestCalorieCount);

