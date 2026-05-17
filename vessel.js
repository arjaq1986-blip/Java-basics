let vessel = {
LATITUDE: 40.07288, 
LONGITUDE: 154.48535, 
COURSE: 285.6, 
SPEED: 14.0, 
IMO: 9175717, 
NAME: "MARENO"
}// just needed to change the way of describing the object from the exercise to fit the JavaScript language
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}