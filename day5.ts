//                Day5
//Q13
let cars: string[] = ["Tesla","Supra","Audi"];

cars.forEach(car => {
    console.log(`I would like to own a ${car}.`);
});

//Q14
//Declaring guests array
let guests: string[] = ["Abdullah","Kashan","Bilal"];
// iniviting each guest
guests.forEach(guest=>{
    console.log(`${guest} would you like to join me jfor dinner?`)
})

//Q15
console.log(`Unfortunately ${guests[2]} could not join  us for dinner so replacing bilal with other guest.`);
//Removing the last element from array i.e Bilal.
guests.pop();
//Adding new one.
guests.push("Osaid");
//Now sending invitation.
guests.forEach(guest=>{
    console.log(`${guest} would you like to join me jfor dinner?`);
})