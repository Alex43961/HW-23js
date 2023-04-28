'use strict'

import { list } from "./src/list.js";
import {workerList} from "./src/list-to-data.js";
import { randomDismissed, currencySalary, haveAHamster } from "./src/black-list.js";
import { isDismissed } from "./src/dismiss.js";

workerList(list);
const employeesList = workerList(list);
console.log("[workerList]", employeesList);

randomDismissed(employeesList)
console.log("[randomDismissed]", employeesList);


currencySalary(employeesList);
console.log("[currenсySalary]", employeesList);

haveAHamster(employeesList);
console.log("[haveAHamster]", employeesList);

console.log('[isDismissed]', isDismissed(employeesList));






