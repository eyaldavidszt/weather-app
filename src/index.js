import "./assets/style.css";
import { getLocationRelevant } from "./api";

const object = await getLocationRelevant("London");
console.log(object);
