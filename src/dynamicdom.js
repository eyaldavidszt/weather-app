// functions that create dynamically created dom elements, like weather cards.

function makeCard(item) {
  console.log(item);
  for (let property in item) {
    console.log(`${property}: ${item[property]}`);
  }
}
function makeCards(array) {
  for (let i = 0; i < array.length; i++) {
    makeCard(array[i]);
  }
}

export { makeCards };
