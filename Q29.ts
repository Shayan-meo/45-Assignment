
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favoritefruits : string[]=["Banana","apple","Strawaberry"]

if(favoritefruits.includes("Banana")){
    console.log("you really like Banana!");
}
if(favoritefruits.includes("Apple")){
    console.log("you really like Apple!");
}
if(favoritefruits.includes("Orange")){
    console.log("you really like Orange");
}
else{
    console.log("Orange are not in you favorite fruit list.");
}
if (favoritefruits.includes("Strawaberry")){
    console.log("you really like Strawaberries!");
}
if(favoritefruits.includes("Grapes")){
    console.log("you really like Grapes");
}
else{
    console.log("Grapes are not in your favortie list.");
    
}