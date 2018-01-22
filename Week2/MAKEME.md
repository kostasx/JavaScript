## Homework Week 2

>[Here](https://github.com/SocialHackersCodeSchool/JavaScript/tree/master/Week2/README.md) you find the readings you have to complete before the third lecture.

## Step 1: Watch

1. If you haven't done already, watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro) Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though). 

2. If you want a refresher on Functions you should see [this video](https://www.youtube.com/watch?v=5nuqALOHN1M).

3. If you want a refresher on Objects you should see [this video](https://www.youtube.com/watch?v=mgwiCUpuCxA)

## Step 2: **Some freeCodeCamp challenges (10 hours):**

On freeCodeCamp.com please do the [Basic JavaScript](https://www.freecodecamp.org/map) exercises up and until the __"Shopping List"__ exercise (there are some topics we did not cover but you can do it).

## Step 3: JavaScript
> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference

1. Create a function that takes 3 arguments and returns the sum of the three arguments.

2. Create a function named `colorCar` that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)

3. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as `vehicleType("blue", 2)`

4. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?
```js
if (3 == 3) {
    console.log("true")
} else {
    console.log("false")
}
```

5. Create a function called `vehicle`, like before, but takes another parameter called age, so that `vehicle("blue", 1, 5)` prints "a blue used car"

6. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.

7. How do you get the third element from that list?

8. Change the function `vehicle` to use the list of question 6. So that `vehicle("green", 3, 1)` prints "a green new caravan".

9. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop.)

10. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?

11. Write some code to test two arrays for equality using `==` and `===`. Test the following:
    
```js
    var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
```

What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!
    
> Don't cheat! Seriously - try it first.

12. What does the following code return? (And why?)
```js
let bar = 42; 
typeof typeof bar;
```

 
> ‘Coerce' means to try to change - so coercing `var x = '6'` to number means trying to change the type to number temporarily. 

```
How to hand in your homework:
• Upload your homework in your "sha-javascript1" Github repository. Make sure to create a new folder "week2" first. 
• Upload your homework files inside the week2 folder and write a description for this “commit”.
• Your sha-javascript1/week2 should now contain all your homework files.
• Place the link to your repository folder in Trello.
```

:star: Additional resources and review: [here](https://github.com/SocialHackersCodeSchool/JavaScript/tree/master/Week2/REVIEW.md) (work in progress):star:

