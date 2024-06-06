"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = ["Ali", "Sufiyan", "Abdul Ahad"];
//console.log(guestlist);
console.log("Great  News! we found a bigger dinner table  ");
guestlist.unshift("Ahmead");
//console.log(guestlist);
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Noman,");
// console.log(guestlist);
guestlist.push("Umer");
//console.log(guestlist);
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are codially invited to dinner`);
});
while (guestlist.length > 2) {
    let removedGuest = "guestlist.pop()";
    if (removedGuest !== undefined)
        ;
}
