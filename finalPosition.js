const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

function finalPosition(moves) {
  let position = [0,0]
  for (const move of moves) {
    if (move === 'north') { //(0,1)
      position[1] = position[1] + 1
    }
    else if (move === 'south') { //(0,-1)
      position[1] = position[1] - 1
    }
    else if (move === 'east') { //(1,0)
      position[0] = position[0] + 1
    }
    else if (move === 'west') { //(-1,0)
      position[0] = position[0] - 1
    }
  }
  return position
}

finalPosition(moves);
console.log(finalPosition(moves));