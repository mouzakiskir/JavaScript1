'use strict'
//You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
//Declare a variable that holds an empty array, called drinkTray.
let drinkTray=new Array(5);

//There are 3 different types of drinks:
//const drinkTypes = ["cola", "lemonade", "water"];
const drinkTypes = ["cola", "lemonade", "water"];

/*Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. 
The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
If there are already two instances of a drinkType then start with the next drink in the array.
Your drinkTray should contain 2 cola, 2 lemonade and 1 water.*/
let x = 0;
for (let i = 0; i < 5; i++){
    drinkTray[i] = drinkTypes[x];
    if(i%2 == 1) x++;
}

//Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
console.log("Hey guys, I brought a " + drinkTray.join()+"."); 