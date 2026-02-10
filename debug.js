// No character should appear more than twice
function isStrongPassword(s) {
  let map = {};

  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
    if (map[ch] > 2) {
      return false;
    }
  }
  return true;
}

// console.log(isStrongPassword("aabb"));
// console.log(isStrongPassword("abca"));
// console.log(isStrongPassword("aabcaa"));

// Every character must appear exactly twice
function spyMessage(s) {
  let map = {};

  for (let ch of s) {
    if (map[ch] === undefined) {
      map[ch] = 1;
    } else {
      map[ch]++;
    }
  }
  for (let ch in map) {
    if (!(map[ch] === 2)) {
      return false;
    }
  }
  return true;
}
// console.log(spyMessage("aabb"));
// console.log(spyMessage("aabc"));
// console.log(spyMessage("ab"));
// console.log(spyMessage("aabbcc"));
// console.log(spyMessage("aaabbbccc"));

// No number should repeat

function validDiceRoll(s) {
  let seen = {};

  for (let ch of s) {
    if (seen[ch] === undefined) {
      seen[ch] = 1;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(validDiceRoll("123456"));
// console.log(validDiceRoll("112345"));

// Return the first repeated item

function firstForgotten(items) {
  let seen = {};

  for (let ch of items) {
    if (seen[ch] === undefined) {
      seen[ch] = 1;
    } else {
      return ch;
    }
  }
  return null;
}

// console.log(firstForgotten(["pencil", "pen", "book", "pen", "book"]));

function tournamentWinner(matches) {
  let score = {};
  let winner = null;
  let max = 0;

  for (let player of matches) {
    if (score[player] === undefined) {
      score[player] = 1;
    } else {
      score[player]++;
    }

    if (score[player] > max) {
      max = score[player];
      winner = player;
    }
  }

  return winner;
}

//console.log(tournamentWinner(["A", "B", "A", "C", "A", "B"]));
// Return most frequent emoji

function moodAnalyzer(s) {
  let map = {};
  let mood = null;
  let max = 0;

  for (let ch of s) {
    if (map[ch] === undefined) {
      map[ch] = 1;
    } else;
    {
      map[ch]++;
    }
    if (map[ch] > max) {
      max = map[ch];
      mood = ch;
    }
  }
  return mood;
}

//console.log(moodAnalyzer("😀😀😡😀😢"));

// All characters appear same number of times

function isBalanced(formula) {
  let map = {};

  for (let ch of formula) {
    if (map[ch] === undefined) {
      map[ch] = 1;
    } else {
      map[ch] = map[ch] + 1;
    }
  }
  for (let ch in map) {
    if (!(map[ch] === map[formula[0]])) {
      return false;
    }
  }

  return true;
}

// console.log(isBalanced("HHHOOOTT"));
// console.log(isBalanced("HHOOT"));

// Same characters with same counts

function sameHandshake(a, b) {
  let map = {};
  let map2 = {};

  for (let ch of a) {
    if (map[ch] === undefined) {
      map[ch] = 1;
    } else {
      map[ch]++;
    }
  }
  for (let ch of b) {
    if (map2[ch] === undefined) {
      map2[ch] = 1;
    } else {
      map2[ch]++;
    }
  }

  for (let ch of b) {
    if (!(map2[ch] === map[ch])) {
      return false;
    }
  }
  return true;
}

console.log(sameHandshake("baa", "aba"));
