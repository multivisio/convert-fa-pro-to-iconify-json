import { buildIconSet } from "./lib/index";

const set = buildIconSet("pfar", {
  prefix: "far",
  iconNames: ["arrow-rotate-right"],
});

console.log(set);
