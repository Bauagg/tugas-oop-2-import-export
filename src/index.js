// impor default
import dataContent, { app } from "./moduleData";
console.log(dataContent)
console.log(app)

// import object{}
import { createHaeder, createBody, render } from "./moduleData"
console.log(createHaeder(), createBody(), render())