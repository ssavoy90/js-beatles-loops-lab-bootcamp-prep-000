function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i = 0; i < musicians.length; i++); {
    emptyArray.push(musicians[i] + "plays" + instruments[i]);
  }
  return emptyArray
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newArray = []
  var count = 0
  while(count < facts.length) {
    newArray.push(facts[count] + "!!!");
    count++;
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
  return array;
}