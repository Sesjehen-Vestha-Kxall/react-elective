
/*==============================================
    Author: Miguel Angel Avila Torres
    Topic: lambdas
==============================================*/

let print = (s) => console.log(s);
let greeting = (subject) => `Hello ${subject}!`;
let multiply = (a, b) => a * b;

const xRand = Math.random()
const x = Math.round(xRand * 100);

document.getElementById('text-source').innerHTML =
    `Invoicing a Random Number: ${xRand}`;

let lim = 10;

[...Array(lim).keys()].forEach(i => {
    document.getElementById('table-div').innerHTML += `
    <tr>
        <th style="text-align: center">${++i} * ${x} = ${x * i}</th>
    </tr>`;
});
