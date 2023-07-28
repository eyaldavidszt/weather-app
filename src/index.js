import "./assets/style.css";
import { getLocationRelevant } from "./api";

const searchBtn = document.querySelector("[data-search-btn]");
const inputLocationEl = document.querySelector("[data-location-input]");

searchBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const array = await getLocationRelevant(inputLocationEl.value);
  console.log(array);
});
