// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let guestlist : string []=["Ali", "Sufiyan", "Abdul Ahad"]

console.log("unfortunately ! the new dinner table table wont arrive so we can invted only  2 guest");

guestlist.unshift( "Abdula","Ayan");

console.log("update list of guest:", guestlist);

 while (guestlist.length > 2) {
  let Removeguest : string | undefined =  guestlist.pop();
     if (Removeguest !== undefined) {
       console.log(` Sorry ${Removeguest}, we cant invite you`);
        
   }
 }
 guestlist.forEach(guest => {
     console.log(`Dear ${guest},you Both invited a dinner `);
    
 });

 guestlist.splice(0, guestlist.length)

 console.log("update list guest:", guestlist);


