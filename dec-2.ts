// Need to have this to let typescript know this is not the global space.
export {}

const data = process.argv.at(2);

if (data === undefined) {
  console.error('Please provide the data input');
  process.exit(1);
}

const opponentMap = new Map([['A', 1], ['B', 2], ['C', 3]]);
const myMap = new Map([['X', 1], ['Y', 2], ['Z', 3]]);

const rounds = data.split('\n')
.map(round => round.split(' '))
.map(([opponent, me]) => {
  return [opponentMap.get(opponent)!, myMap.get(me)!,];
});


const finalScore = rounds.reduce((total, [opponent, me]) => {
  let result = 6;
  if (me === opponent) {
    result = 3;
  }
  if (
    (opponent === 1 && me === 3) ||
    (opponent === 2 && me === 1) ||
    (opponent === 3 && me === 2)
   ) {
    result = 0
  }
  return total + me + result;
}, 0);


console.log(finalScore);