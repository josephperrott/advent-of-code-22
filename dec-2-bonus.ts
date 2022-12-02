// Need to have this to let typescript know this is not the global space.
export {}

const data = process.argv.at(2);

if (data === undefined) {
  console.error('Please provide the data input');
  process.exit(1);
}

const opponentMap = new Map([['A', 1], ['B', 2], ['C', 3]]);
const resultMap = new Map([['X', 0], ['Y', 3], ['Z', 6]]);

const rounds = data.split('\n')
.map(round => round.split(' '))
.map(([opponent, result]) => {
  return [opponentMap.get(opponent)!, resultMap.get(result)!,];
});


const finalScore = rounds.reduce((total, [opponent, result]) => {
  console.log(opponent, result)
  let me: number = 0;
  if (result === 3) {
    me = opponent;
  }
  if (result === 0) {
    if (opponent === 1) {
      me = 3
    } else {
      me = opponent - 1
    }
  }
  if (result === 6) {
    if (opponent === 3) {
      me = 1
    } else {
       me = opponent + 1
    }
  }
  return total + me + result;
}, 0);


console.log(finalScore);