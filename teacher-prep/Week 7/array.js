const menu = [
  { icon: '🍔', name: 'Hamburger', cost: 11.99, calories: 746, grams: 120 },
  { icon: '🍕', name: 'Pizza', cost: 15.67, calories: 3257, grams: 853 },
  { icon: '🍝', name: 'Pasta', cost: 18, calories: 307, grams: 100 },
  { icon: '🥐', name: 'Croissant', cost: 3.5, calories: 298, grams: 127 },
  { icon: '🍟', name: 'French Fries', cost: 2.8, calories: 480, grams: 154 },
  { icon: '🍩', name: 'Donut', cost: 4, calories: 303, grams: 67 },
  { icon: '🍫', name: 'Chocolate Bar', cost: 1.5, calories: 397, grams: 73 },
  { icon: '🌯', name: 'Souvlaki (gyros)', cost: 2.2, calories: 597, grams: 390 }  
];

/**
 * Scenario 1
 *
 * Waiter: What would you like to order sir/madam?
 * Me: Hey man, I am kinda on a budget - what do you have under 10 EUR?
 * Waiter: Let me show you sir/madam...
 */

const arr1 = [];

for (let i = 0; i < menu.length; i += 1) {
  const e = menu[i];
  if (e.cost < 10) {
    arr1.push(e);
  }
}

console.log(arr1);

// same as above using Array.prototype.filter

console.log(
  menu.filter(function (e) {
    return e.cost < 10;
  })
);

// same as above using Array.prototype.filter + fat arrow

console.log(
  menu.filter((e) =>  e.cost < 10)
);

/**
 * Scenario 2
 *
 * Waiter: What would you like to order sir/madam?
 * Me: Hey man, I am in for "value for money" - could you show me a calories per cost analysis?
 * Waiter: Let me show you sir/madam...
 */

const arr2 = [];

for (let i = 0; i < menu.length; i += 1) {
  const e = menu[i];
  arr2.push({
    id: i,
    icon: e.icon,
    calories: e.calories,
    cost: e.cost,
    caloriesPerCost: e.calories / e.cost
  });
}

console.log(arr2);

// same as above using Array.prototype.map

console.log(
  menu.map(function (e, i) {
    return {
      id: i,      
      icon: e.icon,
      calories: e.calories,
      cost: e.cost,
      caloriesPerCost: e.calories / e.cost
    };
  })
)

// same as above using Array.prototype.map + fat arrow

console.log(
  menu.map((e, i) => ({
    id: i,
    icon: e.icon,
    calories: e.calories,
    cost: e.cost,
    caloriesPerCost: e.calories / e.cost
  }))
);

/**
 * Scenario 3
 *
 * Waiter: What would you like to order sir/madam?
 * Me: I would like a burger and a chocolate please - how much would that cost?
 * Waiter: Let me do the calculations sir/madam...
 */

let totalCost = 0;

for (let i = 0; i < menu.length; i += 1) {
  const e = menu[i];
  if (e.icon === '🍫' || e.icon === '🍔') {
    totalCost += e.cost; 
  }
}

console.log(totalCost);

// same as above using Array.prototype.reduce

console.log(
  menu
    .filter(function (e) {
      return e.icon === '🍫' || e.icon === '🍔';
    })
    .reduce(function (accumulator, e) {
      return accumulator + e.cost;
    }, 0)
)

// same as above using Array.prototype.reduce + fat arrow

console.log(
  menu
    .filter((e) => e.icon === '🍫' || e.icon === '🍔')
    .reduce((accumulator, e) => accumulator + e.cost, 0)
)

/**
 * Scenario 4
 *
 * Waiter: What would you like to order sir/madam?
 * Me: Dude, I just won the lottery - what would your most expensive plate be?
 * Waiter: Let me see...
 */

/**
 * Scenario 5
 *
 * Waiter: What would you like to order sir/madam?
 * Me: I just got back from the dessert, I am so hungry I will buy everything. How much would that be?
 * Waiter: OMG! Let me run some calculations... 
 */

/**
 * Scenario 6
 *
 * Waiter: What would you like to order sir/madam?
 * Me: I am between hamburger, pizza and souvlaki. I would like your most nourishing plate, in terms of calories per gram. What would that be?
 * Waiter: Sure sir, I get requests like that every day... 
 */

 // Source: https://gist.github.com/jmike/a8daff88bf2157a87a113add50b31c87