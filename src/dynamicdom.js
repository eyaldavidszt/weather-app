// functions that create dynamically created dom elements, like weather cards.
function convertPropertyToDom(property, card, value) {
  if (property === "icon") {
    const child = document.createElement("img");
    child.src = value;
    card.appendChild(child);
  }
  if (property === "is_day") {
    if (value == "1") {
      card.classList.add("day");
    } else {
      card.classList.add("night");
    }
  }
  if (property === "temp_c" || property === "temp_f") {
    const child = document.createElement("div");
    child.setAttribute("data", property);
    child.textContent = `${value}°`;
    if (property === "temp_c") {
      child.textContent += " Celsius";
    } else {
      child.textContent += " Fahrenheit";
    }
    card.appendChild(child);
  }
  if (property === "condition") {
    const child = document.createElement("div");
    child.setAttribute("data", property);
    child.textContent = value;
    card.appendChild(child);
  }
  if (property === "date") {
    const child = document.createElement("div");
    child.setAttribute("data", property);
    child.textContent = value;
    card.appendChild(child);
  }
  if (property === "today") {
    const child = document.createElement("div");
    child.setAttribute("data", property);
    child.classList.add("today");
    child.textContent = "Today";
    card.insertBefore(child, card.firstChild);
  }
  // if (property === "name") {
  //   const child = document.createElement("div");
  //   child.setAttribute("data", property);
  //   child.textContent = value;
  //   card.insertBefore(child, card.firstChild);
  // }
}

function makeCard(object) {
  const card = document.createElement("div");
  card.classList.add("card");
  for (let property in object) {
    console.log(`${property}: ${object[property]}`);
    convertPropertyToDom(property, card, object[property]);
  }
  return card;
}
function makeCards(array) {
  for (let i = 0; i < array.length; i++) {
    const newCard = makeCard(array[i]);
    document.querySelector(".card-container").appendChild(newCard);
  }
}

export { makeCards };
