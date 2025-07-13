import { buildIconSet } from "./lib/build-icon-set.js";
import { far } from "@fortawesome/pro-regular-svg-icons"

const set = buildIconSet("pfar", [
  far.faAlarmClock,
  far.faArrowDown,
]);

console.log(set)