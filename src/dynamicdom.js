// functions that create dynamically created dom elements, like weather cards.
function convertPropertyToDom(property) {
  if (property === "icon") {
    console.log("found icon property");
  }
}

function makeCard(object) {
  const card = document.createElement("div");
  card.classList.add("card");
  for (let property in object) {
    convertPropertyToDom(property);
  }
  return card;
}
function makeCards(array) {
  for (let i = 0; i < array.length; i++) {
    const newCard = makeCard(array[i]);
    const node = document.querySelector(".card-container");
    node.appendChild(newCard);
  }
}

export { makeCards };
