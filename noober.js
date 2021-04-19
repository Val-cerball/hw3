// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

// Store the 5 main categories of Passenger and Ride information in memory: 1.Passenger Details, 2.Pickup location , 3.Drop-off location, 4. number of passenger travelling and 5.luxury level of service requested "purple request"

let info1 = ride.passengerDetails; 
let info2 = ride.pickupLocation; 
let info3 = ride.dropoffLocation;
let info4 = ride.numberOfPassengers; 
let info5 = ride.purpleRequested;

// Store the sub-categories of passenger's ride in memory:

let PassengerFirstName = info1.first;
let PassengerLastName = info1.last;
let PassengerNumber = info1.phoneNumber; 
let PickupAddress = info2.address;
let PickupCity = info2.city;
let PickupState = info2.state;
let PickupZip = info2.zip
let DropoffAddress = info3.address;
let DropoffCity = info3.city;
let DropoffState = info3.state;
let DropoffZip = info3.zip;

// Write Passenger's information and ride details out to the console in a human-readable format. 

// If  the rider has requested the luxury "Purple" level of service, display "Noober Purple" no matter the numberOfPassengers in the ride. 

 if (info5 == true) {

  console.log(`Noober Purple Passenger:`, `${PassengerFirstName}`, 
  `${PassengerLastName}`, 
  `-`, 
  `${PassengerNumber}.`, 
  `Pick-up at:`, 
  `${PickupAddress},`,
  `${PickupCity},`,
  `${PickupState}`,
  `${PickupZip}.`, 
  `Drop-off at:`,
  `${DropoffAddress},`, 
  `${DropoffCity},`, 
  `${DropoffState}`, 
  `${DropoffZip}.`)

 // If the rider has not requested Noober Purple but the numberOfPassengers in a single ride request is greater than 3, display "Noober XL" as the level of service.

} else if (info5 == false && info4 > 3) {

  console.log (`Noober XL Passenger:`, `${PassengerFirstName}`, 
  `${PassengerLastName}`, 
  `-`, 
  `${PassengerNumber}.`, 
  `Pick-up at:`, 
  `${PickupAddress},`,
  `${PickupCity},`,
  `${PickupState}`,
  `${PickupZip}.`, 
  `Drop-off at:`,
  `${DropoffAddress},`, 
  `${DropoffCity},`, 
  `${DropoffState}`, 
  `${DropoffZip}.`)

// Anything else is the normal level of service and should display "Noober X"

} else {

  console.log (`Noober X Passenger:`, `${PassengerFirstName}`, 
  `${PassengerLastName}`, 
  `-`, 
  `${PassengerNumber}.`, 
  `Pick-up at:`, 
  `${PickupAddress},`,
  `${PickupCity},`,
  `${PickupState}`,
  `${PickupZip}.`, 
  `Drop-off at:`,
  `${DropoffAddress},`, 
  `${DropoffCity},`, 
  `${DropoffState}`, 
  `${DropoffZip}.`)
}


  // 🔥 YOUR CODE ENDS HERE 🔥
})
