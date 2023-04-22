'use strict'

import { list } from "./src/list.js";
import {workerList} from "./src/list-to-data.js";
import { randomDismissed } from "./src/black-list.js";

workerList(list);
const employeesList = workerList(list);
console.log(workerList(list));
console.log(randomDismissed(employeesList));


